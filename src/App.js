import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './pages/Accueil/Accueil';
import Galerie from './pages/Galerie/Galerie';
import Tarifs from './pages/Tarifs/Tarifs';
import Contact from './pages/Contact/Contact';
import Politique from './pages/Politique/Politique';
import Mentions from './pages/Mentions/Mentions';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='Galerie' element={<Galerie />} />
        <Route path='Tarifs' element={<Tarifs />} />
        <Route path='Contact' element={<Contact />} />
        {/* path='*' renvoie sur la page Home si je le chemin êtes inconnu */}
        <Route path='*' element={<Accueil />} />
        <Route path='Mentions' element={<Mentions />} />
        <Route path='Politique' element={<Politique />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
