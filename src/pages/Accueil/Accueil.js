import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import Presenation from '../../components/Presentation/Presenation';
import Categorie from '../../components/Categorie/Categorie';
import Tarifs from '../../components/Tarifs/Tarifs';

const Accueil = () => {
  return (
    <div>
      <Navigation/>
      <Header/> 
      <Presenation/> 
      <Categorie/>
      <Tarifs/>
    </div>
  );
};

export default Accueil;