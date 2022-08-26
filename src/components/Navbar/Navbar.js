import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    const [showDropdown, setShowDropdown]=useState(false);

    const MenuItems = (props) => {
        return (
            <Link className='navLink' to={props.link} onClick={e =>setShowDropdown(false)}>{props.title}</Link>
        )
    }
    
    return (
        <div className='navbar'>
            <div className='navbarOptions'>

                {/* "GOBLINODDS" TITLE/HOME BUTTON */}
                <div className='navLeft'>
                    <Link to='/'><h1>goblinodds</h1></Link>
                </div>

                {/* HAMBURGER MENU */}
                <div className='navRight'>
                    <button className='menuButton' onClick={e =>setShowDropdown(!showDropdown)}>
                        <a href="#0">
                            <div className='menuBar'></div>
                            <div className='menuBar'></div>
                            <div className='menuBar'></div>
                        </a>
                    </button>
                </div>
            </div>
            {/* ON HAMBURGER MENU CLICK, DISPLAYS OR HIDES MENU */}
            <div>
            {
                showDropdown ? <div id='dropdown'>
                        <div className='menuItems'>
                            <MenuItems link='video'
                                title='video'/>
                            <MenuItems link='illustration' 
                                title='illustration' />
                            {/* <div className='navSublink'>projects</div> */}
                            <MenuItems link='tpot42'
                                title='tpot for two' />
                            <a href='https://github.com/goblinodds' target='_blank' rel='noopener noreferrer' className='navLink' onClick={e =>setShowDropdown(false)}>github</a>
                        </div>
                    </div> : null 
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