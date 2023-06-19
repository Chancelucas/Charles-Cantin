import React from 'react';
import { Link } from 'react-router-dom';

const BoutonGalerie = ({ buttonText }) => {
  return (
    <div>
      <Link className="btn-galerie" to="/Galerie">{buttonText}</Link>
    </div>
  );
};

export default BoutonGalerie;
