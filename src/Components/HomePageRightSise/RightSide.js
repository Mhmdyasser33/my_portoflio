import React from 'react';
import HomeIcon from '../../images/home-main.svg';

const RightSide = () => {
  return (
    <div className='rightSide'>
      {/* Display the home icon */}
      <img src={HomeIcon} alt='home-icon'/>
    </div>
  );
}

export default RightSide;
