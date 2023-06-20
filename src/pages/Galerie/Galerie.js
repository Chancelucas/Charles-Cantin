import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Photo from './Photo/Photo';

const Galerie = () => {
  return (
    <div>
      <Navigation/>
      <div>
        <Photo/>
      </div>
      <Footer/>
    </div>
  );
};

export default Galerie;