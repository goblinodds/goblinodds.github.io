import React from 'react';
import { useState } from 'react';
import './Tpot42.css';
import Profiles from '../../components/Tpot42/Profiles.js';
import Directories from '../../components/Tpot42/Directories.js';

/* TODO
    - refactor useStates or... idk that whole thing looks like a mess
    - make it a "FILTER IF YOU WANT TO SEE THINGS" situation so the other categories (directories, etc) are visible
    - add a "location" filter - fixed / flexible / unspecified
    LATER
        - maybe: add a section for MATCHMAKERS (hobbyist/professional? first gotta see who's interested in doing this)
        - HEK SUGGESTS
            - soliciting private entries
            - using google form --> airtable
            - charging fee to try to match people
    - DATABASE
        - EXPRESS + NODE tutorial
        START HERE: https://www.youtube.com/watch?v=SccSCuHhOw0&ab_channel=WebDevSimplified
        - https://twitter.com/spephton/status/1553586538587762688?s=20&t=WCJkKoSDMNpDm7Tne4icbg
    SUGGESTION but idk wtf this means
    - https://twitter.com/Phreekedelic/status/1553228085297831936?s=20&t=9qOnhXEYp2HSeXM4IYvtmQ
    - DM people who you know already have dating profiles, ask if you can add them to the directory
    - figure out why showEntries is broken... (if you use it instead of profileDisplay and then try to use a filter everything goes white)
      and why you need it, if you do
    - consider adding some sort of "sorry, no results" (need to put a conditional into jsx??)
    - eventually, maybe: figure out how to do an "or" option if you want to select multiple things like "male and female" or "mono and unspecified"
*/

/************************************************
 FILTER - PUSHES FILTER MATCHES TO PROFILE ARRAY
*************************************************/

// gives us an editable array of all the profiles in Profiles.js
// if profiles = Profiles then it starts removing things from Profiles so you need to do it this way
let profiles = Profiles;

let filterParameters = {};

// compares filter values to each profile
// pushes matching profiles to the "profiles" array
function pushMatches() {
    // for each profile...
    for (let i = 0; i < Profiles.length; i++)
    {        
        // number of filter parameters
        let filterCount = Object.keys(filterParameters).length;
        
        let matchCount = 0;

        const currentProfile = Profiles[i];

        // iterates over the KEYS in filterParameters
        // e.g. "gender"
        for (let key in filterParameters) {

            let filterValue = filterParameters[key];

            // do the values at e.g. 'gender: ' match?
                // breaks if a key/value pair is missing from a profile
            if (currentProfile[key].includes(filterValue)) {
                matchCount++;
            }
        }

        // does the # of filter parameters = the # of matched filter parameters? 
        if (filterCount === matchCount) {
            // adds the current profile to 'profiles'
            profiles.push(currentProfile);
        }
    }
}

/******************
 EXPORTED FUNCTION
*******************/

