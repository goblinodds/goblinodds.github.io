import './ReadingSpeed.css';
import { useState } from 'react';
import React from 'react';

export default function ReadingSpeed() {

    // CONSIDER DOING THIS BUTTON STUFF FROM SCRATCH
    // DO YOU NEED TO DO THE FONTS SET OF OBJECTS *AND* PROPS ??? THINK ABOUT IT
    /* FIGURE OUT HOW USESTATE WORKS, YOU WANT TO GO FROM:
        1. are these fonts similar A
        2. are these fonts similar B
        3. ok good now the test begins
        rn you're doing some weird toggling thing

        we want the response to "yes" or "no" to replace the entire FontTest div with either
        'sorry, your browser won't provide accurate results' or the actual test

        you can only use ternary operators inside of jsx so if you want a complex conditional you need to do it OUTSIDE
        the return function

    */


    const [testPage, setTestPage] = useState(false);

    return (
        <div className='ReadingSpeedApp'>
            {testPage ? (

                    /* TEMP FAKE THING */
                    <div>
                        it's true
                    </div>
            
                ) : (

                    /* CHECK THAT BROWSER FONTS WORK */
                    <div className='FontCheck'>
                        <div className='FontCheckQuestion'>
                        <p>Does one or more of these fonts...</p>
                            <div className='CheckedFonts'>
                                <div className='Atkinson'>quick</div>
                                <div className='Readex'>quick</div>
                            </div>
                            <p>...look like this font?</p>
                            <div className='CheckedFonts'>
                                <div className='Luminari'>quick</div>
                            </div>
                        </div>
                        <button className='readButton' onClick={() => setTestPage(true)}>yes</button>
                        <button className='readButton'>no</button>
                    </div>

                )

            }

        </div>
    );
}