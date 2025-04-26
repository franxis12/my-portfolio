import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import project1Thumb from '../assets/project1-thumb.png';
import project1Main from '../assets/project1-main.png';
import project2Thumb from '../assets/project2-thumb.png';
import project2Main from '../assets/project2-main.png';
import project3Thumb from '../assets/project3-thumb.png';
import project3Main from '../assets/project3-main.png';
const projectData = [
    {
      id: 1,
      title: 'IOS Calculator Replica',
      thumbnail: project1Thumb,
      image: project1Main,
      code: {
        html: 'IOS Calculator Replica',
        css: 'Code CSS',
        js: 'Code JavaScript ',
        react: 'Code React',
        github:<NavLink to="https://franxis12.github.io/ISO-Calculator-Replica-/" className="link">https://franxis12.github.io/ISO-Calculator-Replica-/</NavLink>
        ,

      },
    },
    {
      id: 2,
      title: 'My personal portfolio',
      thumbnail: project2Thumb,
      image: project2Main,
      code: {
        html: 'This project dont have a HTML code',
        css: 'Code CSS',
        js: 'Code JavaScript',
        react: 'Code React',
        github:<NavLink to="https://github.com/franxis12/my-portfolio" className="link">https://github.com/franxis12/my-portfolio</NavLink>,

      },
    },
    {
      id: 3,
      title: 'Inspection App',
      thumbnail: project3Thumb,
      image: project3Main,
      code: {
        html: 'This project dont have a HTML code',
        css: 'This project dont have a CSS code',
        js: 'This project dont have a JavaScript code',
        react: 'This project dont have a React code',
        github: 'https://franxis12.github.io/ISO-Calculator-Replica-/',


      },
    },
  ];

function Projects() {
  const [activeProject, setActiveProject] = useState(projectData[0]);

  return (
    <section className="projects-page">
      <div className="projects-layout">
        <aside className="projects-sidebar">
          <h2>Projects</h2>
          <div className="thumbnail-list">
            {projectData.map((project) => (
              <img
                key={project.id}
                src={project.thumbnail}
                alt={project.title}
                className={project.id === activeProject.id ? 'active' : ''}
                onClick={() => setActiveProject(project)}
              />
            ))}
          </div>
        </aside>

        <main className="project-main">
          <div className="project-preview">
            <img src={activeProject.image} alt={activeProject.title} />
          </div>

          <div className="code-section html">
            <h3>Code [HTML]</h3>
            <pre>{activeProject.code.html}</pre>
          </div>

          <div className="code-section css">
            <h3>Code [CSS]</h3>
            <pre>{activeProject.code.css}</pre>
          </div>

          <div className="code-section js">
            <h3>Code [JavaScript]</h3>
            <pre>{activeProject.code.js}</pre>
          </div>

          <div className="code-section react">
            <h3>Code [React]</h3>
            <pre>{activeProject.code.react}</pre>
          </div>

          <div className="code-section react">
            <h3>GitHub</h3>
            <pre>{activeProject.code.github}</pre>
          </div>

          <div className="resources">
  <h3>Resources</h3>
  <div className="resource-grid">
  <div className="resource-card">
      <p>w3schools</p>
    </div>
    <div className="resource-card">
      <p>React Documentation</p>
    </div>
    <div className="resource-card">
      <p>MDN Web Docs</p>
    </div>
    <div className="resource-card">
      <p>Vite Official Site</p>
    </div>
    <div className="resource-card">
      <p>GitHub Repositories</p>
    </div>

    <div className="resource-card">
      <p>Node.js</p>
    </div>
    <div className="resource-card">
      <p>Node.js</p>
    </div>
  </div>
</div>
        </main>
      </div>
    </section>
  );
}

export default Projects;