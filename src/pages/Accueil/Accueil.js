import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../Accueil/Header/Header';
import Presentation from '../Accueil/Presentation/Presenation';
import Categorie from '../Accueil/Categorie/Categorie';
import Tarifs from '../Accueil/Tarifs/Tarifs';
import Footer from '../../components/Footer/Footer';

const Accueil = () => {
  return (
    <div>
      <Navigation/>
      <Header/> 
      <Presentation/> 
      <Categorie/>
      <Tarifs/>
      <Footer/>
    </div>
  );
};

export default Accueil;