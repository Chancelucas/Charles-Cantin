import React, { useState } from 'react';
import Photo from '../Photo/Photo';
import image1 from '../../../assets/image/Bapteme/anna-hecker-ecbXfGuiGEM-unsplash.jpg';
import image2 from '../../../assets/image/Bapteme/jonathan-borba-oHB7VKdpHQM-unsplash.jpg';
import image3 from '../../../assets/image/Bapteme/jonathan-borba-VCjhp_UHk2w-unsplash.jpg';
import image4 from '../../../assets/image/Bapteme/katrien-sterckx-fn0xXL9szcU-unsplash.jpg';
import image5 from '../../../assets/image/Bebe/brytny-com-C4rXIFSzEXk-unsplash.jpg';
import image6 from '../../../assets/image/Bebe/christian-bowen-OJOE587CWuE-unsplash.jpg';
import image7 from '../../../assets/image/Bebe/christian-bowen-uFCkcE6GI40-unsplash.jpg';
import image8 from '../../../assets/image/Bebe/colin-maynard-CEEhmAGpYzE-unsplash.jpg';
import image9 from '../../../assets/image/Bebe/hu-chen-6yi0oPZSNy4-unsplash.jpg';
import image10 from '../../../assets/image/Bebe/janko-ferlic-qJVluHTPx7U-unsplash.jpg';
import image11 from '../../../assets/image/Bebe/jonathan-borba-CgWTqYxHEkg-unsplash.jpg';
import image12 from '../../../assets/image/Bebe/kevin-gent-mVk7pnnlULc-unsplash.jpg';
import image13 from '../../../assets/image/Couple/allef-vinicius-0dXvugMScIY-unsplash.jpg';
import image14 from '../../../assets/image/Couple/candice-picard-vLENm-coX5Y-unsplash.jpg';
import image15 from '../../../assets/image/Couple/carly-rae-hobbins-zNHOIzjJiyA-unsplash.jpg';
import image16 from '../../../assets/image/Couple/kenny-eliason-n2VvngfbXtU-unsplash.jpg';
import image17 from '../../../assets/image/Couple/nathan-dumlao-w5hhoYM_JsU-unsplash.jpg';
import image18 from '../../../assets/image/Couple/scott-broome-BcVvVvqiCGA-unsplash.jpg';
import image19 from '../../../assets/image/Couple/zarina-iskarova-kJ96EKUjD9Q-unsplash.jpg';
import image20 from '../../../assets/image/Famille/ioann-mark-kuznietsov-9QTQFihyles-unsplash.jpg';
import image21 from '../../../assets/image/Famille/josue-michel-OMl0o6TSQXU-unsplash.jpg';
import image22 from '../../../assets/image/Famille/luemen-rutkowski-ZWbBxZ6zTwM-unsplash.jpg';
import image23 from '../../../assets/image/Famille/nathan-dumlao-Wr3comVZJxU-unsplash.jpg';
import image24 from '../../../assets/image/Famille/patricia-prudente-6UyWK8mDcWo-unsplash.jpg';
import image25 from '../../../assets/image/Grossesse/camylla-battani-son4VHt4Ld0-unsplash.jpg';
import image26 from '../../../assets/image/Grossesse/freestocks-AOod3VqkEfQ-unsplash.jpg';
import image27 from '../../../assets/image/Grossesse/jonathan-borba-5Goau2kMWXQ-unsplash.jpg';
import image28 from '../../../assets/image/Grossesse/jonathan-borba-5IAXvfbhTik-unsplash.jpg';
import image29 from '../../../assets/image/Grossesse/jonathan-borba-GGE642PaQtA-unsplash.jpg';
import image30 from '../../../assets/image/Grossesse/natalie-chaney-XReCuboiTcw-unsplash.jpg';
import image31 from '../../../assets/image/Grossesse/neal-e-johnson-iLNKpdI0Pzg-unsplash.jpg';
import image32 from '../../../assets/image/Grossesse/vanessa-7VqCnFPH1XY-unsplash.jpg';
import image33 from '../../../assets/image/Mariage/al-elmes-ULHxWq8reao-unsplash.jpg';
import image34 from '../../../assets/image/Mariage/drew-coffman-llWjwo200fo-unsplash.jpg';
import image35 from '../../../assets/image/Mariage/elvis-bekmanis-WJc87MVcDaA-unsplash.jpg';
import image36 from '../../../assets/image/Mariage/eugenivy_now-1Bs2sZ9fD2Q-unsplash.jpg';
import image37 from '../../../assets/image/Mariage/fabio-alves-BpeTaQozgN4-unsplash.jpg';
import image38 from '../../../assets/image/Mariage/jeongim-kwon-sqWzP97H_bo-unsplash.jpg';
import image39 from '../../../assets/image/Mariage/leonardo-miranda-dvF6s1H1x68-unsplash.jpg';
import image40 from '../../../assets/image/Mariage/nikita-shirokov-qGgjalogCdE-unsplash.jpg';
import image41 from '../../../assets/image/Mariage/tom-the-photographer-8yPA6ZYq0-s-unsplash.jpg';
import image42 from '../../../assets/image/Mariage/ulyana-tim-AbnCRgL2DNs-unsplash.jpg';
import image43 from '../../../assets/image/Mariage/vadim-paripa-PuXtB1B4zL8-unsplash.jpg';
import image44 from '../../../assets/image/Portrait/aiony-haust-3TLl_97HNJo-unsplash.jpg';
import image45 from '../../../assets/image/Portrait/albert-dera-ILip77SbmOE-unsplash.jpg';
import image46 from '../../../assets/image/Portrait/ali-morshedlou-WMD64tMfc4k-unsplash.jpg';
import image47 from '../../../assets/image/Portrait/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg';
import image48 from '../../../assets/image/Portrait/christopher-campbell-rDEOVtE7vOs-unsplash.jpg';
import image49 from '../../../assets/image/Portrait/edward-cisneros-_H6wpor9mjs-unsplash.jpg';
import image50 from '../../../assets/image/Portrait/jimmy-fermin-bqe0J0b26RQ-unsplash.jpg';
import image51 from '../../../assets/image/Portrait/michael-dam-mEZ3PoFGs_k-unsplash.jpg';
import image52 from '../../../assets/image/Portrait/stephanie-liverani-Zz5LQe-VSMY-unsplash.jpg';
import './_photoGallery.scss';

