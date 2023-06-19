import React from 'react';
import { Link } from 'react-router-dom';

const BoutonContact = ({buttonText}) => {
  return (
    <div>
      <Link className="btn-contact" to="/Contact">{buttonText}</Link>
    </div>
  );
};

export default BoutonContact;