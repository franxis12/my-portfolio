import avatarHero from '../assets/my-avatar.png';
import avatarAbout from '../assets/avatar-about.png';
import htmlIcon from '../assets/html-icon.png';
import cssIcon from '../assets/css-icon.png';
import jsIcon from '../assets/js-icon.png';
import csharpIcon from '../assets/csharp-icon.png';
import unityIcon from '../assets/unity-icon.png';
import psIcon from '../assets/ps-icon.png';
import githubIcon from '../assets/github-icon.jpg';

import { NavLink } from 'react-router-dom';


function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-text">
          <h1>FRANCIS MARTINEZ</h1>
          <h2>Front end developer</h2>
          <p>
            I’m a front-end developer based in the U.S. I design and build
            responsive websites and applications with modern tools and a
            creative touch.
          </p>
          <div className="hero-buttons">
            <NavLink to="/resume" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Resume CV</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Projects</NavLink>
          </div>
        </div>
        <div className="hero-img">
          <img src={avatarHero} alt="Francis avatar" />
        </div>
      </div>

      <div className="about">
        <h3>About</h3>
        <div className="about-content">
          <div className="about-img">
            <img src={avatarAbout} alt="Avatar About" />
          </div>
          <div className="about-cards">
            <div className="card">
              <p>I am a front-end developer with a focus on functional and responsive design.</p>
            </div>
            <div className="card">
              <p>I have experience creating interfaces with HTML, CSS, JavaScript and React.</p>
            </div>
            <div className="card">
              <p>I am constantly seeking to improve my skills with modern tools and best practices.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="skills">
        <h3>Skills</h3>
        <div className="skills-icons">
          <img src={htmlIcon} alt="HTML" />
          <img src={cssIcon} alt="CSS" />
          <img src={jsIcon} alt="JavaScript" />
          <img src={csharpIcon} alt="C#" />
          <img src={unityIcon} alt="Unity" />
          <img src={psIcon} alt="Photoshop" />
        </div>
      </div>

      <div className="projects">
        <h3>Projects</h3>
        <div className="projects-list">
          <div className="project-card">
            <h4>Portfolio</h4>
            <p>Personal website designed to showcase my skills, projects, and contacts. Implemented with React, HTML, and CSS.</p>
          </div>
          <div className="project-card">
            <h4>Calculator</h4>
            <p>A functional replica of the iOS calculator developed in pure JavaScript. It includes basic operations.</p>
          </div>
        </div>
      </div>

      <div className="contact">
        <h3>Contact</h3>
        <form className="contact-form">
            <div className="contact-inputs">
          <input type="name" placeholder="Name" />
          <input type="email" placeholder="Email" />
          </div>
          <div className="contact-textarea">
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </div>
        </form>
        <p className="disclaimer">
          The personal data collected in this form is only used to respond to
          your inquiries and will not be shared.
        </p>
        <div className="social-icons">
          <a href="https://github.com/franxis12" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" width="30" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;