import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// 
// set it up so when you toggle a submenu it *closes the other submenus*
// style
    // seem to need the dropdown to be styled if you want the full bg to be black
        // but you need to toggle whether the full thing is visible or not if you want the black to go away
        // when it's closed
// maybe, animation lol

const menus = [
    {
        label: 'MEDIA',
        submenu: [
            {
                label: 'illustration',
                link: 'illustration'
            },
            {
                label: 'animation',
                link: 'video'
            }
        ]
    },
    {
        label: 'PROJECTS',
        submenu: [
            {
                label: 'community map',
                href: 'https://twitter.com/goblinodds/status/1399931683969724417?s=20&t=3wD6-6f8IdJTeShAkZqs0Q'
            },
            {
                label: 'dating directory',
                link: 'tpot42'
            },
            {
                label: 'compatibility quiz',
                link: 'goblinfriender'
            }
        ]
    },
    {
        label: 'SOCIAL',
        submenu: [
            {
                label: 'twitter',
                href: 'https://twitter.com/goblincodes'
            },
            {
                label: 'instagram',
                href: 'https://www.instagram.com/goblinodds/'                
            },
            {
                label: 'youtube',
                href: 'https://www.youtube.com/c/goblinodds'
            }
        ]
    },
    {
        label: 'SUPPORT',
        submenu: [
            {
                label: 'patreon',
                href: 'https://www.patreon.com/goblinodds'
            },
            {
                label: 'ko-fi',
                href: 'https://ko-fi.com/goblinodds'
            },
            {
                label: 'redbubble',
                href: 'https://cescaspecs.redbubble.com'
            }
        ]
    }
]        

// MAIN FUNCTION
export default function Navbar() {

    //
    // TOGGLES DROPDOWN MENUS
    // 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='navbar'>
            <div className='navbarOptions'>
                {/* "GOBLINODDS" TITLE/HOME BUTTON */}
                <div className='navLeft'>
                    <Link to='/'><h1>goblinodds</h1></Link>
                </div>
                <div className='navRight'>
                    <Hamburger setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
                </div>
            </div>
            <div id='dropdown'>{isMenuOpen && <Menu menus={menus} />}</div>
        </div>
    );
}

// COMPONENTS
function Hamburger ({ setIsMenuOpen , isMenuOpen }) {
    return (
        <button className='menuButton' onClick={() => setIsMenuOpen(isMenuOpen ? false : true)}>
            <a href="#0">
                <div className='menuBar'></div>
                <div className='menuBar'></div>
                <div className='menuBar'></div>
            </a>
        </button>
    );
}

function Menu ({ menus }) {

    return (
        <div id='menuItems'>
            { menus && menus.map(menu => <MenuItem option={menu}  key={menu.label}/>) }
        </div>
    );
}

function MenuItem ({ option }) {

    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    return (
        <div>
            <h1 id='navLink' onClick={() => setIsSubmenuOpen(isSubmenuOpen ? false : true)}>
                {option.label}
            </h1>
            <div id='subMenu'>
                {isSubmenuOpen && option.submenu.map(menu => <SubmenuItem option={menu} key={menu.label} />)}
            </div>
        </div>
    );
}

function SubmenuItem ({ option, setIsMenuOpen }) {

    if (option.link) {
        return (
            <Link className='navSubLink' to={option.link} onClick={() => setIsMenuOpen(false)}>
                {option.label}
            </Link>
        );
    } else {
        return (
            <a href={option.href} className='navSubLink' target='_blank' rel='noopener noreferrer' >
                {option.label}
            </a>
        );
    }
}


