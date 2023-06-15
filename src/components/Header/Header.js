import React, { useEffect, useState } from 'react';
import Image from '../../assets/image/Accueil/vadim-paripa-tEFItLGn0uc-unsplash.jpg';


const Header = () => {
  
  return (
    <div className='header'>
      <div className="container">
        <img src={Image} alt="Image" />
        <h1 className='title'>Charles <br/> Cantin</h1>
      </div>
    
    </div>
  );
};

export default Header;


