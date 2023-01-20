import React from 'react';
import { useState } from 'react';
import './Tpot42.css';
import Profiles from './Profiles.js';
import Directories from './Directories.js';

// shows profiles in a random order on page load
shuffle(Profiles);
shuffle(Directories);

const menuOptions = {
    gender: [
        { label: 'WOMEN', value: 'F' },
        { label: 'ENBIES', value: 'NB' },
        { label: 'MEN', value: 'M' }
    ],
    attracted: [
        { label: 'WOMEN', value: 'F' },
        { label: 'ENBIES', value: 'NB' },
        { label: 'MEN', value: 'M' }
    ],
    type: [
        { label: 'MONO', value: 'mono' },
        { label: 'POLY', value: 'poly' },
        { label: '??', value: 'unspecified' }
    ],
    ageBracket: [
        { label: '<30', value: '<30'},
        { label: '30-40', value: '30-40'},
        { label: '>40', value: '>40'},
        { label: '??', value: 'unspecified'}
    ],
    ldr: [
        { label: 'LDR OK', value: 'Y' },
        { label: 'NO LDR', value: 'N' },
        { label: '??', value: 'unspecified' }
    ],
    loctype: [
        { label: 'FIXED', value: 'fixed' },
        { label: 'FLEXIBLE', value: 'flexible' },
        { label: '??', value: 'unspecified' }
    ],
    continent: [
        { label: 'AF', value: 'Africa'},
        { label: 'AS', value: 'Asia'},
        { label: 'EU', value: 'Europe'},
        { label: 'NA', value: 'North America'},
        { label: 'OC', value: 'Oceania'},
        { label: 'SA', value: 'South America'},
        { label: '??', value: 'unspecified'}
    ]
}

// TODO add age filter
// replace "age" in Profiles with output of Age function??

export default function Tpot42() {

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
                <h1>TPOT for two</h1>
                <p className='Tagline'>an ingroup "date me" directory with {Profiles.length} entries</p>
            </div>

            <div className='FilterMenu'>
                <h3 onClick={() => { toggleDropdown('gender') }} style={activeMenuStyle(filters['gender'])}>{menuDisplay('gender', 'GENDER')}</h3>
                <p className='FilterSentence'>//</p>
                <h3 onClick={() => { toggleDropdown('ldr') }} style={activeMenuStyle(filters['ldr'])}>{menuDisplay('ldr', 'LDR?')}</h3>
                <p className='FilterSentence'>//</p>
                <h3 onClick={() => { toggleDropdown('loctype') }} style={activeMenuStyle(filters['loctype'])}>{menuDisplay('loctype', 'LOCATION')}</h3>
            </div>

            {(activeDropdown === 'gender' || activeDropdown === 'ldr' || activeDropdown === 'loctype') && currentDropdown}

            <div className='FilterMenu'>
                <h3 onClick={() => { toggleDropdown('attracted') }} style={activeMenuStyle(filters['attracted'])}>{menuDisplay('attracted', 'ATTRACTED TO')}</h3>
                <p className='FilterSentence'>//</p>
                <h3 onClick={() => { toggleDropdown('type') }} style={activeMenuStyle(filters['type'])}>{menuDisplay('type', 'MONO/POLY')}</h3>
            </div>

            {(activeDropdown === 'attracted' || activeDropdown === 'type') && currentDropdown}

            <div className='FilterMenu'>
            <h3 onClick={() => { toggleDropdown('ageBracket') }} style={activeMenuStyle(filters['ageBracket'])}>{menuDisplay('ageBracket', 'AGE')}</h3>
                <p className='FilterSentence'>//</p>
                <h3 onClick={() => { toggleDropdown('continent') }} style={activeMenuStyle(filters['continent'])}>{menuDisplay('continent', 'CONTINENT')}</h3>
            </div>

            {(activeDropdown === 'ageBracket' || activeDropdown === 'continent') && currentDropdown}

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
        <div key={profile.link} className='Name'>
            {/* NAME with LINK */}
            <p>⇨ <a href={profile.link} target='_blank' rel='noopener noreferrer'>
                {profile.name}
            </a>
            </p>
            <Email item={profile.email} text='email'/>
            <Link item={profile.twitter} text='twitter' />
            <Link item={profile.featuredTweet} text='featured tweet' />
            <Link item={profile.insta} text='instagram' />
            <Item item={profile.ageDisplay} />
            <Item item={profile.notes} />
            <Item item={profile.location} />
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

function Email({ item }) {
    return (item ? (
        <p className='Info'>↳ email: {item}</p>
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