import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    return (
        <div className='navbar'>
           <div className='navLeft'>
               <Link class='navHome' to='/'><h1>frankie parise</h1></Link>
           </div>
           <div className='navRight'>
               <Link className='navLink' to='video'>video</Link>
               <a className='navLink' href="https://www.instagram.com/goblinodds/" target='_blank' rel='noopener noreferrer'>illustration</a>
           </div>
        </div>
    );
}

export default Navbar;