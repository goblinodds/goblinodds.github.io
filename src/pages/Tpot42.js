import React from 'react';
import { useState } from 'react';
import './Tpot42.css';
import Profiles from '../components/Tpot42/Profiles.js';
import Directories from '../components/Tpot42/Directories.js';

/* TODO
    - figure out how to do an "or" option if you want to select multiple things like "male and female"
    - build the I AM (GENDER) submenu
    - ask people currently on the list for details
    - figure out the database thing
    - create a form for new entries
    - figure out why showEntries is broken... (if you use it instead of profileDisplay and then try to use a filter everything goes white)
      and why you need it, if you do
    - once we have enough people, build a LOCATION submenu
    - search for "REFACTOR" in this doc (but really consider refactoring everything)
    - consider adding some sort of "sorry, no results" (need to put a conditional into jsx??)
*/

/************
 MAIN FILTER
*************/

// QUESTION: is it better to use the "includes" method or to loop manually
    /* HOW sullyj3 DID IT
        // Function that takes a profile and returns a boolean
        // Note that I changed all types and genders to arrays for uniformity.
        // Things are much easier to process when they're all the same type
        const monogamousMale = profile =>
        profile.types.includes('monogamous') && profile.genders.includes('M');

        // If you need it, you could have a function that takes a filterParameters and returns a function like above

        // The filter method of an array takes a function which returns a boolean, 
        // and returns a new copy of the array that only contains the values for
        // which the function is true
        let profiles = profileArray.filter(monogamousMale);
        console.log("after filtering:")
        console.log(profiles);
    */

// gives us an editable array of all the profiles in Profiles.js
// if profiles = Profiles then it starts removing things from Profiles so you need to do it this way
let profiles = [];

let filterParameters = {};

function typeFilter () {

    // resets to an empty list of profiles
    profiles = [];

    // iterates over each profile
    for (let i = 0; i < Profiles.length; i++)
    {        
        // number of filter parameters
        let filterCount = Object.keys(filterParameters).length;
        
        let matchCount = 0;

        // iterate over the KEYS in filterParameters
        for (let key in filterParameters) {

            let filterValue = filterParameters[key];

            // loops over the current profile's key: value pairs to find matches
            for (let key2 in Profiles[i][key]) {
                    if (filterValue === Profiles[i][key][key2]) {
                        // if one of the vaues matches the filter's value, increments matchCount
                        matchCount++;
                        break;
                    }
            }
         
        }

        if (filterCount === matchCount) {
            // adds the current profile to profiles
            profiles.push(Profiles[i]);
        }
    }
}


/******************
 EXPORTED FUNCTION
*******************/

