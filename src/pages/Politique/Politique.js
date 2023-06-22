import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';

const Politique = () => {
  return (
    <div>
      <Navigation />
      <div className="politique-container">
        <h2 className='title-h2'>Politique de confidentialité</h2>
        <p>La confidentialité de nos visiteurs est extrêmement importante pour nous. Cette politique de confidentialité décrit les types d'informations personnelles collectées et enregistrées par notre site Web et la manière dont nous les utilisons.</p>
        
        <h3 className='title-h3'>1. Collecte de l'information</h3>
        <p>Nous collectons des informations lorsque vous vous inscrivez sur notre site, lorsque vous vous connectez à votre compte, faites un achat, participez à un concours, et/ou lorsque vous vous déconnectez. Les informations collectées incluent votre nom, votre adresse e-mail, votre numéro de téléphone, et/ou votre carte de crédit.</p>
        
        <h3 className='title-h3'>2. Utilisation des informations</h3>
        <p>Les informations que nous collectons auprès de vous peuvent être utilisées pour :</p>
        <ul>
          <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
          <li>Fournir un contenu publicitaire personnalisé</li>
          <li>Améliorer notre site Web</li>
          <li>Améliorer le service client et vos besoins de support</li>
          <li>Vous contacter par e-mail</li>
          <li>Administrer un concours, une promotion, ou un sondage</li>
        </ul>
        
        <h3 className='title-h3'>3. Protection des informations</h3>
        <p>Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons des protocoles de sécurité standard pour protéger les informations sensibles transmises en ligne.</p>
        
        <h3 className='title-h3'>4. Divulgation à des tiers</h3>
        <p>Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tiers de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.</p>
        
        <h3 className='title-h3'>5. Consentement</h3>
        <p>En utilisant notre site Web, vous consentez à notre politique de confidentialité et acceptez ses modalités.</p>
        
        <h3 className='title-h3'>6. Modification de la politique de confidentialité</h3>
        <p>Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. Nous vous encourageons à consulter cette page régulièrement pour prendre connaissance des éventuelles modifications.</p>
      </div>
      <ScrollToTopButton/>
    </div>
  );
};

export default Politique;
