import React from 'react';
import { useState } from 'react';
import './Tpot42.css';
import Profiles from '../../components/Tpot42/Profiles.js';
import Directories from '../../components/Tpot42/Directories.js';

/*
 * This is a refactored version of the core Tpot42 component 
 *
 * The key differences are:
 * - much less state managed, lots more is computed / derived
 *  - no more global state variables; no more functions that mutate global state
 * - lots of little components are factored out (i.e. Item, Link, Age, Profile, Dropdown, and Directory components)
 *   - reduced the repetition for the dropdowns. required making the 'dropdown'
 *   component more abstract
 * - filtering is more 'functional' style
 */

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

// Does the profile match the filters?
function matchesFilters(profile, filters) {
  return Object
    .keys(filters) // each of the filters (gender, attracted...)
    .every(filter =>  // whole thing is true if it's true for every filter
      filters[filter] == null || // true if nothing is selected for that filter
      !profile[filter] || // or if the profile doesn't have that key
      profile[filter].includes('unspecified') || // or the profile is unspecified
      profile[filter].includes(filters[filter]) // or the profile matches the filter
    )
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
  const setOrUnsetActive = (val) => setActiveDropdown(val == activeDropdown ? null : val);

  // display the current value or a default for the menu item
  const menuDisplay = (key, defaultVal) => {
    if(filters[key]) {
      return MenuOptions[key].find(option => option.value == filters[key]).label
    } else {
      return defaultVal
    }
  };

  // so we don't have to compute this inline in the ternary, twice
  let currentDropdown = activeDropdown && <Dropdown 
    currentValue={filters[activeDropdown]}
    options={MenuOptions[activeDropdown]}
    onSelect={(option) => setFilters({...filters, [activeDropdown]: option})}
  />;

  return (
    <div className='Directories'>
      <div className='Header'>
        <h1>TPOT for two</h1>
        <p>an ingroup "date me" directory</p>
      </div>

      <div className='FilterMenu'>
        <h3 onClick={() => setOrUnsetActive('gender')} style={activeMenuStyle(filters['gender'])}>{menuDisplay('gender', 'GENDER')}</h3>
        <p className='FilterSentence'> // </p>
        <h3 onClick={() => setOrUnsetActive('attracted')} style={activeMenuStyle(filters['attracted'])}>{menuDisplay('attracted', 'INTERESTED IN')}</h3>
      </div>

      { (activeDropdown == 'gender' || activeDropdown == 'attracted') && currentDropdown }

      <div className='FilterMenu'>
        <h3 onClick={() => setOrUnsetActive('type')} style={activeMenuStyle(filters['type'])}>{menuDisplay('type', 'MONO/POLY')}</h3>
        <p className='FilterSentence'> // </p>
        <h3 onClick={() => setOrUnsetActive('ldr')} style={activeMenuStyle(filters['ldr'])}>{menuDisplay('ldr', 'LONG DISTANCE?')}</h3>
      </div>

      { (activeDropdown == 'type' || activeDropdown == 'ldr') && currentDropdown }

      <div className='Directory'>
        {Profiles
            .filter(profile => matchesFilters(profile, filters))
            .map((profile) => <Profile key={profile.link} {...profile} />)}
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

function Dropdown({currentValue, options, onSelect}) {
  return (
    <div className='FilterMenu'>
      {options && options.map(option => {
        let isActive = option.value == currentValue;
        return (
          <h3 
          key={option.label}
          className='MenuItem' 
          // clicking again on the currently selected item unsets it
          onClick={() => onSelect(isActive ? null : option.value)}
          style={{
            color: color(isActive),
            background: background(isActive)
          }}>
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

// active is e.g. filters['gender'], which might be null or it might be something else
// if it's truthy (i.e. not 'null') then the text color becomes black; else it's not changed
const color = (active) => active ? 'black' : '';
const background = (active) => active ? 'none' : '';
const border = (active) => active ? 'solid' : '';
const activeMenuStyle = (active) => ({ color: color(active), border: border(active) })
