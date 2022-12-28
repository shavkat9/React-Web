import React from 'react';
import './Navbar.css';
import Search from '../../img/search.png';
import Phone from '../../img/mobile.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__logo">
            <button className='navbar__btn'>Help</button>
            <input className='navbar__input' type="text" placeholder='Search anything'/>
            <img src={Search} className="navbar__se" />
            <button className='navbar__button'><img src={Phone} className="navbar__phone" />+998 99 000 00 00</button>
        </div>
        <div className="navbar__list">
            <ul>
                <li><a href="#">Home page</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">All Production</a></li>
                <li><a href="#">Terms and Conditions</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;