import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiPython,
  DiGit,
  DiJavascript,
  DiDatabase,
  DiBootstrap,
  DiHtml5,
  DiCss3,
  DiSass,
  DiFirebase,
  DiGithub,
} from 'react-icons/di';
import './TechSkills.css';

const TechSkills = () => {
  return (
    <div className='tech-skill-container' data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">

      {/* HTML5 */}
      <div>
        <DiHtml5 size={72} className='tech-skill'/>
      </div>

      {/* CSS3 */}
      <div>
        <DiCss3 size={72} className='tech-skill'/>
      </div>

      {/* JavaScript */}
      <div>
        <DiJavascript size={72} className='tech-skill'/>
      </div>

      {/* Bootstrap */}
      <div>
        <DiBootstrap size={72} className='tech-skill'/>
      </div>

      {/* Sass */}
      <div>
        <DiSass size={72} className='tech-skill'/>
      </div>

      {/* React */}
      <div>
        <DiReact size={72} className='tech-skill'/>
      </div>

      {/* C++ */}
      <div>
        <CgCPlusPlus size={72} className='tech-skill'/>
      </div>

      {/* Python */}
      <div>
        <DiPython size={72} className='tech-skill'/>
      </div>

      {/* Git */}
      <div>
        <DiGit size={72} className='tech-skill'/>
      </div>

      {/* Database */}
      <div>
        <DiDatabase size={72} className='tech-skill'/>
      </div>

      {/* Firebase */}
      <div>
        <DiFirebase size={72} className='tech-skill'/>
      </div>

      {/* GitHub */}
      <div>
        <DiGithub size={72} className='tech-skill'/>
      </div>

    </div>
  )
}

export default TechSkills;
