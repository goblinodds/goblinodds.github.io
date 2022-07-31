import React from 'react';
import { useState } from 'react';
import './Tpot42.css';
import Profiles from '../components/Tpot42/Profiles.js';
import Directories from '../components/Tpot42/Directories.js';

/* TODO
    - DATABASE
        - EXPRESS + NODE tutorial
        START HERE: https://www.youtube.com/watch?v=SccSCuHhOw0&ab_channel=WebDevSimplified
        - https://twitter.com/spephton/status/1553586538587762688?s=20&t=WCJkKoSDMNpDm7Tne4icbg
    - BUILD TESTS
        - https://youtu.be/7r4xVDI2vho?t=151
    - REFACTORING:
        - are there things you can/should break out of the main exported function?
        - are there components you can/should put on their own pages?
        - use the filter method for your main filter
        - arrow functions.... maybe
        SUGGESTION
        - https://twitter.com/Phreekedelic/status/1553228085297831936?s=20&t=9qOnhXEYp2HSeXM4IYvtmQ
    - set up a database that?? pushes to an array of objects <_< then you can update entries directly in the database, much easier
    - ask if you can add people who already have dating profiles
    - some way to add location/whether long distance is ok
    - figure out why showEntries is broken... (if you use it instead of profileDisplay and then try to use a filter everything goes white)
      and why you need it, if you do
    - once we have enough people, build a LOCATION submenu
    - consider adding some sort of "sorry, no results" (need to put a conditional into jsx??)
    - eventually, maybe: figure out how to do an "or" option if you want to select multiple things like "male and female" or "mono and unspecified"
*/

/************
 MAIN FILTER
*************/

// TODO / QUESTION: is it better to use the "includes" method or to loop manually
    /* HOW sullyj3 DID IT
        // Function that takes a profile and returns a boolean
        // Note that I changed all types and genders to arrays for uniformity.
        // Things are much easier to process when they're all the same type
        const monoM = profile =>
        profile.types.includes('mono') && profile.genders.includes('M');

        // If you need it, you could have a function that takes a filterParameters and returns a function like above

        // The filter method of an array takes a function which returns a boolean, 
        // and returns a new copy of the array that only contains the values for
        // which the function is true
        let profiles = profileArray.filter(monoM);
        console.log("after filtering:")
        console.log(profiles);
    */

// gives us an editable array of all the profiles in Profiles.js
// if profiles = Profiles then it starts removing things from Profiles so you need to do it this way
let profiles = Profiles;

let filterParameters = {};