function Tpot42() {

    /*******
     FILTER
    ********/

    function newFilter(parameter, isActiveType, value) {

        // clears the current parameter from filterParameters
            // so you can't accidentally stack filters from the same category
            // e.g. it won't skip both 'mono' and 'poly' people if you filter for 'poly' and then filter for 'mono'
        delete filterParameters[parameter];

        // creates a new filter
            // by setting filterParameter's value at (parameter) to (value)
        if (isActiveType === false) {
            filterParameters[parameter] = value;
        }

        // resets to an empty list of profiles
        profiles = [];

        // adds matches that pass the filter to the empty profiles array
        pushMatches();

        // updates what gets displayed
        // TODO / QUESTION: this seems to work the same way whether it's 'profileDisplay' or 'profiles'
            // WHY?? and which is better?
        setShowEntries(profiles);

    }

    /*********
     SETS AGE
    **********/

     function displayAge(profile) {
        // current year
        let date = new Date().getFullYear();
        // approximate age based on birth year
        let age = date - profile.born;

        let ageDisplayed = 'age: ';

        // no minors allowed, no ancients expected
        if (age < 18 || age > 99) {
            ageDisplayed = '(this entry is broken, please notify goblin)';
        }        

        // creates an 'early/mid/late teens/20s, etc.' string
        let ageString = age.toString();
        let firstDigit = ageString[0];
        let secondDigit = ageString[1];

        if (secondDigit <= 3) {
            ageDisplayed = ageDisplayed + 'early '
        } else if (secondDigit >= 4 && secondDigit <= 6) {
            ageDisplayed = ageDisplayed + 'mid '
        } else if (secondDigit >= 7) {
            ageDisplayed = ageDisplayed + 'late '
        }

        if (firstDigit === 1) {
            ageDisplayed = ageDisplayed + ' teens'
        } else {
            ageDisplayed = ageDisplayed + firstDigit + '0s'
        }

        return ageDisplayed;
    }

    /**************
     BULLET POINTS
    ***************/

    // if it exists in current profile, display value at key
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

    /***************
     PROFILE RENDERS
    ****************/

    // creates an array of each object in the "profileDisplay" varable
    // by iterating and pushing current "profile" to the "profileDisplay" array
    // maps each profile to a new jsx component

    const profileDisplay = profiles.map((profile) => {

        return (
            <div className='Name'>
                {/* NAME with LINK */}
                <p>⇨ <a href={profile.link} target='_blank' rel='noopener noreferrer'>
                    {profile.name}
                    </a>
                </p>
                {/* TWITTER */}
                {displayLink(profile.twitter, 'twitter')}
                {/* FEATURED TWEET */}
                {displayLink(profile.featuredTweet, 'featured tweet')}
                {/* INSTAGRAM */}
                {displayLink(profile.insta, 'instagram')}
                {/* AGE */}
                {(profile.born ? (<p className='Info'>↳ {displayAge(profile)}</p> ) :
                null)}
                {/* NOTES */}
                {displayItem(profile.notes)}  
                {/* LOCATION */}
                {displayItem(profile.location)}
            </div>
        )
    }
    )

    // creates an array called "directories" of each object in Directories
    // by iterating and pushing current "directory" to the "directories" array
    // maps each directory to a new jsx component

    const directories = Directories.map((directory) => (
        <div className='Name'>
            <p>⇨ <a href={directory.link} target='_blank' rel='noopener noreferrer'>{directory.name}</a></p>
        </div>
        )
    )

    // ENTRIES DISPLAY

        // QUESTION: current error is that "showEntries" is never used
              // I can replace "profiles.map" with "showEntries.map"...
              // but then the error is "showEntries" was used before it was defined
              // if i fix this, then "profileDisplay" was used before it was defined
        // can replace useState(profileDisplay) with useState('') and...
            // the filter can setShowEntries(profileDisplay) and...
            // the thing that ultimately shows up can be {showEntries} instead of {profileDisplay}...
            // but then everything breaks in weird ways

    const [showEntries, setShowEntries] = useState(profileDisplay);

    /**********
     MENU NAMES
    ***********/

    const typeMono = 'MONO';
    const typePoly = 'POLY';
    const typeUnspec = '-';
    
    const genderF = 'WOMEN';
    const genderNB = 'ENBIES';
    const genderM = 'MEN';
    
    const longY = 'LDR OK';
    const longN = 'NO LDR';
    const longNA = '-';

    const menuGender = 'GENDER';
    const menuType = 'MONO/POLY';
    const menuInterested = 'INTERESTED IN';
    const menuLDR = 'LONG DISTANCE?';

    /*********
     USESTATE
    **********/

    // [current sate, function that updates the current state]

    // TODO: REFACTOR??
    // QUESTION: BUT HOW??? IS THIS POSSIBLE?
        // https://twitter.com/astralpajamas/status/1553216907838472193?s=20&t=9qOnhXEYp2HSeXM4IYvtmQ
        // https://twitter.com/astralpajamas/status/1552813924906668032?s=20&t=1__04qle0keqMRpuQDJKXg
        // https://blog.logrocket.com/using-react-usestate-object/

    // PROFILE IS GENDER
    const [isActiveF, setIsActiveF] = useState(false);
    const [isActiveNB, setIsActiveNB] = useState(false);
    const [isActiveM, setIsActiveM] = useState(false);

    // RELATIONSHIP TYPE
    const [isActiveMono, setIsActiveMono] = useState(false);
    const [isActivePoly, setIsActivePoly] = useState(false);
    const [isActiveUnspecified, setIsActiveUnspecified] = useState(false);


    // PROFILE IS ATTRACTED TO GENDER
    const [isActiveUserF, setIsActiveUserF] = useState(false);
    const [isActiveUserNB, setIsActiveUserNB] = useState(false);
    const [isActiveUserM, setIsActiveUserM] = useState(false);

    // LONG DISTANCE?
    const [isActiveLongY, setIsActiveLongY] = useState(false);
    const [isActiveLongN, setIsActiveLongN] = useState(false);
    const [isActiveLongNA, setIsActiveLongNA] = useState(false);

    // FILTER DROPDOWN BUTTONS - DROPDOWN
    const [showUserGenderDropdown, setShowUserGenderDropdown] = useState(false);
    const [showTypeDropdown, setShowTypeDropdown] = useState(false);
    const [showProfileGenderDropdown, setShowProfileGenderDropdown] = useState(false);
    const [showLDRDropdown, setShowLDRDropdown] = useState(false);

    // FILTER DROPDOWN BUTTONS - TITLES
    const [showUserGender, setShowUserGender] = useState(menuInterested);
    const [showRelationshipType, setShowRelationshipType] = useState(menuType);
    const [showProfileGender, setShowProfileGender] = useState(menuGender);
    const [showLDR, setShowLDR] = useState(menuLDR);

    /***********************************************************
     FILTER ONCLICK BEHAVIORS:
     - TURN OFF OTHER FILTERS IN CATEGORY or RESET FILTER TITLE
     - SET TO "ACTIVE" if previously inactive (and vice versa)
    ************************************************************/

    // TODO: REFACTOR ???

    function filterClick (isActiveType, setInactiveType1, setInactiveType2, setShow, subFilter, filter, setIsActiveType){
        // if (clicked filter option, e.g. WOMEN) isn't currently active...
        if (isActiveType === false) {
            // e.g. GENDER to {genderF} ('WOMEN')
            setShow(subFilter);
        } else {
            // e.g. resets GENDER to {menuInterested} ('INTERESTED IN')
            setShow(filter);
        }
        
        // sets other options to inactive...
        setInactiveType1(false);
        setInactiveType2(false);
        // sets (clicked filter option, e.g. WOMEN) to 'active'
        setIsActiveType(!isActiveType);        
    }    

    // GENDER
    const femaleSpread = [isActiveF, setIsActiveNB, setIsActiveM, setShowProfileGender, genderF, menuGender, setIsActiveF];
    const nonbinarySpread = [isActiveNB, setIsActiveF, setIsActiveM, setShowProfileGender, genderNB, menuGender, setIsActiveNB];
    const maleSpread = [isActiveM, setIsActiveF, setIsActiveNB, setShowProfileGender, genderM, menuGender, setIsActiveM];

    // INTERESTED IN
    const userFSpread = [isActiveUserF, setIsActiveUserNB, setIsActiveUserM, setShowUserGender, 'INTERESTED IN ' + genderF, menuInterested, setIsActiveUserF];
    const userNBSpread = [isActiveUserNB, setIsActiveUserF, setIsActiveUserM, setShowUserGender, 'INTERESTED IN ' + genderNB, menuInterested, setIsActiveUserNB];
    const userMSpread = [isActiveUserM, setIsActiveUserF, setIsActiveUserNB, setShowUserGender, 'INTERESTED IN ' + genderM, menuInterested, setIsActiveUserM];

    // MONO/POLY
    const monoSpread = [isActiveMono, setIsActivePoly, setIsActiveUnspecified, setShowRelationshipType, typeMono, menuType, setIsActiveMono];
    const polySpread = [isActivePoly, setIsActiveMono, setIsActiveUnspecified, setShowRelationshipType, typePoly, menuType, setIsActivePoly];
    const unspecSpread = [isActiveUnspecified, setIsActiveMono, setIsActivePoly, setShowRelationshipType, typeUnspec, menuType, setIsActiveUnspecified];

    // LONG DISTANCE
    const longYSpread = [isActiveLongY, setIsActiveLongN, setIsActiveLongNA, setShowLDR, longY, menuLDR, setIsActiveLongY];
    const longNSpread = [isActiveLongN, setIsActiveLongY, setIsActiveLongNA, setShowLDR, longN, menuLDR, setIsActiveLongN];
    const longNASpread = [isActiveLongNA, setIsActiveLongY, setIsActiveLongN, setShowLDR, longNA, menuLDR, setIsActiveLongNA];

    // FIRST 2 arguments are the dropdown being shown; THE REST are the dropdowns being hidden
    const dropdownInterestedSpread = [setShowUserGenderDropdown, showUserGenderDropdown, setShowProfileGenderDropdown, setShowTypeDropdown, setShowLDRDropdown]
    const dropdownTypeSpread = [setShowTypeDropdown, showTypeDropdown, setShowUserGenderDropdown, setShowProfileGenderDropdown, setShowLDRDropdown];
    const dropdownGenderSpread = [setShowProfileGenderDropdown, showProfileGenderDropdown, setShowUserGenderDropdown, setShowTypeDropdown, setShowLDRDropdown];
    const dropdownLDRSpread = [setShowLDRDropdown, showLDRDropdown, setShowUserGenderDropdown, setShowProfileGenderDropdown, setShowTypeDropdown]

    /****************
     TOGGLE DROPDOWNS
    *****************/

    // TOGGLES RATHER THAN STACKING DROPDOWN BUTTONS
    // TODO: figure out how to replace all these "hiddens" with something that's like
    // anything that isn't the selected one, hide it
    function toggleDropdown (toggledTo, toggledFrom, hidden1, hidden2, hidden3) {
    
        // useState is set either to TRUE or FALSE
        // FALSE by default
        // set(whatever) to false

        // if the dropdown is visible, hide it / if the dropdown is hidden, make it visible
        toggledTo(!toggledFrom);

        // hide all other dropdowns
        hidden1(false);
        hidden2(false);
        hidden3(false);
    }

    // CHANGES FILTER COLOR DEPENDING ON WHETHER IT'S ACTIVE OR INACTIVE
    function colorChange(isActiveType){
        return (isActiveType ? 'black' : '')
    }

    // overrides grey background
    function backgroundChange(isActiveType){
        return (isActiveType ? 'none' : '')
    }

    function borderChange(isActiveType){
        return (isActiveType ? 'solid' : '')
    }

    /******************
     DROPDOWN MENU JSX
    *******************/

    /* TODO: REFACTOR?? */

    const dropdownGender = (
        <div className='FilterMenu'>
            <h3 className='MenuItem' onClick={() => {filterClick (...femaleSpread); newFilter('gender', isActiveF, 'F')}} style={{
                color: colorChange(isActiveF),
                background: backgroundChange(isActiveF)
            }}>{genderF}</h3>
            <h3 className='MenuItem' onClick={() => {filterClick (...nonbinarySpread); newFilter('gender', isActiveNB, 'NB')}} style={{
                color: colorChange(isActiveNB),
                background: backgroundChange(isActiveNB)
            }}>{genderNB}</h3>
            <h3 className='MenuItem' onClick={() => {filterClick (...maleSpread); newFilter('gender', isActiveM, 'M')}} style={{
                color: colorChange(isActiveM),
                background: backgroundChange(isActiveM)
            }}>{genderM}</h3>
        
        </div>
    )

    const dropdownInterested = (
        <div className='FilterMenu'>
            <h3 className='MenuItem' onClick={() => {filterClick (...userFSpread); newFilter('attracted', isActiveUserF, 'F')}} style={{
                color: colorChange(isActiveUserF),
                background: backgroundChange(isActiveUserF)
            }}>{genderF}</h3>
            <h3 className='MenuItem' onClick={() => {filterClick (...userNBSpread); newFilter('attracted', isActiveUserNB, 'NB')}} style={{
                color: colorChange(isActiveUserNB),
                background: backgroundChange(isActiveUserNB)
            }}>{genderNB}</h3>
            <h3 className='MenuItem' onClick={() => {filterClick (...userMSpread); newFilter('attracted', isActiveUserM, 'M')}} style={{
                color: colorChange(isActiveUserM),
                background: backgroundChange(isActiveUserM)
            }}>{genderM}</h3>

        </div>
    )

    const dropdownType = (
        <div className='FilterMenu'>
            <h3 className='MenuItem' onClick={() => {filterClick (...monoSpread); newFilter('type', isActiveMono, 'mono')}} style={{
                color: colorChange(isActiveMono),
                background: backgroundChange(isActiveMono)
            }}>MONO</h3>
            <h3 className='MenuItem' onClick={() => {filterClick (...polySpread); newFilter('type', isActivePoly, 'poly')}} style={{
                color: colorChange(isActivePoly),
                background: backgroundChange(isActivePoly)
            }}>POLY</h3>
            <h3 className='MenuItem' onClick={() => {filterClick (...unspecSpread); newFilter('type', isActiveUnspecified, 'unspecified')}} style={{
                color: colorChange(isActiveUnspecified),
                background: backgroundChange(isActiveUnspecified)
            }}>UNSPECIFIED</h3>

        </div>
    )

    // 
    const dropdownLDR = (
        <div className='FilterMenu'>
            <h3 className='MenuItem' onClick={() => {filterClick (...longYSpread); newFilter('ldr', isActiveLongY, 'Y')}} style={{
                color: colorChange(isActiveLongY),
                background: backgroundChange(isActiveLongY)
            }}>{longY}</h3>
            <h3 className='MenuItem' onClick={() => {filterClick (...longNSpread); newFilter('ldr', isActiveLongN, 'N')}} style={{
                color: colorChange(isActiveLongN),
                background: backgroundChange(isActiveLongN)
            }}>{longN}</h3>
            <h3 className='MenuItem' onClick={() => {filterClick (...longNASpread); newFilter('ldr', isActiveLongNA, 'unspecified')}} style={{
                color: colorChange(isActiveLongNA),
                background: backgroundChange(isActiveLongNA)
            }}>UNSPECIFIED</h3>       
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
                {/* GENDER */}
                <h3 onClick={() => {toggleDropdown (...dropdownGenderSpread)}} style={{
                    color: colorChange(isActiveF || isActiveNB || isActiveM),
                    border: borderChange(isActiveF || isActiveNB || isActiveM)}}>{showProfileGender}</h3>
                <p className='FilterSentence'> // </p>
                <h3 onClick={() => {toggleDropdown (...dropdownInterestedSpread)}} style={{
                    color: colorChange(isActiveUserF || isActiveUserNB || isActiveUserM),
                    border: borderChange(isActiveUserF || isActiveUserNB || isActiveUserM)}}>{showUserGender}</h3>
            </div>

            {showProfileGenderDropdown && dropdownGender}
            {showUserGenderDropdown && dropdownInterested}

            <div className='FilterMenu'>
                <h3 onClick={() => {toggleDropdown (...dropdownTypeSpread)}} style={{
                    color: colorChange(isActiveMono || isActivePoly || isActiveUnspecified),
                    border: borderChange(isActiveMono || isActivePoly || isActiveUnspecified)
                    }}>{showRelationshipType}</h3>
                <p className='FilterSentence'> // </p>
                <h3 onClick={() => {toggleDropdown (...dropdownLDRSpread)}} style={{
                    color: colorChange(isActiveLongY || isActiveLongN || isActiveLongNA),
                    border: borderChange(isActiveLongY || isActiveLongN || isActiveLongNA)}}>{showLDR}</h3>
            </div>

            {showTypeDropdown && dropdownType}
            {showLDRDropdown && dropdownLDR}

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