const PhotoGallery = () => {
  const photos = [
    {
      id: 1,
      category: 'Bapteme',
      imageUrl: image1,
    },
    {
      id: 2,
      category: 'Bapteme',
      imageUrl: image2,
    },
    {
      id: 3,
      category: 'Bapteme',
      imageUrl: image3,
    },
    {
      id: 4,
      category: 'Bapteme',
      imageUrl: image4,
    },
    {
      id: 5,
      category: 'Bebe',
      imageUrl: image5,
    },
    {
      id: 6,
      category: 'Bebe',
      imageUrl: image6,
    },
    {
      id: 7,
      category: 'Bebe',
      imageUrl: image7,
    },
    {
      id: 8,
      category: 'Bebe',
      imageUrl: image8,
    },
    {
      id: 9,
      category: 'Bebe',
      imageUrl: image9,
    },
    {
      id: 10,
      category: 'Bebe',
      imageUrl: image10,
    },
    {
      id: 11,
      category: 'Bebe',
      imageUrl: image11,
    },
    {
      id: 12,
      category: 'Bebe',
      imageUrl: image12,
    },
    {
      id: 13,
      category: 'Couple',
      imageUrl: image13,
    },
    {
      id: 14,
      category: 'Couple',
      imageUrl: image14,
    },
    {
      id: 15,
      category: 'Couple',
      imageUrl: image15,
    },
    {
      id: 16,
      category: 'Couple',
      imageUrl: image16,
    },
    {
      id: 17,
      category: 'Couple',
      imageUrl: image17,
    },
    {
      id: 18,
      category: 'Couple',
      imageUrl: image18,
    },
    {
      id: 19,
      category: 'Couple',
      imageUrl: image19,
    },
    {
      id: 20,
      category: 'Famille',
      imageUrl: image20,
    },
    {
      id: 21,
      category: 'Famille',
      imageUrl: image21,
    },
    {
      id: 22,
      category: 'Famille',
      imageUrl: image22,
    },
    {
      id: 23,
      category: 'Famille',
      imageUrl: image23,
    },
    {
      id: 24,
      category: 'Famille',
      imageUrl: image24,
    },
    {
      id: 25,
      category: 'Grossesse',
      imageUrl: image25,
    },
    {
      id: 26,
      category: 'Grossesse',
      imageUrl: image26,
    },
    {
      id: 27,
      category: 'Grossesse',
      imageUrl: image27,
    },
    {
      id: 28,
      category: 'Grossesse',
      imageUrl: image28,
    },
    {
      id: 29,
      category: 'Grossesse',
      imageUrl: image29,
    },
    {
      id: 30,
      category: 'Grossesse',
      imageUrl: image30,
    },
    {
      id: 31,
      category: 'Grossesse',
      imageUrl: image31,
    },
    {
      id: 32,
      category: 'Grossesse',
      imageUrl: image32,
    },
    {
      id: 33,
      category: 'Mariage',
      imageUrl: image33,
    },
    {
      id: 34,
      category: 'Mariage',
      imageUrl: image34,
    },
    {
      id: 35,
      category: 'Mariage',
      imageUrl: image35,
    },
    {
      id: 36,
      category: 'Mariage',
      imageUrl: image36,
    },
    {
      id: 37,
      category: 'Mariage',
      imageUrl: image37,
    },
    {
      id: 38,
      category: 'Mariage',
      imageUrl: image38,
    },
    {
      id: 39,
      category: 'Mariage',
      imageUrl: image39,
    },
    {
      id: 40,
      category: 'Mariage',
      imageUrl: image40,
    },
    {
      id: 41,
      category: 'Mariage',
      imageUrl: image41,
    },
    {
      id: 42,
      category: 'Mariage',
      imageUrl: image42,
    },
    {
      id: 43,
      category: 'Mariage',
      imageUrl: image43,
    },
    {
      id: 44,
      category: 'Portrait',
      imageUrl: image44,
    },
    {
      id: 45,
      category: 'Portrait',
      imageUrl: image45,
    },
    {
      id: 46,
      category: 'Portrait',
      imageUrl: image46,
    },
    {
      id: 47,
      category: 'Portrait',
      imageUrl: image47,
    },
    {
      id: 48,
      category: 'Portrait',
      imageUrl: image48,
    },
    {
      id: 49,
      category: 'Portrait',
      imageUrl: image49,
    },
    {
      id: 50,
      category: 'Portrait',
      imageUrl: image50,
    },
    {
      id: 51,
      category: 'Portrait',
      imageUrl: image51,
    },
    {
      id: 52,
      category: 'Portrait',
      imageUrl: image52,
    },


  ];

  const [selectedCategory, setSelectedCategory] = useState('');

  const filterPhotos = (category) => {
    setSelectedCategory(category);
  };

  const filteredPhotos = selectedCategory
    ? photos.filter((photo) => photo.category === selectedCategory)
    : photos;

  // Mélanger le tableau filteredPhotos
  const shuffledPhotos = filteredPhotos.sort(() => Math.random() - 0.5);

  // Définir le nombre de photos à afficher dans chaque colonne
  const photosPerColumn = Math.ceil(filteredPhotos.length / 3);

  // Diviser le tableau mélangé en sous-tableaux
  const columns = [];
  for (let i = 0; i < shuffledPhotos.length; i += photosPerColumn) {
    const column = shuffledPhotos.slice(i, i + photosPerColumn);
    columns.push(column);
  }

  return (
    <div className="photo-gallery">
      <div className="category-buttons">
      <button onClick={() => filterPhotos('')} className={`btn-tri ${selectedCategory === '' ? 'active' : ''}`}>Tous</button>
        <button onClick={() => filterPhotos('Bapteme')} className={`btn-tri ${selectedCategory === 'Bapteme' ? 'active' : ''}`}>Baptême</button>
        <button onClick={() => filterPhotos('Bebe')} className={`btn-tri ${selectedCategory === 'Bebe' ? 'active' : ''}`}>Bébé</button>
        <button onClick={() => filterPhotos('Couple')} className={`btn-tri ${selectedCategory === 'Couple' ? 'active' : ''}`}>Couple</button>
        <button onClick={() => filterPhotos('Famille')} className={`btn-tri ${selectedCategory === 'Famille' ? 'active' : ''}`}>Famille</button>
        <button onClick={() => filterPhotos('Grossesse')} className={`btn-tri ${selectedCategory === 'Grossesse' ? 'active' : ''}`}>Grossesse</button>
        <button onClick={() => filterPhotos('Mariage')} className={`btn-tri ${selectedCategory === 'Mariage' ? 'active' : ''}`}>Mariage</button>
        <button onClick={() => filterPhotos('Portrait')} className={`btn-tri ${selectedCategory === 'Portrait' ? 'active' : ''}`}>Portrait</button>
      </div>
      <div className="photo-grid">
        {columns.map((column, columnIndex) => (
          <div className="column" key={columnIndex}>
            {column.map((photo) => (
              <Photo key={photo.id} imageUrl={photo.imageUrl} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
  
