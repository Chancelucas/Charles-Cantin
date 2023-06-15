import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import Presenation from '../../components/Presentation/Presenation';
import Categorie from '../../components/Categorie/Categorie';

const Accueil = () => {
  return (
    <div>
      <Navigation/>
      <Header/> 
      <Presenation/> 
      <Categorie/>
    </div>
  );
};

export default Accueil;