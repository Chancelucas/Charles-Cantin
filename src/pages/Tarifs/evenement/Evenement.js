import React from 'react';
import BoutonContact from '../../../components/Bouton/BoutonContact';

const Evenement = () => {
  return (
    <div className="container-evenement">
      <div className='photo-evenement' />
      <h3 className='title-evenement'>Evenement sur mesure</h3>
      <BoutonContact buttonText="Demander un devis" />

      <p className='text-evenement'>La prestation "Mon bébé" capture la magie de votre enfant jusqu'à l'âge de 3 ans, dans le confort de votre domicile. Des clichés tendres et authentiques qui immortalisent les moments précieux de cette période si spéciale. Des souvenirs doux à chérir pour toujours.</p>
    </div>
  );
};

export default Evenement;
