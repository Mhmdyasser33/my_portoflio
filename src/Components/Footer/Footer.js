import React from 'react';
import { Link } from 'react-router-dom';
import LinkedInImg from '../../images/icons8-linkedin.svg';
import GithubImg from '../../images/icons8-github.svg';
import GmailImg from '../../images/icons8-gmail.svg';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      {/* Copyright section */}
      <div className='copyright'>
        <p>All Copyrights are reserved © 2023 Mohamed Yasser &#128525;</p>
      </div>

      {/* Contact links section */}
      <div className='contact-links'>
        {/* Link to GitHub */}
        <Link to="https://github.com/Mhmdyasser33">
          <img src={GithubImg} alt='github' style={{ filter: 'brightness(0) invert(1)' }} />
        </Link>

        {/* Link to LinkedIn */}
        <Link to="https://www.linkedin.com/in/mohamed-yasser-31872821b/">
          <img src={LinkedInImg} alt='linked-in' style={{ filter: 'brightness(0) invert(1)' }} />
        </Link>

        {/* Link to Gmail */}
        <Link to="https://mail.google.com/mail/u/0/#inbox">
          <img src={GmailImg} alt='gmail' style={{ filter: 'brightness(0) invert(1)' }} />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
