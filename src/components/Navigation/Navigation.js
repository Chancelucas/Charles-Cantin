import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import burgerMenu from '../../assets/image/MenuBurger.svg'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`navigation ${isMenuOpen ? 'open' : ''}`}>

      <div className="logo-container">
        <NavLink to="/" onClick={closeMenu}>
          <img className="logo" src="./Logo.png" alt="Logo Chales Cantin" />
        </NavLink>
      </div>

      <button className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <img src={burgerMenu} alt='Image burger' className="logo" />
      </button>

      <ul className="menu">
        <NavLink to="/" onClick={closeMenu}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/Galerie" onClick={closeMenu}>
          <li>Galerie</li>
        </NavLink>
        <NavLink to="/Tarifs" onClick={closeMenu}>
          <li>Tarifs</li>
        </NavLink>
        <NavLink to="/Contact" onClick={closeMenu}>
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;



