import React, { Component } from 'react';
import logo from './logo.svg';
import { Mistura } from './data/Mistura';
import {acucar, agua, areia, brita, etanol, ferro, gasolina, oleoCozinha, salCozinha } from './data/dataComponentes';
import { listaComponentes } from './data/dataComponentes';
import './App.css';
import Home from './pages/Home';

function App() {
  
  const mistureba = new Mistura([ferro, brita, areia]);
  const mistureba2 = new Mistura([oleoCozinha, gasolina, acucar]);
  const mistureba3 = new Mistura([agua, salCozinha]);
  const mistureba4 = new Mistura([agua, oleoCozinha, areia]);
  const mistureba5 = new Mistura([ferro, areia, acucar, salCozinha]);
         
  return (
    <div className="App">
      <Home misturaInicial={mistureba5} />
    </div>
  );
}
export default App;