import React from 'react';
import { useState, useEffect } from 'react';

const text = ['looking for work', 'learning to code', 'a freelance animator']

function Home() {

    const [index, setIndex] = useState(0);

    // have to use useEffect for setInterval to work
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(count => (count + 1)); 
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    console.log(index);
    return <div className='Section'>
        {/* % text.length allows it to loop over the array within the bounds of the array */}
            <h2>goblin is {text[index % text.length]}.</h2>
        </div>
}

export default Home;

