import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import burgerMenu from '../../assets/image/MenuBurger (3).png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Scroll to top when changing the page
    scrollToTop();
  }, []);

  return (
    <div className={`navigation ${isMenuOpen ? 'open' : ''} ${isTransparent ? 'transparent' : ''}`}>
      <div className="logo-container">
        <NavLink to="/" onClick={closeMenu}>
          <img className="logo" src="./Logo.png" alt="Logo Chales Cantin" />
        </NavLink>
      </div>

      <button className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <img src={burgerMenu} alt="Image burger" className="logo" />
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
