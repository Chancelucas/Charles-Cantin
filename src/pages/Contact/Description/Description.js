import React from 'react';
import Image from '../../../assets/image/Accueil/presentation.jpg';


const Description = () => {
  return (
    <div className="display-container">
      <div className="presentation-container-all">
        <h2 className="title-presentation">Qui suis-je ?</h2>
        <div className="container-text-presentation">
          <p className="text-presentation">Depuis mon plus jeune âge, la photographie a été ma passion la plus profonde et la plus inspirante. Le simple fait de capturer des moments figés dans le cadre de mon objectif a toujours nourri mon imagination et éveillé ma créativité. Chaque cliché est pour moi une occasion de raconter une histoire unique, d'immortaliser des émotions et de capturer la beauté éphémère qui nous entoure.<br /> <br />
            Aujourd'hui, je me lance avec enthousiasme dans l'aventure de la photographie en tant que freelance. C'est le moment où je peux pleinement exprimer ma vision artistique, partager ma passion et créer des images qui touchent les cœurs et les esprits. Je souhaite capturer les instants précieux de la vie, les sourires sincères, les regards complices, les éclats de rire et les larmes de joie.<br /> <br />
            Chaque projet est pour moi une nouvelle opportunité de saisir l'essence même de mes sujets. Que ce soit lors de mariages, de baptêmes, de séances en famille ou de portraits individuels, je m'engage à créer des images authentiques et intemporelles. Je m'efforce de comprendre les désirs et les attentes de mes clients afin de les accompagner dans la réalisation de leur vision.<br /> <br />
            Ma démarche artistique est guidée par une recherche constante de perfection, de composition harmonieuse, de jeu de lumière et d'émotion captivante. Chaque cliché est soigneusement retouché et mis en valeur, pour offrir des souvenirs qui durent éternellement.<br />
            Je suis ravi de partager ma passion avec vous et de collaborer pour créer des images qui racontent votre histoire. Ensemble, nous allons capturer les moments précieux de votre vie et les transformer en souvenirs inoubliables.
          </p>
          <img src={Image} alt="Photo de présentation" className="image-presentation" />
        </div>
      </div>
    </div>

  );
};

export default Description;