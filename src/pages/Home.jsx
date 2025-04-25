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
            {/* Aquí puedes agregar tu imagen en el futuro */}
            <img src="/my-avatar.png" alt="Francis avatar" />
          </div>
        </div>
  
        {/* About */}
        <div className="about">
  <h3>About</h3>
  <div className="about-content">
    <div className="about-img">
      <img src="/avatar-about.png" alt="Avatar" />
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
            <img src="/html-icon.png" alt="HTML" />
            <img src="/css-icon.png" alt="CSS" />
            <img src="/js-icon.png" alt="JavaScript" />
            <img src="/csharp-icon.png" alt="C#" />
            <img src="/unity-icon.png" alt="Unity" />
            <img src="/ps-icon.png" alt="Photoshop" />
          </div>
        </div>
  
        <div className="projects">
  <h3>Projects</h3>
  <div className="projects-list">
    <div className="project-card">
      <h4>Portfolio</h4>
      <p>
        Sitio web personal diseñado para mostrar mis habilidades, proyectos y contacto. Implementado con React, HTML y CSS.
      </p>
    </div>
    <div className="project-card">
      <h4>Calculator</h4>
      <p>
        Réplica funcional de la calculadora de iOS desarrollada en JavaScript puro. Incluye operaciones básicas y diseño responsive.
      </p>
    </div>
  </div>
</div>
  
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
         <a href="https://github.com/tuUsuario" target="_blank">
              <img src="/github-icon.png" alt="GitHub" width="30" />
         </a>
  </div>
</div>
      </section>
    );
  }
  
  export default Home;