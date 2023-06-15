import React, { useEffect, useState } from 'react';
import Image from '../../assets/image/Accueil/vadim-paripa-tEFItLGn0uc-unsplash.jpg';


const Header = () => {
  
  return (
    <div className='header'>
      <img src={Image} alt="Image" />
      <h1 className='title'>Charles <br/> Cantin</h1>
    
    </div>
  );
};

export default Header;


