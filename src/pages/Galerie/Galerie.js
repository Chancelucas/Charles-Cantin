import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import PhotoGallery from './PhotoGallery/PhotoGallery';

const Galerie = () => {
  return (
    <div>
      <Navigation/>
      <div>
        <PhotoGallery/>
      </div>
      <Footer/>
    </div>
  );
};

export default Galerie;