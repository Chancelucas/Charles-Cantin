import React from 'react';
import Navigation from '../../components/Navigation/Navigation';

const Mentions = () => {
  return (
    <div>
      <Navigation />
      <div className="mentions-container">
        <h2 className='title-h2'>Mentions légales</h2>
        <h3 className='title-h3'>1. Informations générales</h3>
        <p>Raison sociale : CHARLES CANTIN</p>
        <p>Siège social : ON NE SAIS PAS VRAIMENT OU</p>
        <p>Téléphone : +33 6 22 22 22 22</p>
        <p>Email : charles.cantin[at]gmail.com</p>
        <p>Directeur de publication : Moi</p>
        
        <h3 className='title-h3'>2. Propriété intellectuelle</h3>
        <p>Le contenu du site, incluant les textes, images, vidéos, logos, et autres éléments, est la propriété exclusive de CHARLES CANTIN ou de ses partenaires. Toute reproduction, distribution, modification, ou utilisation non autorisée est strictement interdite.</p>
        
        <h3 className='title-h3'>3. Collecte et utilisation des données</h3>
        <p>Les données personnelles collectées sur ce site sont utilisées dans le cadre de la gestion des demandes de contact, l'envoi de newsletters, etc. Ces données ne seront pas partagées avec des tiers sans votre consentement préalable.</p>
        
        <h3 className='title-h3'>4. Cookies</h3>
        <p>Ce site utilise des cookies pour améliorer votre expérience utilisateur. En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies.</p>
        
        <h3 className='title-h3'>5. Responsabilité</h3>
        <p>CHARLES CANTIN s'efforce de fournir des informations précises et à jour sur ce site, mais ne peut garantir l'exactitude et l'exhaustivité de ces informations. CHARLES CANTIN décline toute responsabilité quant à l'utilisation ou l'interprétation des informations fournies sur ce site.</p>
        
        <h3 className='title-h3'>6. Liens externes</h3>
        <p>Ce site peut contenir des liens vers des sites externes. CHARLES CANTIN n'est pas responsable du contenu ou des pratiques de confidentialité de ces sites.</p>
        
        <h3 className='title-h3'>7. Modification des mentions légales</h3>
        <p>CHARLES CANTIN se réserve le droit de modifier les présentes mentions légales à tout moment. Nous vous encourageons à consulter cette page régulièrement pour prendre connaissance des éventuelles modifications.</p>
      </div>
    </div>
  );
};

export default Mentions;
