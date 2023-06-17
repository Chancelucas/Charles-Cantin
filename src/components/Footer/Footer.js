import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container-footer'>
     <ContactForm/>
     <div className="liens-footer">
      
      <Link className='lien mention' to="/Mentions">Mentions Légales</Link>
      <Link className='lien politique' to="/Politique">Politique de confidentialité</Link>
      <Link className='lien creation' to="https://github.com/Chancelucas" target='_blank'>Site web conçu par Lucas CHANCEL</Link>
      <p className='copyright'>Copyright © 2023 Charles Cantin - Tous droits réservés</p>

     </div>
    </div>
  );
};

export default Footer;