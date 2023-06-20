import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Description from './Description/Description';



const Contact = () => {
  return (
    <div className='contenu-global'>
      <Navigation/>
      <div>
        <Description/>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;