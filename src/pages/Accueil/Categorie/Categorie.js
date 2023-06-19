import React from 'react';
import { Link } from 'react-router-dom';
import BoutonGalerie from '../../../components/Bouton/BoutonGalerie';


const Categorie = () => {
  return (
    <div className="categorie-container">
      <Link to="/galerie" className="categorie mariage">
        <p></p>
      </Link>
      <Link to="/galerie" className="categorie grossesse">
        <p></p>
      </Link>
      <Link to="/galerie" className="categorie bebe">
        <p></p>
      </Link>
      <Link to="/galerie" className="categorie famille">
        <p></p>
      </Link>
      <Link to="/galerie" className="categorie bapteme">
        <p></p>
      </Link>
      <Link to="/galerie" className="categorie couple">
        <p></p>
      </Link>
      <Link to="/galerie" className="categorie portrait">
        <p></p>
      </Link>
      <BoutonGalerie buttonText="Mes projets" />

    </div>
  );
};

export default Categorie;
