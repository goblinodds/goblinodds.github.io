import React from 'react';
import tpot from '../assets/projectthumbs/tpot.png';
import palette from '../assets/projectthumbs/palette.png';
import friender from '../assets/projectthumbs/friender.png';
import task from '../assets/projectthumbs/task.png';
import './Home.css';


// TODO
// take screenshots of projects except TPOT42
// make the thumbnails identical sizes
// finish CSS

const projects = [
    {
        name: 'TPOT for Two',
        img: [tpot],
        desc: 'filterable personals directory for twitter community',
        link: 'https://goblinodds.com/tpot42',
        github: 'https://github.com/goblinodds/goblinodds.github.io/tree/src/src/pages/Tpot42'
    },
    {
        name: 'palettegen',
        img: [palette],
        desc: 'color palette generator for artists',
        link: 'https://github.com/goblinodds/palettegen',
        github: 'https://github.com/goblinodds/palettegen'
    },
    {
        name: 'goblin friender',
        img: [friender],
        desc: 'friendship compatibility quiz',
        link: 'https://goblinodds.com/goblinfriender',
        github: 'https://github.com/goblinodds/goblinodds.github.io/tree/src/src/pages/GoblinFriender'
    },
    {
        name: '[WIP] task minimalist',
        img: [task],
        desc: 'task manager using Express, MongoDB (contact goblinodds @ gmail for github collab access)'
    }
]

// TODO
// fix CSS
// GigWraper --> ProjectWrapper with new CSS for that
// MENU
// when the menu's open and you click on the home title it should close the menu and go home

const projectCards = projects.map((project) => {
    return (
        <div className='CardWrapper'>
            <div className='CardImg'>
                <a href={project.link} target='_blank' rel='noopener noreferrer'>
                    <img className='Thumbnail' src={project.img} alt='screenshot of project' /> 
                </a>
            </div>
            <div className='TextBox ProjectDesc'>
                <h1><a href={project.link} target='_blank' rel='noopener noreferrer'>{project.name}</a></h1>
                <p>{project.desc}</p>
                {
                    project.link ? <p><a href={project.github} target='_blank' rel='noopener noreferrer'>github</a></p> : null
                }
            </div>
        </div>
    )
})

function Home() {

    return (
        <div>
            <h1>PROGRAMMING PROJECTS</h1>
            <div className='CardList'>
                {projectCards}
            </div>
        </div>
    )
}

export default Home;

