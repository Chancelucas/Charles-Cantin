import React from 'react';
import Image from '../../../assets/image/Mariage/vadim-paripa-PuXtB1B4zL8-unsplash.jpg';


const Header = () => {
  
  return (
    <div className='header'>
      <div className="header-container">
        <img src={Image} alt="Image" />
        <h1 className='title'>Charles <br/> Cantin</h1>
      </div>
    
    </div>
  );
};

export default Header;


