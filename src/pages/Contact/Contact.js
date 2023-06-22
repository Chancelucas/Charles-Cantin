import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Description from './Description/Description';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';



const Contact = () => {
  return (
    <div className='contenu-global'>
      <Navigation/>
      <div>
        <Description/>
      </div>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  );
};

export default Contact;