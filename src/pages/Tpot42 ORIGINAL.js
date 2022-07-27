import React from 'react';
import { useState } from 'react';
import './Tpot42.css';
import ProfilesF from '../components/Tpot42/ProfilesF.js';
import ProfilesM from '../components/Tpot42/ProfilesM.js';
import ProfilesNB from '../components/Tpot42/ProfilesNB.js';
import Directories from '../components/Tpot42/Directories.js';

// creates an array called "entries" of each object in Profiles
// by iterating and pushing current "profile" to the "entries" array

const entriesF = ProfilesF.map((profile) => (

        <div className='Name'>
            <p>⇨ <a href={profile.link} target='_blank' rel='noopener noreferrer'>
                {profile.name}
                </a>
            </p>
            {/* if key exists, display (FIGURE OUT HOW TO DO THIS MORE CLEANLY, PROBABLY BY ITERATING OVER EACH OBJECT?) 
            but it won't let me declare variables inside any part of this...return function?*/}
            {
                profile.twitter ? (
                    <p className='Info'>↳ <a href={profile.twitter} target='_blank' rel='noopener noreferrer'>twitter</a></p> ) :
                    null
            }
            {
                profile.featuredTweet ? (
                    <p className='Info'>↳ <a href={profile.featuredTweet} target='_blank' rel='noopener noreferrer'>featured tweet</a></p> ) :
                    null
            }
            {
                profile.notes ? (
                    <p className='Info'>↳ {profile.notes}</p> ) :
                    null
            }            
            {
                profile.location ? (
                    <p className='Info'>↳ {profile.location}</p> ) :
                    null
            }
        </div>
    )
)

const entriesNB = ProfilesNB.map((profile) => (

    <div className='Name'>
        <p>⇨ <a href={profile.link} target='_blank' rel='noopener noreferrer'>
            {profile.name}
            </a>
        </p>
        {/* if key exists, display (FIGURE OUT HOW TO DO THIS MORE CLEANLY, PROBABLY BY ITERATING OVER EACH OBJECT?) 
        but it won't let me declare variables inside any part of this...return function?*/}
        {
            profile.twitter ? (
                <p className='Info'>↳ <a href={profile.twitter} target='_blank' rel='noopener noreferrer'>twitter</a></p> ) :
                null
        }
        {
            profile.featuredTweet ? (
                <p className='Info'>↳ <a href={profile.featuredTweet} target='_blank' rel='noopener noreferrer'>featured tweet</a></p> ) :
                null
        }
        {
            profile.notes ? (
                <p className='Info'>↳ {profile.notes}</p> ) :
                null
        }            
        {
            profile.location ? (
                <p className='Info'>↳ {profile.location}</p> ) :
                null
        }
    </div>
)
)

const entriesM = ProfilesM.map((profile) => (
    <div className='Name'>
        <p>⇨ <a href={profile.link} target='_blank' rel='noopener noreferrer'>
            {profile.name}
            </a>
        </p>
        {/* if key exists, display (FIGURE OUT HOW TO DO THIS MORE CLEANLY, PROBABLY BY ITERATING OVER EACH OBJECT?) 
        but it won't let me declare variables inside any part of this...return function?*/}
        {
            profile.twitter ? (
                <p className='Info'>↳ <a href={profile.twitter} target='_blank' rel='noopener noreferrer'>twitter</a></p> ) :
                null
        }
        {
            profile.featuredTweet ? (
                <p className='Info'>↳ <a href={profile.featuredTweet} target='_blank' rel='noopener noreferrer'>featured tweet</a></p> ) :
                null
        }
        {
            profile.notes ? (
                <p className='Info'>↳ {profile.notes}</p> ) :
                null
        }            
        {
            profile.location ? (
                <p className='Info'>↳ {profile.location}</p> ) :
                null
        }

    </div>
)
)

const directories = Directories.map((directory) => (
    <div className='Name'>
        <p>⇨ <a href={directory.link} target='_blank' rel='noopener noreferrer'>{directory.name}</a></p>
    </div>
    )
)

function Tpot42() {

    const [showDropdownF, setShowDropdownF] = useState(false);
    const [showDropdownNB, setShowDropdownNB] = useState(false);
    const [showDropdownM, setShowDropdownM] = useState(false);
    const [turnArrowF, setTurnArrowF] = useState(false);
    const [turnArrowNB, setTurnArrowNB] = useState(false);
    const [turnArrowM, setTurnArrowM] = useState(false);

    return (
        <div className='Directories'>
            <div className='Header'>
                <h1>TPOT for two</h1>
                <p>an ingroup "date me" directory</p>
            </div>

            <div className='Directory'>
                <h2 className='Dropdown' onClick={e => { setShowDropdownF(!showDropdownF); setTurnArrowF(!turnArrowF) }}>
                    <div className='Arrows'>
                        {turnArrowF ? (<div>▼</div>) : (<div>▶</div>)}
                    </div>
                    WOMEN
                </h2>
                {showDropdownF && entriesF}
            </div>

            <div className='Directory'>
                <h2 className='Dropdown' onClick={e => { setShowDropdownNB(!showDropdownNB); setTurnArrowNB(!turnArrowNB) }}>
                    <div className='Arrows'>
                        {turnArrowNB ? (<div>▼</div>) : (<div>▶</div>)}
                    </div>
                    ENBIES
                </h2>
                {showDropdownNB && entriesNB}
            </div>

            <div className='Directory'>
                <h2 className='Dropdown' onClick={e => { setShowDropdownM(!showDropdownM); setTurnArrowM(!turnArrowM) }}>
                    <div className='Arrows'>
                        {turnArrowM ? (<div>▼</div>) : (<div>▶</div>)}
                    </div>
                    MEN
                </h2>
                {showDropdownM && entriesM}
            </div>

            <div className='Header'>
                <h1>MORE DIRECTORIES</h1>
            </div>
            <div className='Directory'>
                {directories}
            </div>
        </div>
    )
}

export default Tpot42;