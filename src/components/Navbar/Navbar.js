import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [show, setShow]=useState(false);
    return (
        <div className='navbar'>
            <div className='navTop'>
                <div className='navLeft'>
                    <Link class='navHome' to='/'><h1>frankie parise</h1></Link>
                </div>
                <div className='navRight'>
                    <Link className='navLink' to='video'>video</Link>
                    <a className='navLink' href="https://www.instagram.com/goblinodds/" target='_blank' rel='noopener noreferrer'>illustration</a>
                    <button className='navButton' onClick={()=>setShow(!show)}><a href="#0">dev</a></button>
                </div>
            </div>
            <div className='navBottom'>
                {
                    show?<div className='navBottomText'>
                        <Link className='navLink' to='storyGen'>storyGen (WIP)</Link>
                        {/* <Link className='navLink' to='readingSpeed'>reading speed (WIP)</Link> */}
                        <a className='navLink' href="https://github.com/goblinodds" target='_blank' rel='noopener noreferrer'>github</a>     
                    </div>:null 
                }
            </div>
        </div>
    );
}

export default Navbar;