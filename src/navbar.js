// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="App-nav">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        Homepage
      </Link>
      <Link to="/sobre" className={location.pathname === '/sobre' ? 'active' : ''}>
        Sobre
      </Link>
      <Link to="/edicao" className={location.pathname === '/edicao' ? 'active' : ''}>
        6º Edição - 2023
      </Link>
      {/* Adicione classes 'active' aos outros links conforme necessário */}
      <Link to="/workshops" className={location.pathname === '/workshops' ? 'active' : ''}>
        Workshops
      </Link>
      <Link to="/edicoes-anteriores" className={location.pathname === '/edicoes-anteriores' ? 'active' : ''}>
        Edições Anteriores
      </Link>
      <Link to="/regiao" className={location.pathname === '/regiao' ? 'active' : ''}>
        A Região
      </Link>
      <Link to="/organizacao" className={location.pathname === '/organizacao' ? 'active' : ''}>
        Organização
      </Link>
      <Link to="/contactos" className={location.pathname === '/contactos' ? 'active' : ''}>
        Contactos
      </Link>
    </nav>
  );
};

export default Navbar;
