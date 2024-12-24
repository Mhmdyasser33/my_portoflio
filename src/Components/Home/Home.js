import React from 'react';
import HomeIcon from '../../images/home-main.svg';
import { Link } from 'react-router-dom';
import LinkedInImg from '../../images/icons8-linkedin.svg';
import GithubImg from '../../images/icons8-github.svg';
import GmailImg from '../../images/icons8-gmail.svg';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* Left-side section */}
      <div className='left-side'>
        <div className='home-details'>
          <div className='home-page-details-container' data-aos="fade-down"
               data-aos-easing="linear"
               data-aos-duration="1500">
            <h2 className='title'>
              Hello there!👋🏻
            </h2>
            <p>
              I'M <strong className='name'>MOHAMED YASSER</strong>
            </p>
            <h3 className='job-title' style={{color: "#c770f0", fontWeight: "bolder", marginLeft: "30px", marginTop: "0px"}}>
              I'm front end developer
            </h3>
            <button className='hire-btn' style={{color: "#ffffff", background: "#c770f0", padding: "10px", borderRadius: "10px", fontSize: "20px", fontWeight: "bolder"}}>
              Hire Me
            </button>
          </div>
        </div>
      </div>

      {/* Right-side section */}
      <div className='right-side' data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="1500">
        <img src={HomeIcon} alt='home-icon' style={{width: "35rem"}}/>
      </div>

      {/* Introduction section */}
      <section className='introduce-mySelf' style={{textAlign: "left"}}>
        <h1>LET ME <span style={{color: "#c770f0"}}>INTRODUCE</span> MYSELF</h1>
        <div className='details'>
          <p className="love-programming-message" style={{fontSize: "16.2px"}}>
            I fell in love with programming and I have at least learned something, I think… 🤷‍♂️
          </p>
          <p className='section-details' style={{fontSize: "16.2px"}}>
            I am fluent in classics like <span style={{color: "#c770f0", fontSize: "16.2px"}}>C++ and JavaScript</span>
          </p>
          <p className='section-details' style={{fontSize: "16.2px"}}>My field of interest is building new Web Technologies and Products, and I'm also interested in areas related to Blockchain</p>
          <p className='section-details' style={{fontSize: "16.2px"}}>
            Whenever possible, I also apply my passion for developing products with<span style={{color: "#c770f0", fontSize: "19.2px"}}> Node.js </span> and<span style={{color: "#c770f0"}}> Modern Javascript Library and Frameworks  like React.js and Next.js</span>
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className='contact'>
        <h1> FIND ME ON </h1>
        <h3>Feel free to <span style={{color: "#c770f0"}}> connect </span> with me</h3>
        <div className='contact-container'>
          {/* Links to GitHub, LinkedIn, and Gmail */}
          <Link to="https://github.com/Mhmdyasser33">
            <img src={GithubImg} alt='github' style={{ filter: 'brightness(0) invert(1)' }} />
          </Link>
          <Link to="https://www.linkedin.com/in/mohamed-yasser-31872821b/">
            <img src={LinkedInImg} alt='linked-in' style={{ filter: 'brightness(0) invert(1)' }} />
          </Link>
          <Link to="https://mail.google.com/mail/u/0/#inbox">
            <img src={GmailImg} alt='gmail' style={{ filter: 'brightness(0) invert(1)' }} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
