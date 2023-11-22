// // src/App.js
// import React from 'react';
// import Navbar from './navbar';
// import RoutesComponent from './routes';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <RoutesComponent />
//     </div>
//   );
// }

// export default App;



// src/App.js
import React from 'react';
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';
import Sobre from './pages/Sobre';
import Edicao from './pages/Edicao';
import Workshops from './pages/Workshops';
import EdicoesAnteriores from './pages/EdicoesAnteriores';
import Regiao from './pages/Regiao';
import Organizacao from './pages/Organizacao';
import Contactos from './pages/Contactos';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/edicao" element={<Edicao />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/edicoes-anteriores" element={<EdicoesAnteriores />} />
        <Route path="/regiao" element={<Regiao />} />
        <Route path="/organizacao" element={<Organizacao />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </Layout>
  );
}

export default App;
