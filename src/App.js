import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './pages/Accueil';
import Galerie from './pages/Galerie';
import Tarifs from './pages/Tarifs';
import Contact from './pages/Contact';

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
