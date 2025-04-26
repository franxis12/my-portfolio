import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/porfolio-logo.png'; // ← Importa tu logo correctamente

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Logo Francis" className="logo-img" />
          </NavLink>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Home</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Projects</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>About</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Contact</NavLink></li>
            <li><NavLink to="/resume" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Resume</NavLink></li>
            <li><NavLink to="/skills" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Skills</NavLink></li>


          </ul>
        </nav>

        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </header>
  );
}

export default Header;