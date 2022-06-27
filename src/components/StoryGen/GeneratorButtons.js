import { useState } from 'react';

// ARCHETYPES
const reformer = {
    enneagram: 'the reformer',
    flaws: ['dogmatism', 'self-righteousness', 'intolerance', 'inflexibility', 'cruelty']
};

const helper = {
    enneagram: 'the helper',
    flaws: ['martyr complex', 'manipulativeness', 'guilt-tripping', 'sense of entitlement', 'victim mentality']
};

const achiever = {
    enneagram: 'the achiever',
    flaws: ['opportunism', 'arrogance', 'envy', 'vindictiveness', 'narcissism']
};

const individualist = {
    enneagram: 'the individualist',
    flaws: ['hopelessness', 'self-loathing', 'shame', 'self-pity', 'disdain for others']
};

const investigator = {
    enneagram: 'the investigator',
    flaws: ['obsessiveness', 'paranoia', 'reclusiveness', 'cynicism', 'detachment']
};

const loyalist = {
    enneagram: 'the loyalist',
    flaws: ['fanaticism', 'sense of inferiority', 'defensiveness', 'passive aggression', 'hypervigilance']
};

const enthusiast = {
    enneagram: 'the enthusiast',
    flaws: ['impulsivity', 'immaturity', 'self-centeredness', 'materialism', 'greed']
};

const challenger = {
    enneagram: 'the challenger',
    flaws: ['ruthlessness', 'megalomania', 'delusions of grandeur', 'defiance', 'belligerence']
};

const peacemaker = {
    enneagram: 'the peacemaker',
    flaws: ['indifference', 'fatalism', 'ineffectiveness', 'need to appease others', 'complacency']
};

const enneagramArray = [reformer, helper, achiever, individualist, investigator, loyalist, enthusiast, challenger, peacemaker];

// GOALS
const acquire = {
    term: 'acquire',
    // if true say "from xyz," if false skip that
    from: true,
    // match to 
    false: 'an idea'
}

const create = {
    term: 'create',
    from: false,
    false: 'knowledge'
}

const protect = {
    term: 'protect',
    // unclear whether true works here
    from: true,
    false: 'an idea'
}

const goalVerbArray = [acquire, create, protect];
const goalObjectArray = ['an entity or entities', 'an object or objects', 'an idea', 'knowledge'];


// DEFINES VARIABLE SO THAT IT'S USABLE ACROSS FUNCTIONS
let enneagramSelected = '';

// CREATES BUTTON FOR ARCHETYPE GENERATION
function ArchetypeButton() {    
        // 1st item in array = the current state; 2nd thing in array = function that allows you to update state
        const [archetype, setArchetype] = useState('protagonist');

        // array of archetypes to choose from
        function archetypeGen() {
            // random number generator, max # is # of items in array
            let enneagramRandomIndex = Math.floor(enneagramArray.length * Math.random());

            // selects the item in archetypeArray at the randomly generated index
            enneagramSelected = enneagramArray[enneagramRandomIndex];
            setArchetype(enneagramSelected.enneagram);
        };

        return (
            <div>
                <button class='genButton' onClick={archetypeGen} >
                    {archetype}
                </button>
            </div>
        );
}

// GENERATES INTERNAL CONFLICT BASED ON ARCHETYPE
function InternalConflictButton() {
        
        const [internalConflict, setInternalConflict] = useState('internal conflict');

        function internalConflictGen() {

            let randomFlawIndex = Math.floor(enneagramSelected.flaws.length * Math.random());

            let randomFlaw = enneagramSelected.flaws[randomFlawIndex];

            // selects the flaw in the Enneagram object at the randomly generated index
            // let flawRandomIndex = Math.floor(enneagramSelected.length * Math.random());
            setInternalConflict(randomFlaw);
        };

        return (
            <div>
                <button class='genButton' onClick={internalConflictGen}>
                    {internalConflict}
                </button>
            </div>
        );
}

// GENERATES STORY GOAL (UNRELATED TO ARCHETYPE?)

function GoalButton() {

    const [goal, setGoal] = useState('reach their goal')

    function goalGen() {
        let randomGoalVerbIndex = Math.floor(goalVerbArray.length * Math.random());
        let randomGoalVerb = goalVerbArray[randomGoalVerbIndex].term;

        let randomGoalObjectIndex = Math.floor(goalObjectArray.length * Math.random())
        
        // makes sure goal objects aren't nonsensical
        // by comparing randomGoalVerb.false to the current randomGoalObject
        // and changing randomGoalObject if they match
        while (goalObjectArray[randomGoalObjectIndex] === goalVerbArray[randomGoalVerbIndex].false) {
            randomGoalObjectIndex = Math.floor(goalObjectArray.length * Math.random());
            console.log('LOOK');
        }
        let randomGoalObject = goalObjectArray[randomGoalObjectIndex];
        
        setGoal(randomGoalVerb + ' ' + randomGoalObject);  

    };

    return (
        <div>
            <button class='genButton' onClick={goalGen} >
                {goal}
            </button>
        </div>
    );

}

export { ArchetypeButton, InternalConflictButton, GoalButton };