import React from 'react';
import { Link } from 'react-router-dom';
import topIcon from '../../images/up-arrow.png';
import './Scroll.css'; // Make sure to adjust the path based on your file structure

const Scroll = () => {
    const handleScrollTop = () =>{
     window.scrollTo({top : 0 , behavior : 'smooth'}) ;
    }
  return (
    <div className='scroll'>
      <Link to='#' className='scroll-link' onClick={handleScrollTop}>
        <img src={topIcon} alt='top-icon' className='scroll-icon' />
      </Link>
    </div>
  );
}

export default Scroll;
