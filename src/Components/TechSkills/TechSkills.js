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

const skills = [
  { icon: <DiHtml5 size={72} />, name: 'HTML5' },
  { icon: <DiCss3 size={72} />, name: 'CSS3' },
  { icon: <DiJavascript size={72} />, name: 'JavaScript' },
  { icon: <DiBootstrap size={72} />, name: 'Bootstrap' },
  { icon: <DiSass size={72} />, name: 'Sass' },
  { icon: <DiReact size={72} />, name: 'React' },
  { icon: <CgCPlusPlus size={72} />, name: 'C++' },
  { icon: <DiPython size={72} />, name: 'Python' },
  { icon: <DiGit size={72} />, name: 'Git' },
  { icon: <DiDatabase size={72} />, name: 'Database' },
  { icon: <DiFirebase size={72} />, name: 'Firebase' },
  { icon: <DiGithub size={72} />, name: 'GitHub' },
];

const TechSkills = () => {
  return (
    <div className='tech-skill-container' data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
      {skills.map((skill, index) => (
        <div key={index} className='tech-skill-container'>
          {skill.icon}
        </div>
      ))}
    </div>
  )
}

export default TechSkills;