function mainFilter () {

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
     
    function filter(parameter, isActiveType, value) {

        delete filterParameters[parameter];

        if (isActiveType === false) {
            filterParameters[parameter] = value;
        }

        mainFilter();

        setShowEntries(profiles);
    }

    /***************
     PROFILE RENDERS
    ****************/

    // creates an array of each object in the "profileDisplay" varable
    // by iterating and pushing current "profile" to the "profileDisplay" array
    // maps each profile to a new jsx component

    // TODO / QUESTION: current error is that "showEntries" is never used
              // I can replace "profiles.map" with "showEntries.map"...
              // but then the error is "showEntries" was used before it was defined
              // if i fix this, then "profileDisplay" was used before it was defined
    // TODO: REFACTOR TERNARIES
    // but i can't declare variables inside any part of the return function


    const profileDisplay = profiles.map((profile) => {

        // SET AGE
        // current year
        let date = new Date().getFullYear();
        let age = date - profile.born;

        // TODO / QUESTION: can/should these two functions be combined?
            // https://twitter.com/MattiasInSpace/status/1553217802839896065?s=20&t=9qOnhXEYp2HSeXM4IYvtmQ
        // if it exists in current profile, display value at key //
        function displayLink (item, text){
            return (item ? (
                <p className='Info'>↳ <a href={item} target='_blank' rel='noopener noreferrer'>{text}</a></p> ) :
                null)
        }

        function displayItem (item){
            return (item ? (
                <p className='Info'>↳ {item}</p> ) :
                null)
        }

        return (
            <div className='Name'>
                <p>⇨ <a href={profile.link} target='_blank' rel='noopener noreferrer'>
                    {profile.name}
                    </a>
                </p>
                {displayLink(profile.twitter, 'twitter')}
                {displayLink(profile.featuredTweet, 'featured tweet')}
                {displayItem(age)}
                {displayItem(profile.notes)}            
                {displayItem(profile.location)}
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

    // ENTRIES DISPLAY

    const [showEntries, setShowEntries] = useState(profileDisplay);
 

    /**********
     MENU NAMES
    ***********/

    const typeMono = 'MONO';
    const typePoly = 'POLY';
    const typeUnspec = '-';
    const genderF = 'WOMAN';
    const genderNB = 'NONBINARY';
    const genderM = 'MAN';
    const menuType = '(TYPE)';
    // just the word "GENDER" that shows up; applies to both the user's gender and the sought gender
    const menuGender = '(GENDER)';

    /*********
     USESTATE
    **********/

    // TODO: REFACTOR??
    // QUESTION: BUT HOW??? IS THIS POSSIBLE?
        // https://twitter.com/astralpajamas/status/1553216907838472193?s=20&t=9qOnhXEYp2HSeXM4IYvtmQ
        // https://twitter.com/astralpajamas/status/1552813924906668032?s=20&t=1__04qle0keqMRpuQDJKXg
    // store all the parameters in 1 object, use spread operators
    // [current sate, function that updates the current state]

    // USER IS GENDER
    const [isActiveUserF, setIsActiveUserF] = useState(false);
    const [isActiveUserNB, setIsActiveUserNB] = useState(false);
    const [isActiveUserM, setIsActiveUserM] = useState(false);

    // RELATIONSHIP TYPE
    const [isActiveMono, setIsActiveMono] = useState(false);
    const [isActivePoly, setIsActivePoly] = useState(false);
    const [isActiveUnspecified, setIsActiveUnspecified] = useState(false);

    // USER IS ATTRACTED TO GENDER
    const [isActiveF, setIsActiveF] = useState(false);
    const [isActiveNB, setIsActiveNB] = useState(false);
    const [isActiveM, setIsActiveM] = useState(false);

    // FILTER DROPDOWN BUTTONS - DROPDOWN
    const [showUserGenderDropdown, setShowUserGenderDropdown] = useState(false);
    const [showTypeDropdown, setShowTypeDropdown] = useState(false);
    const [showSoughtGenderDropdown, setShowSoughtGenderDropdown] = useState(false);

    // FILTER DROPDOWN BUTTONS - TITLES
    const [showUserGender, setShowUserGender] = useState(menuGender);
    const [showRelationshipType, setShowRelationshipType] = useState(menuType);
    const [showSoughtGender, setShowSoughtGender] = useState(menuGender);

    /***********************************************************
     FILTER ONCLICK BEHAVIORS:
     - TURN OFF OTHER FILTERS IN CATEGORY or RESET FILTER TITLE
     - SET TO "ACTIVE"
    ************************************************************/

    function filterClick (isActiveType, setInactiveType1, setInactiveType2, setShow, subFilter, filter, setIsActiveType){

        if (isActiveType === false) {
            setInactiveType1(false);
            setInactiveType2(false);
            setShow(subFilter);
        } else {
            setShow(filter);
        }
        
        setIsActiveType(!isActiveType);        
    }    

    const userFSpread = [isActiveUserF, setIsActiveUserNB, setIsActiveUserM, setShowUserGender, genderF, menuGender, setIsActiveUserF];
    const userNBSpread = [isActiveUserNB, setIsActiveUserF, setIsActiveUserM, setShowUserGender, genderNB, menuGender, setIsActiveUserNB];
    const userMSpread = [isActiveUserM, setIsActiveUserF, setIsActiveUserNB, setShowUserGender, genderM, menuGender, setIsActiveUserM];
    const monoSpread = [isActiveMono, setIsActivePoly, setIsActiveUnspecified, setShowRelationshipType, typeMono, menuType, setIsActiveMono];
    const polySpread = [isActivePoly, setIsActiveMono, setIsActiveUnspecified, setShowRelationshipType, typePoly, menuType, setIsActivePoly];
    const unspecSpread = [isActiveUnspecified, setIsActiveMono, setIsActivePoly, setShowRelationshipType, typeUnspec, menuType, setIsActiveUnspecified];
    const femaleSpread = [isActiveF, setIsActiveNB, setIsActiveM, setShowSoughtGender, genderF, menuGender, setIsActiveF];
    const nonbinarySpread = [isActiveNB, setIsActiveF, setIsActiveM, setShowSoughtGender, genderNB, menuGender, setIsActiveNB];
    const maleSpread = [isActiveM, setIsActiveF, setIsActiveNB, setShowSoughtGender, genderM, menuGender, setIsActiveM];

    const dropdownUserGenderSpread = [setShowUserGenderDropdown, showUserGenderDropdown, setShowSoughtGenderDropdown, setShowTypeDropdown]
    const dropdownTypeSpread = [setShowTypeDropdown, showTypeDropdown, setShowUserGenderDropdown, setShowSoughtGenderDropdown];
    const dropdownGenderSpread = [setShowSoughtGenderDropdown, showSoughtGenderDropdown, setShowUserGenderDropdown, setShowTypeDropdown];

    /****************
     TOGGLE DROPDOWNS
    *****************/

    // TOGGLES RATHER THAN STACKING DROPDOWN BUTTONS
    function toggleDropdown (toggledTo, toggledFrom, hidden1, hidden2) {
        toggledTo(!toggledFrom);
        hidden1(false);
        hidden2(false);
    }

    // CHANGES FILTER COLOR DEPENDING ON WHETHER IT'S ACTIVE OR INACTIVE
    function colorChange(isActiveType){
        return (isActiveType ? 'black' : '')
    }

    function backgroundChange(isActiveType){
        return (isActiveType ? 'none' : '')
    }

    function borderChange(isActiveType){
        return (isActiveType ? 'solid' : '')
    }

    /******************
     DROPDOWN MENU JSX
    *******************/

    {/* TODO: REFACTOR?? */}

    const dropdownUserGender = (
        <div className='FilterMenu'>
            <h3 className='MenuItem' onClick={() => {filterClick (...userFSpread); filter('attracted', isActiveUserF, 'F')}} style={{
                color: colorChange(isActiveUserF),
                background: backgroundChange(isActiveUserF),
                borderStyle: borderChange(isActiveUserF)
            }}>FEMALE</h3>
            <h3 className='MenuItem' onClick={() => {filterClick (...userNBSpread); filter('attracted', isActiveUserNB, 'NB')}} style={{
                color: colorChange(isActiveUserNB),
                background: backgroundChange(isActiveUserNB),
                borderStyle: borderChange(isActiveUserNB)
            }}>NONBINARY</h3>
            <h3 className='MenuItem' onClick={() => {filterClick (...userMSpread); filter('attracted', isActiveUserM, 'M')}} style={{
                color: colorChange(isActiveUserM),
                background: backgroundChange(isActiveUserM),
                borderStyle: borderChange(isActiveUserM)
            }}>MALE</h3>

        </div>
    )

    const dropdownType = (
        <div className='FilterMenu'>

            <h3 className='MenuItem' onClick={() => {filterClick (...monoSpread); filter('type', isActiveMono, 'mono')}} style={{
                color: colorChange(isActiveMono),
                background: backgroundChange(isActiveMono),
                borderStyle: borderChange(isActiveMono)
            }}>MONO</h3>
            <h3 className='MenuItem' onClick={() => {filterClick (...polySpread); filter('type', isActivePoly, 'poly')}} style={{
                color: colorChange(isActivePoly),
                background: backgroundChange(isActivePoly),
                borderStyle: borderChange(isActivePoly)
            }}>POLY</h3>
            <h3 className='MenuItem' onClick={() => {filterClick (...unspecSpread); filter('type', isActiveUnspecified, 'unspecified')}} style={{
                color: colorChange(isActiveUnspecified),
                background: backgroundChange(isActiveUnspecified),
                borderStyle: borderChange(isActiveUnspecified)
            }}>UNSPECIFIED</h3>

        </div>
    )

    const dropdownSoughtGender = (
        <div className='FilterMenu'>
            <h3 className='MenuItem' onClick={() => {filterClick (...femaleSpread); filter('gender', isActiveF, 'F')}} style={{
                color: colorChange(isActiveF),
                background: backgroundChange(isActiveF),
                borderStyle: borderChange(isActiveF)
            }}>FEMALE</h3>
            <h3 className='MenuItem' onClick={() => {filterClick (...nonbinarySpread); filter('gender', isActiveNB, 'NB')}} style={{
                color: colorChange(isActiveNB),
                background: backgroundChange(isActiveNB),
                borderStyle: borderChange(isActiveNB)
            }}>NONBINARY</h3>
            <h3 className='MenuItem' onClick={() => {filterClick (...maleSpread); filter('gender', isActiveM, 'M')}} style={{
                color: colorChange(isActiveM),
                background: backgroundChange(isActiveM),
                borderStyle: borderChange(isActiveM)
            }}>MALE</h3>
        
        </div>
    )

    /*************
     RENDERED JSX
    **************/

    return (
        <div className='Directories'>
            <div className='Header'>
                <h1>TPOT for two</h1>
                <p>an ingroup "date me" directory</p>
            </div>

            <div className='FilterMenu'>
                {/* TODO: find out why this also works with e instead of () */}
                <p className='FilterSentence'>I AM A </p>
                <h3 onClick={() => {toggleDropdown (...dropdownUserGenderSpread)}} style={{color: colorChange(isActiveUserF || isActiveUserNB || isActiveUserM)}}>{showUserGender}</h3>
            </div>

            {showUserGenderDropdown && dropdownUserGender}

            <div className='FilterMenu'>
                <p className='FilterSentence'>SEEKING A </p>
                <h3 onClick={() => {toggleDropdown (...dropdownTypeSpread)}} style={{color: colorChange(isActiveMono || isActivePoly || isActiveUnspecified)}}>{showRelationshipType}</h3>
            </div>

            {showTypeDropdown && dropdownType}

            <div className='FilterMenu'>
                <p className='FilterSentence'> RELATIONSHIP WITH A </p>
                <h3 onClick={() => {toggleDropdown (...dropdownGenderSpread)}} style={{color: colorChange(isActiveF || isActiveNB || isActiveM)}}>{showSoughtGender}</h3>
            </div>

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