function Tpot42() {
    /*******
     FILTERS
    ********/
                                    
    // MONOGAMOUS filter
    function monogamous(){

        delete filterParameters.type;

        if (isActiveMono === false) {
            filterParameters.type = 'monogamous';
        }

        typeFilter();

        setShowEntries(profiles);

    };

    // POLYAMOROUS filter
    function polyamorous(){

        delete filterParameters.type;

        if (isActivePoly === false) {
            filterParameters.type = 'polyamorous';
        }

        typeFilter();

        setShowEntries(profiles);

    };

    // UNSPECIFIED filter
    function unspecified(){

        delete filterParameters.type;

        if (isActiveUnspecified === false) {
            filterParameters.type = 'unspecified';
        }

        typeFilter();

        setShowEntries(profiles);

    };

    // FEMALE filter
    function female(){

        delete filterParameters.gender;

        if (isActiveFemale === false) {
            filterParameters.gender = 'F';
        }

        typeFilter();

        setShowEntries(profiles);

    }

    // NONBINARY filter

    function nonbinary(){
        
        delete filterParameters.gender;

        if (isActiveNonbinary === false) {
            filterParameters.gender = 'NB'
        }

        typeFilter();

        setShowEntries(profiles);
    }

    // MALE filter
    
    function male(){

        delete filterParameters.gender;

        if (isActiveMale === false) {
            filterParameters.gender = 'M'
        }

        typeFilter();

        setShowEntries(profiles);

    }

    /***************
     PROFILE RENDERS
    ****************/

    // creates an array of each object in the "profileDisplay" varable
    // by iterating and pushing current "profile" to the "profileDisplay" array
    // maps each profile to a new jsx component

    // TODO: QUESTION: current error is that "showEntries" is never used
              // I can replace "profiles.map" with "showEntries.map"...
              // but then the error is "showEntries" was used before it was defined
              // if i fix this, then "profileDisplay" was used before it was defined
    const profileDisplay = profiles.map((profile) => {

        return (
            <div className='Name'>
                <p>⇨ <a href={profile.link} target='_blank' rel='noopener noreferrer'>
                    {profile.name}
                    </a>
                </p>
                {/* if key exists, display (FIGURE OUT HOW TO DO THIS MORE CLEANLY, PROBABLY BY ITERATING OVER EACH OBJECT?) 
                but it won't let me declare variables inside any part of this...return function?*/}
                {
                    profile.twitter ? (
                        <p className='Info'>↳ <a href={profile.twitter} target='_blank' rel='noopener noreferrer'>twitter</a></p> ) :
                        null
                }
                {
                    profile.featuredTweet ? (
                        <p className='Info'>↳ <a href={profile.featuredTweet} target='_blank' rel='noopener noreferrer'>featured tweet</a></p> ) :
                        null
                }
                {
                    profile.notes ? (
                        <p className='Info'>↳ {profile.notes}</p> ) :
                        null
                }            
                {
                    profile.location ? (
                        <p className='Info'>↳ {profile.location}</p> ) :
                        null
                }
            </div>
        )
    }
    )

    // creates an array called "directories" of each object in Directories
    // by iterating and pushing current "directory" to the "directories" array

    const directories = Directories.map((directory) => (
        <div className='Name'>
            <p>⇨ <a href={directory.link} target='_blank' rel='noopener noreferrer'>{directory.name}</a></p>
        </div>
        )
    )

    // TODO: what is going on with SHOWENTRIES here ??

    // ENTRIES DISPLAY
    const [showEntries, setShowEntries] = useState(profileDisplay);
 
    // TODO: REFACTOR ??

    /*********
     USESTATE
    **********/

    // FILTER BUTTONS
    const [isActiveMono, setIsActiveMono] = useState(false);
    const [isActivePoly, setIsActivePoly] = useState(false);
    const [isActiveUnspecified, setIsActiveUnspecified] = useState(false);

    const [isActiveFemale, setIsActiveFemale] = useState(false);
    const [isActiveNonbinary, setIsActiveNonbinary] = useState(false);
    const [isActiveMale, setIsActiveMale] = useState(false);

    // FILTER DROPDOWN BUTTONS - DROPDOWN
    const [showTypeDropdown, setShowTypeDropdown] = useState(false);
    const [showSoughtGenderDropdown, setShowSoughtGenderDropdown] = useState(false);

    // FILTER DROPDOWN BUTTONS - TITLES
    const [showRelationshipType, setShowRelationshipType] = useState('(TYPE)');
   
    const [showSoughtGender, setShowSoughtGender] = useState ('(GENDER)');

    /***********************************************************
     FILTER ONCLICK BEHAVIORS:
     - TURN OFF OTHER FILTERS IN CATEGORY or RESET FILTER TITLE
     - SET TO "ACTIVE"
    ************************************************************/

    // RELATIONSHIP TYPE
    const monoClick = () => {
        if (isActiveMono === false) {
            setIsActivePoly(false);
            setIsActiveUnspecified(false);
            setShowRelationshipType('MONO');
        } else {
            setShowRelationshipType('(TYPE)');
        }
        
        setIsActiveMono(!isActiveMono);
    }

    const polyClick = () => {
        if (isActivePoly === false) {
            setIsActiveMono(false);
            setIsActiveUnspecified(false);
            setShowRelationshipType('POLY');
        } else {
            setShowRelationshipType('(TYPE)');
        }

        setIsActivePoly(!isActivePoly);
    }

    const unspecClick = () => {
        if (isActiveUnspecified === false) {
            setIsActiveMono(false);
            setIsActivePoly(false);
            setShowRelationshipType('-');
        } else {
            setShowRelationshipType('(TYPE)');
        }
        
        setIsActiveUnspecified(!isActiveUnspecified);

    }

    // SOUGHT GENDER
    const femaleClick = () => {
        if (isActiveFemale === false) {
            setIsActiveNonbinary(false);
            setIsActiveMale(false);
            setShowSoughtGender('FEMALE');
        } else {
            setShowSoughtGender('(GENDER)');
        }

        setIsActiveFemale(!isActiveFemale);
    }

    const nonbinaryClick = () => {
        if (isActiveNonbinary === false) {
            setIsActiveFemale(false);
            setIsActiveMale(false);
            setShowSoughtGender('NONBINARY');
        } else {
            setShowSoughtGender('(GENDER)');
        }

        setIsActiveNonbinary(!isActiveNonbinary);
    }

    const maleClick = () => {
        if (isActiveMale === false) {
            setIsActiveFemale(false);
            setIsActiveNonbinary(false);
            setShowSoughtGender('MALE');
        } else {
            setShowSoughtGender('(GENDER)');
        }

        setIsActiveMale(!isActiveMale);
    }

    /****************
     TOGGLE DROPDOWNS
    *****************/

    // DROPDOWN BUTTONS TOGGLE RATHER THAN STACKING
    const dropdownTypeEvent = () => {
        setShowTypeDropdown(!showTypeDropdown);
        setShowSoughtGenderDropdown(false);
    }

    const dropdownSoughtGenderEvent = () => {
        setShowSoughtGenderDropdown(!showSoughtGenderDropdown);
        setShowTypeDropdown(false);
    }

    /***********
     JSX RENDERS
    ************/

    const dropdownType = (
        <div className='FilterMenu'>
            {/* REFACTOR THIS BIT, I think I can pass "monogamous," etc. via props
            https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs */}
            <h3 onClick={() => {monoClick(); monogamous()}} style={{
                opacity: isActiveMono ? '100%' : ''                
            }}>MONOGAMOUS</h3>
            <h3 onClick={() => {polyClick(); polyamorous()}} style={{
                opacity: isActivePoly ? '100%' : ''                
            }}>POLYAMOROUS</h3>
            <h3 onClick={() => {unspecClick(); unspecified()}} style={{
                opacity: isActiveUnspecified ? '100%' : ''                
            }}>UNSPECIFIED</h3>
        </div>
        )

        const dropdownSoughtGender = (
            <div className='FilterMenu'>
                {/* TODO: REFACTOR THIS BIT, I think I can pass options via props
                https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs */}
                
                <h3 onClick={() => {femaleClick(); female()}} style={{
                    opacity: isActiveFemale ? '100%' : ''
                }}>FEMALE</h3>
                <h3 onClick={() => {nonbinaryClick(); nonbinary()}} style={{
                    opacity: isActiveNonbinary ? '100%' : ''
                }}>NONBINARY</h3>
                <h3 onClick={() => {maleClick(); male()}} style={{
                    opacity: isActiveMale ? '100%' : ''
                }}>MALE</h3>
           
            </div>
            )

    return (
        <div className='Directories'>
            <div className='Header'>
                <h1>TPOT for two</h1>
                <p>an ingroup "date me" directory</p>
            </div>

            <div className='FilterMenu'>
                {/* TODO: find out why this also works with e instead of () */}
               <p className='FilterSentence'>I AM SEEKING A </p>
               <h3 onClick={dropdownTypeEvent} style={{opacity: (isActiveMono || isActivePoly || isActiveUnspecified) ? '100%' : ''}}>{showRelationshipType}</h3>
               <p className='FilterSentence'> RELATIONSHIP WITH A </p>
               <h3 onClick={dropdownSoughtGenderEvent} style={{opacity: (isActiveFemale || isActiveNonbinary || isActiveMale) ? '100%' : ''}}>{showSoughtGender}</h3>
            </div>

            {showTypeDropdown && dropdownType}
            {showSoughtGenderDropdown && dropdownSoughtGender}

            <div className='Directory'>
                {profileDisplay}
            </div>

            <div className='Header'>
                <h1>MORE DIRECTORIES</h1>
            </div>
            <div className='Directory'>
                {directories}
            </div>
        </div>
    )
}

export default Tpot42;