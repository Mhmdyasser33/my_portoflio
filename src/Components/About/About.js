import React from 'react';
import AboutIcon from '../../images/about.png';
import './About.css';
import TechSkills from '../TechSkills/TechSkills';
import Tools from '../ToolsUsed/Tools';
import Calender from '../GithubCalender/Calender';

const About = () => {
  return (
    <>
      {/* Left-side section */}
      <div className='left-side'>
        <div className='home-details'>
          <div className='home-page-details-container'>
            <h2 className='title'>
              Know Who <span style={{ color: "#c770f0" }}> I'M </span>
            </h2>
            <h4 style={{ color: "#ffffff", fontSize: "17px", fontStyle: "oblique", padding: "20px" }}>
              Hi Everyone, I am <span style={{ color: "#c770f0" }}>Mohammed Yasser </span>,
              20 years old from<span style={{ color: "#c770f0" }}>  Qena, Egypt. </span>
              I am a final year student in faculty and I am in computer science department.
            </h4>
            <h5 style={{ color: "#9b7eac", fontSize: "16px" }}>
              "Strive to build things that make a difference!"
              <br />
              _ Mohammed
            </h5>
          </div>
        </div>
      </div>

      {/* Right-side section */}
      <div className='right-side'>
        <img src={AboutIcon} alt='home-icon' style={{ width: "35rem" }} />
      </div>

      {/* Skillset section */}
      <section className='skill-container'>
        <h2>Professional <span style={{ color: "#c770f0" }} >Skillset</span> </h2>
        <TechSkills />

        {/* Tools section */}
        <section className='tools-container'>
          <h2 style={{ color: "#c770f0" }}>Tools <span style={{ color: "#ffffff" }}> I use</span></h2>
        </section>
        <Tools />
      </section>

      {/* Coding activity section */}
      <section className='days-contribution' style={{ paddingBottom: "35px" }}>
        <h2 style={{ color: "#ffffff", paddingTop: "20px" }}> Days I <span style={{ color: "#c770f0" }}>Code </span></h2>
        <Calender />
      </section>
    </>
  );
}

export default About;
