import React from 'react'
import { Link } from 'react-router-dom'
import amazonClone from '../../images/Screenshot (138).png'
import linkedInClone from '../../images/Screenshot (142).png'
import movieApp from '../../images/Screenshot (144).png'
import crudOperation from '../../images/Screenshot (146).png'
import weatherApp from '../../images/Screenshot (149).png'
import dashBoard from '../../images/Screenshot (140).png'
import X_O_Game from '../../images/Screenshot (152).png'
import to_do_list from '../../images/Screenshot (151).png'
import GithubImg from '../../images/icons8-github.svg' ;
import './Projects.css'

const Projects = () => {
  return (
    <div className='project-container'>
     <h1>
     My Recent <strong style={{color : "#c770f0"}}> Works</strong>
     <h5>Here are few projects I've Worked on recently </h5>
     </h1>
      <div  className='projects'>
        {/* amazon clone */}
     <div className='project' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
     <img src={amazonClone} alt='amazon-img' />
     <h4>amazon-clone</h4>
    <p>
    The Amazon Clone project is a web application built using React.js and the Context API.
     It replicates the basic functionality and user interface of the Amazon e-commerce website.
    </p>
    <Link to="https://github.com/Mhmdyasser33/amazon-clone">
    <img src={GithubImg} alt='github-img' />
    <span>Github</span>
    </Link>
     </div>
     {/* linkedin clone */}
     <div className='project' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
     <img src={linkedInClone} alt='linked-in' />
     <h4>LinkedIn-clone</h4>
    <p>
    The LinkedIn Clone project is a web application built using React.js and redux.
    It aims to replicate the core functionalities and user interface of the LinkedIn professional networking platform.
    </p>
    <Link to="https://github.com/Mhmdyasser33/linkedin-clone">
    <img src={GithubImg} alt='github-img' />
    <span>Github</span>
    </Link>
     </div>
    {/* Movie app */}
     <div className='project' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
     <img src={movieApp} alt='movie-app' />
     <h4>Movie-app</h4>
    <p>
    The Movie App project is a web application built using React.js that allows users to browse and explore information about movies fetched from an external API.
     Users can search for movies, view movie details, and discover popular and trending films.
    </p>
    <Link to="https://github.com/Mhmdyasser33/Movies-app">
    <img src={GithubImg} alt='github-img' />
    <span>Github</span>
    </Link>
     </div>
     {/* Crud operation */}
     <div className='project' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
     <img src={crudOperation} alt='crud-operation' />
     <h4>crud-operation</h4>
    <p>
    The CRUD Operation App project is a web application built using React.js
     that performs basic Create, Read, Update, and Delete operations on a data
     collection. It allows users to interact with the data by adding, viewing, updating, and removing records.
    </p>
    <Link to="https://github.com/Mhmdyasser33/Crud_operation">
    <img src={GithubImg} alt='github-img' />
    <span>Github</span>
    </Link>
     </div>
     {/* Weather app  */}
     <div className='project' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
     <img src={weatherApp} alt='weather-app' />
     <h4>weather-app</h4>
    <p>
    The Weather App project is a web application built using React.js that provides users with real-time weather information for various locations.
     It allows users to check the current weather conditions, temperature, humidity, and other weather-related data.
    </p>
    <Link to="https://github.com/Mhmdyasser33/Weather-app">
    <img src={GithubImg} alt='github-img' />
    <span>Github</span>
    </Link>
     </div>
     {/* Dashboard */}
     <div className='project' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
     <img src={dashBoard} alt='dashboard' />
     <h4>dashBoard</h4>
    <p>
    Simple Dashboard  an interactive and intuitive web application built with HTML,
    CSS, and JavaScript. This robust dashboard showcases essential data in a sleek
    and user-friendly manner, designed to provide a seamless user experience.
    </p>
    <Link to="https://github.com/Mhmdyasser33/Admin-Dashboard-panel">
    <img src={GithubImg} alt='github-img' />
    <span>Github</span>
    </Link>
     </div>
     {/* Tic Tac Toe Game */}
     <div className='project' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
     <img src={X_O_Game} alt='x-o-game' />
     <h4>Tic-tac-toe game </h4>
    <p>
    X-O Game a classic and timeless Tic-Tac-Toe web application built using HTML,
     CSS, and JavaScript. Get ready to engage in an exciting battle of wits against
     your opponent or challenge yourself to master this nostalgic game of Xs and Os.
    </p>
    <Link to="https://github.com/Mhmdyasser33/X-O-Game">
    <img src={GithubImg} alt='github-img' />
    <span>Github</span>
    </Link>
     </div>
     {/* To Do List  */}
     <div className='project' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
     <img src={to_do_list} alt='to-do-list' />
     <h4>to do list </h4>
    <p>
    To-Do List web application, skillfully crafted using HTML,
    CSS, and JavaScript. This efficient and user-friendly tool
     empowers you to manage your tasks, track progress, and achieve
     your goals with ease.
    </p>
    <Link to="https://github.com/Mhmdyasser33/To-Do-list">
    <img src={GithubImg} alt='github-img' />
    <span>Github</span>
    </Link>
     </div>
      </div>
    </div>
  )
}

export default Projects