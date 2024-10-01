import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import PaginaPrincipal from './Pages/PaginaPrincipal';
import VistaProducto from './Pages/VistaProducto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />}/>
          <Route path="/Producto" element={<VistaProducto />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
