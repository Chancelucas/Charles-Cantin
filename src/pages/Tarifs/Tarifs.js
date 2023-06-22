import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Moi from './Moi/Moi';
import Deux from './Deux/Deux';
import Famille from './Famille/Famille';
import Grossesse from './Grossesse/Grossesse';
import Bebe from './bebe/Bebe';
import Evenement from './evenement/Evenement';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';

const Tarifs = () => {
  return (
    <div className='div-tarif'>
      <Navigation/>
      <div className='container-all-tarifs'>
        <div className='container-all'>
          <Moi className='me'/>
          <Deux className='duo'/>
          <Famille className='famille'/>
          <Grossesse className='grossesse'/>
          <Bebe className='baby'/>
          <Evenement className='event'/>
        </div>
      </div>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  );
};

export default Tarifs;