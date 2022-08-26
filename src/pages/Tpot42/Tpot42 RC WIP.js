import React from 'react';
import { useState } from 'react';
import './Tpot42.css';
import Profiles from '../../components/Tpot42/Profiles.js';
import Directories from '../../components/Tpot42/Directories.js';

const MenuOptions = { 
  gender:  [
    { label: 'WOMEN', value: 'F' },
    { label: 'ENBIES', value: 'NB' },
    { label: 'MEN', value: 'M' }
  ],
  attracted: [
    { label: 'WOMEN', value: 'F'},
    { label: 'ENBIES', value: 'NB'},
    { label: 'MEN', value: 'M'}
  ],
  type: [
    { label: 'MONO', value: 'mono'},
    { label: 'POLY', value: 'poly'},
  ],
  ldr: [
    { label: 'LDR OK', value: 'Y'},
    { label: 'NO LDR', value: 'N'},
  ],
}

export default function Tpot42() {
  // start with null in all the filters
  let [filters, setFilters] = useState({
    gender: null,
    attracted: null,
    type: null,
    ldr: null,
  });
  // which dropdown is currently open?
  let [activeDropdown, setActiveDropdown] = useState(null);
  // clicking again on the active dropdown unsets it
  const toggleDropdown = (val) => setActiveDropdown(val == activeDropdown ? null : val);
  
  // changes the value in the active filter
    // 'option' can be replaced with any word here
    // this works bc it's called *inside the map function*
  const filterUpdate = option => setFilters({...filters, [activeDropdown]: option})
  
  // so we don't have to compute this inline in the ternary, twice
  let currentDropdown = activeDropdown && <Dropdown 
    currentValue={filters[activeDropdown]}
    options={MenuOptions[activeDropdown]}
    onSelect={filterUpdate}
  />;

  return (
    <div className='Directories'>
      <div className='Header'>
        <h1>ROB'S REFACTOR</h1>
        <p>an ingroup "date me" directory</p>
      </div>

      <div className='FilterMenu'>
        <h3 onClick={() => toggleDropdown('gender')}>GENDER</h3>
        <p className='FilterSentence'> // </p>
        <h3 onClick={() => toggleDropdown('attracted')}>INTERESTED IN</h3>
      </div>

      { (activeDropdown == 'gender' || activeDropdown == 'attracted') && currentDropdown }

      <div className='FilterMenu'>
        <h3 onClick={() => toggleDropdown('type')}>TYPE</h3>
        <p className='FilterSentence'> // </p>
        <h3 onClick={() => toggleDropdown('ldr')}>LONG DISTANCE?</h3>
      </div>

      { (activeDropdown == 'type' || activeDropdown == 'ldr') && currentDropdown }

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
        {Directories.map((directory) =>  <Directory {...directory} />)}
      </div>
    </div>
  )
}

// Helpers
// Capitalized are helper components
// lowercased are helper functions

// Does the profile match the filters?
function matchesFilters(profile, filters) {
  return Object
    // returns an array of the property names (keys) in the current filters
    .keys(filters) // each of the filters (gender, attracted...)
    // tests whether all elements in the array pass the test of the function within it
    .every(filter =>  // whole thing is true if it's true for every filter
      filters[filter] === null || // true if the filter is empty
      !profile[filter] || // or if the profile doesn't have that key
      profile[filter].includes('unspecified') || // or the profile is unspecified
      profile[filter].includes(filters[filter]) // or the profile matches the filter
    )
}

function Dropdown({currentValue, options, onSelect}) {
  return (
    <div className='FilterMenu'>
      {options && options.map(option => {
        // e.g. if the value that corresponds to the current submenu title, e.g. 'F'...
        // matches currentValue (which gets set to filters[activeDropdown]), then...
        // isActive = true, else isActive = false
        // NOTE: we're passing currentValue instead of just using filters[activeDropdown] bc of scope
        // + to keep this function neat and separate
        let isActive = option.value == currentValue;
        return (
          <h3 
          key={option.label}
          className='MenuItem' 
          // clicking again on the currently selected item unsets it
          // if the submenu item is already active,
          // then the filter gets set to nothing
          // if it's not active, it gets set to the current option's value
          onClick={() => onSelect(isActive ? null : option.value)}>
          {option.label}
        </h3>
        );
      })}
      </div>
  );
}

function Directory(directory) {
    return (<div className='Name'>
      <p>⇨ <a href={directory.link} target='_blank' rel='noopener noreferrer'>{directory.name}</a></p>
    </div>)
}

function Profile(profile) {
  return (
      <div className='Name'>
        {/* NAME with LINK */}
        <p>⇨ <a href={profile.link} target='_blank' rel='noopener noreferrer'> {profile.name} </a>
        </p>
        <Link item={profile.twitter} text='twitter' />
        <Link item={profile.featuredTweet} text='featured tweet' />
        <Link item={profile.insta} text='instagram' />
        {(profile.born ? (<p className='Info'>↳ <Age {...{profile}} /></p> ) : null)}
        <Item item={profile.notes} />  
        <Item item={profile.location} />
      </div>
    )
}

// SAME
function Item({item}){
  return item ? (<p className='Info'>↳ {item}</p> ) : null
}    

function Link ({item, text}) {
    return (item ? (
      <p className='Info'>↳ <a href={item} target='_blank' rel='noopener noreferrer'>{text}</a></p> ) :
      null)
}

function Age({profile}) {
  let date = new Date().getFullYear();
  let age = date - profile.born;

  // no minors allowed, no ancients expected
  if (age < 18 || age > 99) {
    return '(this entry is broken, please notify goblin)';
  }        

  // creates an 'early/mid/late teens/20s, etc.' string
  return `age: ${eml(age)} ${decade(age)}`;
}

const eml = (age) => {
  if (age % 10 <= 3) return 'early';
  if (age % 10 >= 7 ) return 'late';
  return 'mid';
}

const decade = (age) => {
  if (age < 20) return 'teens';
  return age.toString()[0] + '0s';
}