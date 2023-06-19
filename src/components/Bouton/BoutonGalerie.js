import React from 'react';
import { Link } from 'react-router-dom';

const BoutonGalerie = () => {
  return (
    <div>
      <Link className="btn-galerie" to="/Galerie">Mes projets</Link>
    </div>
  );
};

export default BoutonGalerie;