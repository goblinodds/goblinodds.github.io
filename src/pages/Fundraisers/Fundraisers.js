import React from 'react';
import { useState } from 'react';
import './Fundraisers.css';
import Profiles from './Profiles.js';
import Directories from './Directories.js';

// TODO
// ADD LITHROS' PROJECT TO DIRECTORIES.JS
// ask june and voidpriestess and brooke if u can add them
// filters:
    // one-time vs ongoing
// way to rank these by how soon they're finishing?
// make them more compact?? eg lump venmo/cashapp together?
// have venmo/cashapp be formatted like cashapp: $cashapp name, venmo: @venmo

// shows profiles in a random order on page load
shuffle(Profiles);

const menuOptions = {
    platform: [
        {label: 'PATREON', value: 'patreon'},
        {label: 'CASHAPP', value: 'cashapp'},
        {label: 'VENMO', value: 'venmo'},
        {label: 'WEBSITE', value: 'website'}
        // {label: 'KICKSTARTER', value: 'kickstarter'},
        // {label: 'GOFUNDME', value: 'gofundme'},
        // {label: 'KO-FI', value: 'kofi'}
    ],
    category: [
        {label: 'ART', value: 'art'},
        {label: 'ACTIVISM', value: 'activism'},
        {label: 'BLOGGING', value: 'blogging'},
        {label: 'COMMUNITY', value: 'community'},
        {label: 'FICTION', value: 'fiction'},
        {label: 'GAMES', value: 'games'},
    ]
}

// TODO add age filter
// replace "age" in Profiles with output of Age function??

export default function Fundraisers() {

    // arrays of directory entries to display
    // array being iterated over.map(format of individual item in array)
    const directoryDisplay = Directories.map(Directory);

    //
    // SETS FILTERS
    // 
    // default set of filters is empty
    const [filters, setFilters] = useState({
        gender: null,
        attracted: null,
        type: null,
        ageBracket: null,
        ldr: null
    });

    //
    // TOGGLES DROPDOWN MENUS
    // 
    // sets which dropdown is open (if any)
    const [activeDropdown, setActiveDropdown] = useState(null);

    // changes the value in the active filter
    // 'option' can be replaced with any word here
    // this works bc it's called *inside the map function*
    const filterUpdate = option => setFilters({ ...filters, [activeDropdown]: option })

    const currentDropdown = activeDropdown && <Submenu
        currentValue={filters[activeDropdown]}
        options={menuOptions[activeDropdown]}
        onSelect={filterUpdate}
    />;

    // clicking on an open dropdown closes it
    // clicking on a closed dropdown opens it
    function toggleDropdown(submenu) {
        // if the dropdown you've clicked to activate is active, hide it
        // if it's inactive, show it
        setActiveDropdown(submenu === activeDropdown ? null : submenu);
    }

    // display the current value or a default for the menu item
    // in place of the menu title (e.g. "WOMEN" instead of "GENDER")
    const menuDisplay = (key, defaultValue) => {
        // if the listed key exists in the current set of filters
        if (filters[key]) {
            // return, from the submenu items, the first item...
            // whose value matches the item at the filter's key
            let newMenuLabel = menuOptions[key].find(option => option.value === filters[key]);

            return newMenuLabel.label
        }
        else {
            return defaultValue
        }
    }

    //
    // RENDERED JSX
    //

    return (
        <div className='Directories'>
            <div className='Header'>
                <h1>TPOT FUNDRAISERS</h1>
                <p className='Tagline'>an ingroup directory with {Profiles.length} entries</p>
            </div>

            <div className='FilterMenu'>
                <h3 onClick={() => { toggleDropdown('platform') }} style={activeMenuStyle(filters['platform'])}>{menuDisplay('platform', 'PLATFORM')}</h3>
                <p className='FilterSentence'>//</p>
                <h3 onClick={() => { toggleDropdown('category') }} style={activeMenuStyle(filters['category'])}>{menuDisplay('category', 'CATEGORY')}</h3>
            </div>

            {(activeDropdown === 'platform' || activeDropdown === 'category') && currentDropdown}

            <div className='Directory'>
                {Profiles
                    // creates a shallow copy of a portion of Profiles
                    // filtered down just to elements that pass the function's test
                    .filter(profile => matchesFilters(profile, filters))
                    .map(profile => <Profile key={profile.link} {...profile} />)}
            </div>

            <div className='Header'>
                <h1>MORE DIRECTORIES</h1>
            </div>
            <div className='Directory'>
                {directoryDisplay}
            </div>
        </div>
    )

}

