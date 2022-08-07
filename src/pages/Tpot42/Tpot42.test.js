import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Tpot42 from './Tpot42';

// tutorials
// https://www.youtube.com/watch?v=JBSUgDxICg8&ab_channel=PedroTech
// https://youtu.be/FgnxcUQ5vho
// testing princples
    // https://youtu.be/rFaWOw8bIMM
    // defect clustering: a small # of modules have most of the defects
    // pesticide paradox: same tests repeated over and over will eventually stop finding new bugs
        // regularly review/revise, add new test cases
    // absence of error is a fallacy
        // prioritize the project's needs over the pipe-dream of being perfectly bug-free
    // test EARLY
// packages are borked but this seems to be ok at the moment
// to un-bork: 
    // https://twitter.com/robcobbable/status/1553978184122544128?s=20&t=G7Upz_Rz0_x06-NkILnrtw

// only use data-testid if you can't get the value otherwise

describe('description of the function?', () => {
  
    it('describe what the test does', () => {
        const {} = render(<Tpot42 />);
    }); 
    
})

// REMOVE THIS FILE FROM .GITIGNORE

// TESTS YOU MIGHT WANT
    // TPOT42
        // check for typos in profile keys in components/Tpot42/Profiles.js
        // check that any key run through the filter has an array value (vs a string)