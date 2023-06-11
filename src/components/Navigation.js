import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (

    <div className="navigation">
      <ul>
        <NavLink to={"/"}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to={"/Galerie"}>
          <li>Galerie</li>
        </NavLink>
        <NavLink>
          <img src="./Logo.png" alt="Logo Chales Cantin" />
        </NavLink>
        <NavLink to={"/Tarifs"}>
          <li>Tarifs</li>
        </NavLink>
        <NavLink to={"/Contact"}>
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>

  );
};

export default Navigation;