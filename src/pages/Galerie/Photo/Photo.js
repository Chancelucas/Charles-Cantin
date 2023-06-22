import React from 'react';
import './_photo.scss';

const Photo = ({ imageUrl }) => {
  return (
    <div className="photo">
      <img src={imageUrl} alt="Photo" />
    </div>
  );
};

export default Photo;
