import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

/* TODO
    figure out how to toggle entire menu off when you click on a submenu item
        try going through this first
        https://beta.reactjs.org/learn
    style menu
        full-screen black bg
        left-justified
    style submenu
*/


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

export default function Navbar() {

    //
    // TOGGLES DROPDOWN MENUS
    // 
    const [mainDropdown, setMainDropdown] = useState(null);

    function toggleMenu (menu) {
        setMainDropdown(mainDropdown ? null : menu);
    }

    //
    // RENDERED JSX
    //

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
                    <button className='menuButton' onClick={() => toggleMenu(<Menu menus={menus} />)}>
                        <a href="#0">
                            <div className='menuBar'></div>
                            <div className='menuBar'></div>
                            <div className='menuBar'></div>
                        </a>
                    </button>
                </div>
            </div>

            { mainDropdown }

        </div>
    );
}

// maps all labels in menus array
function Menu ({ menus }) {
    return (
        <div>
            { menus && menus.map(menu => <MenuItem option={menu} />) }
        </div>           
    );
}

function MenuItem ({ option }) {
    const [subDropdown, setSubDropdown] = useState(null);

    function toggleSubmenu (menu) {
        setSubDropdown(subDropdown ? null : menu);
    }

    return (
        <div>
            <h2
                key={option.label}
                className='MenuItem'
                onClick={() => {toggleSubmenu(option.label)}}
                >
                    {option.label}
            </h2>
            {(subDropdown === option.label) && <SubmenuItem option={option}/>}

        </div>
    );
}

function SubmenuItem ({ option }) {
    return (
        <div>
            { option.submenu.map((option2) => {
                if (option2.link) {
                    return (
                        <Link className='navLink' to={option2.link}>
                            {option2.label}
                        </Link>
                    )
                } else {
                    return (
                        <a href={option2.href} className='navLink' target='_blank' rel='noopener noreferrer' >
                            {option2.label}
                        </a>
                    )     
                }
            })}
        </div>
    );
}