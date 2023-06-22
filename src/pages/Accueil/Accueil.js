import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../Accueil/Header/Header';
import Presentation from '../Accueil/Presentation/Presenation';
import Categorie from '../Accueil/Categorie/Categorie';
import Tarifs from '../Accueil/Tarifs/Tarifs';
import Footer from '../../components/Footer/Footer';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';

const Accueil = () => {
  return (
    <div className='div-accueil'>
      <Navigation/>
      <Header/> 
      <Presentation/> 
      <Categorie/>
      <Tarifs/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  );
};

export default Accueil;