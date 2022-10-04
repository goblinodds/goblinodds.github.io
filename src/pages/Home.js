import React from 'react';
import './Home.css';
import { useState, useEffect } from 'react';

const text = ['looking for work', 'learning to code', 'a freelance animator']

function Home() {

    const [index, setIndex] = useState(0);

    // have to use useEffect for setInterval to work
    // milliseconds must be twice the duration of animation-duration in Home.css
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(count => (count + 1)); 
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    console.log(index);
    return <div className='Section'>
        {/* % text.length allows it to loop over the array within the bounds of the array */}
            <h2 id='Loop'>goblin is {text[index % text.length]}.</h2>
        </div>
}

export default Home;

