import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const menuOptions = {
    main: [
        'MEDIA',
        'PROJECTS',
        'SOCIAL',
        'SUPPORT'
    ],
    media: [
        'illustration',
        'animation'
    ],
    projects: [
        'community map',
        'dating directory',
        'compatibility quiz'
    ],
    social: [
        'twitter',
        'instagram',
        'youtube'
    ],
    support: [
        'patreon',
        'ko-fi',
        'redbubble'
    ]
}

export default function Navbar() {

    const [showDropdown, setShowDropdown] = useState(false);

    // menu item JSX
    const MenuItem = (props) => {
        return (
            <Link className='navLink' to={props.link} onClick={() => setShowDropdown(false)}>{props.title}</Link>
        )
    }

    function MainMenu() {
        return (
            <div id='dropdown'>
                <div className='menuItems'>
                    <MenuItem link='video' title='video' />
                    <MenuItem link='illustration' title='illustration' />
                    <MenuItem link='tpot42' title='tpot for two' />
                    <MenuItem link='goblinFriender' title='goblin friender' />
                    <a href='https://github.com/goblinodds' target='_blank' rel='noopener noreferrer' className='navLink' onClick={() => setShowDropdown(false)}>github</a>
                </div>
            </div>
        );
    }

    // CONTROLLED BY showDropdown
    function Menu() {
        return (
            <div>
                {
                    showDropdown ? <MainMenu /> : null
                }
            </div>
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
                    {/* toggles menu */}
                    <button className='menuButton' onClick={() => setShowDropdown(!showDropdown)}>
                        <a href="#0">
                            <div className='menuBar'></div>
                            <div className='menuBar'></div>
                            <div className='menuBar'></div>
                        </a>
                    </button>
                </div>
            </div>
            {/* TOGGLED MENU */}
            <Menu />
        </div>
    );
}