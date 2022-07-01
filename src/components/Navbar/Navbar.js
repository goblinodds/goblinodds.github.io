import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [showDropdown, setShowDropdown]=useState(false);

    return (
        <div className='navbar'>
            <div className='navbarOptions'>
                <div className='navLeft'>
                    <Link to='/'><h1>goblinodds</h1></Link>
                </div>
                <div className='navRight'>
                    <button className='menuButton' onClick={()=>setShowDropdown(!showDropdown)}>
                        <a href="#0">
                            <div className='menuBar'></div>
                            <div className='menuBar'></div>
                            <div className='menuBar'></div>
                        </a>
                    </button>
                </div>
            </div>
            <div>
            {
                showDropdown?<div id='dropdown'>
                        <div className='menuItems'>
                            <Link className='navLink' to='video' onClick={()=>setShowDropdown(false)}>video</Link>
                            <Link className='navLink' to='illustration' onClick={()=>setShowDropdown(false)}>illustration</Link>
                            <Link className='navLink' to='tpot42' onClick={()=>setShowDropdown(false)}>tpot for two</Link>
                        </div>
                    </div>:null 
            }
            </div>
        </div>
    );
}

// links
    // video
    // illustration
    // dev or projects
        // tpot for two (tpot42)
        // storyGen (WIP)
        // github

export default Navbar;