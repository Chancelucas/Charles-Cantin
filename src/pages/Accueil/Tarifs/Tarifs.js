import React from 'react';
import { Link } from 'react-router-dom';

const Tarifs = () => {
  return (
    <div className='all-container'>
      <h2 className='title-tarifs'>Tarifs</h2>
      <div className='tarifs-container'>
        <Link className="tarif-link portrait" to="/Tarifs">
          <div className='photo photo-portrait' />
          Juste moi
        </Link>

        <Link className="tarif-link pour-deux" to="/Tarifs">
          <div className='photo photo-duo' />
          Pour deux
        </Link>

        <Link className="tarif-link famille" to="/Tarifs">
          <div className='photo photo-famille' />
          Famille
        </Link>

        <Link className="tarif-link grossesse" to="/Tarifs">
          <div className='photo photo-grossesse' />
          Il était une fois
        </Link>

        <Link className="tarif-link bebe" to="/Tarifs">
          <div className='photo photo-bebe' />
          Bébé
        </Link>

        <Link className="tarif-link evenement" to="/Tarifs">
          <div className='photo photo-evenement' />
          Evénement
        </Link>
      </div>
    </div>
  );
};

export default Tarifs;
