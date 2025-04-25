import avatarHero from '../assets/my-avatar.png';
import avatarAbout from '../assets/avatar-about.png';
import htmlIcon from '../assets/html-icon.png';
import cssIcon from '../assets/css-icon.png';
import jsIcon from '../assets/js-icon.png';
import csharpIcon from '../assets/csharp-icon.png';
import unityIcon from '../assets/unity-icon.png';
import psIcon from '../assets/ps-icon.png';
import githubIcon from '../assets/github-icon.jpg';

function Home() {
  return (
    <section className="home">
      {/* Hero */}
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
            <button>Contact</button>
            <button>Projects</button>
          </div>
        </div>
        <div className="hero-img">
          <img src={avatarHero} alt="Francis avatar" />
        </div>
      </div>

      {/* About */}
      <div className="about">
        <h3>About</h3>
        <div className="about-content">
          <div className="about-img">
            <img src={avatarAbout} alt="Avatar About" />
          </div>
          <div className="about-cards">
            <div className="card">
              <p>Soy un desarrollador front-end con enfoque en diseño funcional y adaptativo.</p>
            </div>
            <div className="card">
              <p>Tengo experiencia creando interfaces con HTML, CSS, JavaScript y React.</p>
            </div>
            <div className="card">
              <p>Busco constantemente mejorar mis habilidades con herramientas modernas y buenas prácticas.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
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

      {/* Projects resumen */}
      <div className="projects">
        <h3>Projects</h3>
        <div className="projects-list">
          <div className="project-card">
            <h4>Portfolio</h4>
            <p>Sitio web personal diseñado para mostrar mis habilidades, proyectos y contacto. Implementado con React, HTML y CSS.</p>
          </div>
          <div className="project-card">
            <h4>Calculator</h4>
            <p>Réplica funcional de la calculadora de iOS desarrollada en JavaScript puro. Incluye operaciones básicas y diseño responsive.</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="contact">
        <h3>Contact</h3>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
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