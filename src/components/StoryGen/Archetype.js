import React, { useState } from 'react';

function Archetype() {
    
    // 1st thing in array = the current state
    // 2nd thing in array = function that allows you to update state
    const [archetype, setArchetype] = useState('generate archetype');
    // array of themes to choose from
    const archetypeArray = ['the reformer', 'the helper', 'the achiever', 'the individualist', 'the investigator', 'the loyalist', 'the enthusiast', 'the challenger', 'the peacemaker'];

    function archetypeGen() {
        // random number generator, max # is # of items in array
        let randomIndex = Math.floor(archetypeArray.length * Math.random());
        // selects the item in themeArray at the randomly generated index
        setArchetype(archetypeArray[randomIndex]);
    };

    return (
        <div>
            <button id='themeGenButton' onClick={archetypeGen} >
            {archetype}
            </button>
            <p>archetypes generated from list of <a href='https://www.enneagraminstitute.com/' target='_blank' rel='noopener noreferrer'>Enneagram types</a></p>
        </div>
    );
}

export default Archetype;