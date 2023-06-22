import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';

const Galerie = () => {
  return (
    <div>
      <Navigation/>
      <div>
        <PhotoGallery/>
      </div>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  );
};

export default Galerie;