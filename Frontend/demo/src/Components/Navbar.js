import React, { useState } from 'react';
import './Styles.css';
import logo from '../assests/logo.png';

const Navbar = () => {
    const [isMobileView, setMobileView] = useState(false);

    const toggleMenu  = () => {
        setMobileView(!isMobileView);
    };

    const closeMenu = () =>{
        setMobileView(false);
    }
  return (
    <div>
      <nav className='container-nav'>
        <img src = {logo} alt='logo' className='logo' />
        <div className='hamburger' onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        
        <ul className={`nav ${isMobileView ? 'nav-active' : '' }`}>
            {isMobileView && (
                <button className='close-btn' onClick={closeMenu}>
                     ✕
                </button>
            )}
            <li><a href = "#">Home</a></li>
            <li><a href = "#about">About Us</a></li>
            <li><a href = "#materials">Materials</a></li>
            <li><a href = "#contribute">Contribute</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;