import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, fas, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhoneAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { CgFileDocument } from "react-icons/cg";
import CV from '../CV/CV';

// Add the Font Awesome Solid icons to the library
library.add(fas);

const Navbar = () => {
  return (
    <div className='container'>
      {/* Logo */}
      <div>
         <Link to="/">
           <h1 className='name'>Mohamed</h1>
         </Link>
      </div>

      {/* Navigation links */}
      <div className='navbar-container'>
        {/* Home link */}
        <Link to="/">
          <FontAwesomeIcon className='icon' icon={faHome}/>
          <span>Home</span>
        </Link>

        {/* About link */}
        <Link to="/about">
          <FontAwesomeIcon className='icon' icon={faAddressCard}/>
          <span> About </span>
        </Link>

        {/* Project link */}
        <Link to="/project">
          <FontAwesomeIcon className='icon' icon={faBriefcase}/>
          <span> Project </span>
        </Link>

        {/* Resume link */}
        <Link to="/cv">
          <CgFileDocument size={23} style={{color : "#ffffff"}}/>
          <span> Resume </span>
        </Link>

        {/* Contact link */}
        <Link to="/contact">
          <FontAwesomeIcon className='icon' icon={faPhoneAlt}/>
          <span> Contact </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
