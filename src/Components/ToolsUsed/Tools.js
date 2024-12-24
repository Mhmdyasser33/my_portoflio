import React from 'react';
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiCodeforces,
  SiNpm,
} from 'react-icons/si';
import './Tools.css';

const Tools = () => {
  return (
    <div className='tools-container' data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">

      {/* Visual Studio Code */}
      <div>
        <SiVisualstudiocode size={72} className='tool-used'/>
      </div>

      {/* Postman */}
      <div>
        <SiPostman size={72} className='tool-used'/>
      </div>

      {/* Codeforces */}
      <div>
        <SiCodeforces size={72} className='tool-used'/>
      </div>

      {/* npm */}
      <div>
        <SiNpm size={72} className='tool-used'/>
      </div>

    </div>
  )
}

export default Tools;
