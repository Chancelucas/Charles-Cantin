import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import ImagePortrait from '../../assets/image/Portrait/ali-morshedlou-WMD64tMfc4k-unsplash.jpg';
import ImagePourDeux from '../../assets/image/Couple/allef-vinicius-0dXvugMScIY-unsplash.jpg';
import ImageFamille from '../../assets/image/Famille/ioann-mark-kuznietsov-9QTQFihyles-unsplash.jpg';
import ImageGrossesse from '../../assets/image/Grossesse/camylla-battani-son4VHt4Ld0-unsplash.jpg';
import ImageBebe from '../../assets/image/Bebe/christian-bowen-OJOE587CWuE-unsplash.jpg';
import ImageEvenement from '../../assets/image/Mariage/nikita-shirokov-qGgjalogCdE-unsplash.jpg';

const Tarifs = () => {
  return (
    <div className='all-container'>
      <h2 className='title-tarifs'>Tarifs</h2>
      <div className='tarifs-container'>
        <span className='tarifs portrait'>
          <img src={ImagePortrait} alt="Image de portrait" className='photo' />
          <Link className="btn-tarifs" to="/Tarifs">Juste moi</Link>
        </span>

        <span className='tarifs pour-deux'>
          <img src={ImagePourDeux} alt="Image de couple" className='photo' />
          <Link className="btn-tarifs" to="/Tarifs">Pour deux</Link>
        </span>

        <span className='tarifs famille'>
          <img src={ImageFamille} alt="Image de famille" className='photo' />
          <Link className="btn-tarifs" to="/Tarifs">Famille</Link>
        </span>

        <span className='tarifs grossesse'>
          <img src={ImageGrossesse} alt="Image de femme enceinte" className='photo' />
          <Link className="btn-tarifs" to="/Tarifs">Il était une fois</Link>
        </span>

        <span className='tarifs bebe'>
          <img src={ImageBebe} alt="Image de bébé" className='photo' />
          <Link className="btn-tarifs" to="/Tarifs">Bébé</Link>
        </span>

        <span className='tarifs evenement'>
          <img src={ImageEvenement} alt="Image d'évenement" className='photo' />
          <Link className="btn-tarifs" to="/Tarifs">Evénement sur mesure</Link>
        </span>
      </div>
    </div>
  );
};

export default Tarifs;