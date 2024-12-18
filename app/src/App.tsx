import React, { Component } from 'react';
import logo from './logo.svg';
import { Mistura } from './data/Mistura';
import {acucar, agua, areia, brita, etanol, ferro, gasolina, oleoCozinha, salCozinha } from './data/dataComponentes';
import { listaComponentes } from './data/dataComponentes';
import './App.css';
import Home from './pages/Home';

function App() {
  
  const mistura1 = new Mistura([agua, areia]);
  const mistura2 = new Mistura([agua, oleoCozinha]);
  const mistura3 = new Mistura([agua, salCozinha]);
  const mistura4 = new Mistura([agua, etanol, salCozinha]);
  const mistura5 = new Mistura([areia, ferro, brita]);
  const mistura6 = new Mistura([agua, oleoCozinha, etanol]);
  const mistura7 = new Mistura([areia, salCozinha]);

  const listaMisturas = [mistura1, mistura2, mistura3, mistura4, mistura5, mistura6, mistura7];         
  return (
    <div className="App">
      <Home opcoesMisturas={listaMisturas} />
    </div>
  );
}
export default App;