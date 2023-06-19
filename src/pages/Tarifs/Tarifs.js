import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Moi from './Moi/Moi';
import Deux from './Deux/Deux';
import Famille from './Famille/Famille';
import Grossesse from './Grossesse/Grossesse';
import Bebe from './bebe/Bebe';
import Evenement from './evenement/Evenement';

const Tarifs = () => {
  return (
    <div>
      <Navigation/>
      <div className='container-all'>
        <Moi/>
        <Deux/>
        <Famille/>
        <Grossesse/>
        <Bebe/>
        <Evenement/>

      </div>
      <Footer/>
    </div>
  );
};

export default Tarifs;