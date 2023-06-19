import React from 'react';
import { Link } from 'react-router-dom';

const BoutonContact = () => {
  return (
    <div>
      <Link className="btn-contact" to="/Contact">Lire plus</Link>
    </div>
  );
};

export default BoutonContact;