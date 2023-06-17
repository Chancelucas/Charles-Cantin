import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container-footer'>
      <ContactForm />
      <div className="liens-footer">

        <Link className='lien mention' to="/Mentions">Mentions Légales</Link>
        <Link className='lien politique' to="/Politique">Politique de confidentialité</Link>
        <a className='lien creation' href="https://github.com/Chancelucas" target='_blank' rel='noopener noreferrer'>Site web conçu par Lucas CHANCEL</a>
        <p className='copyright'>
          &copy; {new Date().getFullYear()} Charles Cantin - Tous droits réservés
        </p>

      </div>
    </div>
  );
};

export default Footer;