//
// COMPONENTS AND HELPER FUNCTIONS
// components capitalized / functions lowercase
//

function shuffle(array) {
    let remaining = array.length - 1;
    let last;
    let randomIndex;

    // while there are elements left to shuffle
    while (remaining) {
        // pick a remaining element
        randomIndex = Math.floor(Math.random() * remaining);
        // and swap it with the current element
        // store the value of the last element in the array
        last = array[remaining];
        // swap the last element with the randomly selected elementy by...
            // replacing the element at array[remaining] with the element at array[randomIndex]
        array[remaining] = array[randomIndex];
            // then replacing the element at array[randomIndex] with the value stored in 'last'
        array[randomIndex] = last;
        remaining--
    }

    return array;
}

// Does the profile match the filters?
// returns true/false
function matchesFilters(profile, filters) {
    return Object
        // returns an array of the property names (keys) in the current filters
        .keys(filters) // each of the filters (gender, attracted...)
        // tests whether all elements in the array pass the test of the function within it
        .every(filter =>  // whole thing is true if it's true for every filter
            filters[filter] === null || // true if the filter is empty
            // !profile[filter] || // or if the profile doesn't have that key
            // profile[filter].includes('unspecified') || // or the profile is unspecified
            profile[filter].includes(filters[filter]) // or the profile matches the filter
        )
}

// what the submenu actually displays
function Submenu({ currentValue, options, onSelect }) {
    return (
        <div className='FilterMenu'>
            {options && options.map(function (option) {
                // e.g. if the value that corresponds to the current submenu title, e.g. 'F'...
                // matches currentValue (which gets set to filters[activeDropdown]), then...
                // isActive = true, else isActive = false
                // NOTE: we're passing currentValue instead of just using filters[activeDropdown] bc of scope
                // + to keep this function neat and separate
                let isActive = option.value === currentValue;
                return (
                    <h3
                        key={option.label}
                        className='MenuItem'
                        // clicking again on the currently selected item unsets it
                        // if the submenu item is already active,
                        // then the filter gets set to nothing
                        // if it's not active, it gets set to the current option's value
                        onClick={() => onSelect(isActive ? null : option.value)}
                        style={{
                            color: color(isActive),
                            background: background(isActive)
                        }}
                    >
                        {option.label}
                    </h3>
                );
            })}
        </div>
    );
}

//
//  PROFILES JSX
//
// if (item) exists in the current profile, returns that information
function Profile(profile) {
    console.log(profile.ageBracket);
    return (
        <div key={profile.name} className='Name'>
            {/* NAME with LINK */}
            <p>⇨ <a href={profile.twitter} target='_blank' rel='noopener noreferrer'>
                    {profile.name}
                </a>
            </p>
            <Link item={profile.website} text='website' />
            <Link item={profile.patreon} text='patreon' />
            <Link item={profile.kickstarter} text='kickstarter' />
            <Link item={profile.gofundme} text='gofundme' />
            <Link item={profile.kofi} text='ko-fi' />            
            <Link item={profile.cashapp} text='cashapp' />
            <Link item={profile.venmo} text='venmo' />
            <Item item={profile.notes} />
        </div>
    )
}

function Item({ item }) {
    return (item ? (
        <p className='Info'>↳ {item}</p>
    ) : null)
}

function Link({ item, text }) {
    return (item ? (
        <p className='Info'>↳ <a href={item} target='_blank' rel='noopener noreferrer'>{text}</a></p>
    ) : null)
}

//
// DIRECTORIES JSX
//
function Directory(directory) {
    return (
        <div key={directory.link} className='Name'>
            <p>⇨ <a href={directory.link} target='_blank' rel='noopener noreferrer'>{directory.name}</a></p>
        </div>
    )
}

//
// STYLING
//
// active is e.g. filters['gender'], which might be null or it might be something else
// if it's truthy (i.e. not 'null') then the text color becomes black; else it's not changed
const color = (active) => active ? 'black' : '';
const background = (active) => active ? 'none' : '';
const border = (active) => active ? 'solid' : '';
const activeMenuStyle = (active) => ({ color: color(active), border: border(active) })