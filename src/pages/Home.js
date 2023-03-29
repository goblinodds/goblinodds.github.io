import React from 'react';
import tpot from '../assets/projectthumbs/tpot.png';
import palette from '../assets/projectthumbs/palette.png';
import friender from '../assets/projectthumbs/friender.png';
import task from '../assets/projectthumbs/task.png';

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
        name: 'task minimalist [in progress]',
        img: [task],
        desc: 'task manager using Express, MongoDB',
        link: 'https://github.com/goblinodds/taskgen',
        github: 'https://github.com/goblinodds/taskgen'
    }
]

// TODO
// fix CSS
// GigWraper --> ProjectWrapper with new CSS for that

const projectCards = projects.map((project) => {
    return (
        <div className='GigWrapper'>
            <div className='CardImg'>
                <a href={project.link} target='_blank' rel='noopener noreferrer'>
                    <img src={project.img} alt='screenshot of project' /> 
                </a>
            </div>
            <div className='TextBox'>
                <h1>{project.name}</h1>
                <p>{project.desc}</p>
            </div>
        </div>
    )
})

function Home() {

    return (
        <div className='Section'>
            {projectCards}
        </div>
    )
}

export default Home;

