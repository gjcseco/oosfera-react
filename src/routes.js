// src/routes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Edicao from './pages/Edicao';
import Workshops from './pages/Workshops';
import EdicoesAnteriores from './pages/EdicoesAnteriores';
import Regiao from './pages/Regiao';
import Organizacao from './pages/Organizacao';
import Contactos from './pages/Contactos';
import NotFound from './pages/NotFound';

const RoutesComponent = () => {
  return (
    <Routes>
         <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/edicao" element={<Edicao />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/edicoes-anteriores" element={<EdicoesAnteriores />} />
      <Route path="/regiao" element={<Regiao />} />
      <Route path="/organizacao" element={<Organizacao />} />
      <Route path="/contactos" element={<Contactos />} />

      {/* Rota para "Not Found" */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
