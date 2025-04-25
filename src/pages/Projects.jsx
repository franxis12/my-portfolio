import { useState } from 'react';

// Importar las imágenes
import project1Thumb from '../assets/project1-thumb.png';
import project1Main from '../assets/project1-main.png';
import project2Thumb from '../assets/project2-thumb.png';
import project2Main from '../assets/project2-main.png';
import project3Thumb from '../assets/project3-thumb.png';
import project3Main from '../assets/project3-main.png';
const projectData = [
    {
      id: 1,
      title: 'Galaxy',
      thumbnail: project1Thumb,
      image: project1Main,
      code: {
        html: '<!-- Código HTML del proyecto Galaxy -->',
        css: '/* Código CSS del proyecto Galaxy */',
        js: '// Código JavaScript del proyecto Galaxy',
      },
    },
    {
      id: 2,
      title: 'Nebula',
      thumbnail: project2Thumb,
      image: project2Main,
      code: {
        html: '<!-- Código HTML del proyecto Nebula -->',
        css: '/* Código CSS del proyecto Nebula */',
        js: '// Código JavaScript del proyecto Nebula',
      },
    },
    {
      id: 3,
      title: 'Cosmos',
      thumbnail: project3Thumb,
      image: project3Main,
      code: {
        html: '<!-- Código HTML del proyecto Cosmos -->',
        css: '/* Código CSS del proyecto Cosmos */',
        js: '// Código JavaScript del proyecto Cosmos',
      },
    },
  ];
  
function Projects() {
  const [activeProject, setActiveProject] = useState(projectData[0]);

  return (
    <section className="projects-page">
      <div className="projects-layout">
        {/* Sidebar con miniaturas */}
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

        {/* Contenido del proyecto */}
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

          <div className="resources">
  <h3>Resources</h3>
  <div className="resource-grid">
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
  </div>
</div>
        </main>
      </div>
    </section>
  );
}

export default Projects;