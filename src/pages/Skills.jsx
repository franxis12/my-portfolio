import { useState } from 'react';
import htmlIcon from '../assets/html-icon.png';
import cssIcon from '../assets/css-icon.png';
import jsIcon from '../assets/js-icon.png';
import csharpIcon from '../assets/csharp-icon.png';
import unityIcon from '../assets/unity-icon.png';
import psIcon from '../assets/ps-icon.png';
import figmaIcon from '../assets/figma-icon.png';
import bootstrapIcon from '../assets/bootstrap-icon.png';
import reactIcon from '../assets/react-icon.png';
import firebaseIcon from '../assets/firebase-icon.png';
import gitIcon from '../assets/git-icon.png';
import viteIcon from '../assets/vite.svg';

const skillsData = [
  { name: 'HTML', icon: htmlIcon, description: 'Markup language used to structure content on the web.' },
  { name: 'CSS', icon: cssIcon, description: 'Stylesheet language used to control the presentation of web content.' },
  { name: 'JavaScript', icon: jsIcon, description: 'Programming language for creating dynamic and interactive web experiences.' },
  { name: 'C#', icon: csharpIcon, description: 'Modern programming language used in Unity and enterprise applications.' },
  { name: 'Unity', icon: unityIcon, description: 'Game engine used for building 2D and 3D games and interactive content.' },
  { name: 'Photoshop', icon: psIcon, description: 'Industry-standard software for image editing and digital design.' },
  { name: 'Figma', icon: figmaIcon, description: 'Collaborative interface design tool for UI/UX prototyping and teamwork.' },
  { name: 'Bootstrap', icon: bootstrapIcon, description: 'CSS framework for responsive and mobile-first web development.' },
  { name: 'React', icon: reactIcon, description: 'JavaScript library for building user interfaces and front-end applications.' },
  { name: 'Firebase', icon: firebaseIcon, description: 'Platform offering backend services such as authentication and database.' },
  { name: 'Git / GitHub', icon: gitIcon, description: 'Version control and collaboration tools for software development.' },
  { name: 'Vite', icon: viteIcon, description: 'Fast build tool and development server for modern JavaScript projects.' },
];

function Skills() {
  const [selected, setSelected] = useState(skillsData[0]);

  return (
    <section className="skills-section">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`skill-card ${selected.name === skill.name ? 'active' : ''}`}
            onClick={() => setSelected(skill)}
          >
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="skill-description-box">
        <p>{selected.description}</p>
      </div>

      <section className="soft-skills">
        <h3>Soft Skills</h3>
        <ul>
          <li>Effective communication</li>
          <li>Team collaboration</li>
          <li>Time management</li>
          <li>Problem-solving mindset</li>
          <li>Adaptability</li>
          <li>Empathy and active listening</li>
          <li>Attention to detail</li>
          <li>Continuous learning attitude</li>
        </ul>
      </section>
    </section>
  );
}

export default Skills;
