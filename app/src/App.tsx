import React, { Component } from 'react';
import logo from './logo.svg';
import { Mistura } from './data/Mistura';
import {acucar, agua, areia, brita, etanol, ferro, gasolina, oleoCozinha, salCozinha } from './data/dataComponentes';
import { listaComponentes } from './data/dataComponentes';
import './App.css';
import Home from './pages/Home';
import Navbar from './Components/Principal/Navbar';
import TelaInicial from './Components/Principal/TelaInicial';
import SelectComponente from './Components/Principal/SelectComponente';
import { Link, Route, BrowserRouter, Routes} from 'react-router-dom';
import Simular from './pages/Home/Simular';
import ListaComponente from './pages/Home/ListaComponente';
import Iniciar from './pages/Home/Iniciar';
import Modos from './Components/Principal/Modos';
import LaboratorioOpção from './Components/Principal/LaboratorioOpção';
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
      <div className="App">
        <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={< Iniciar/>} />
        <Route path="/simular" element={< Simular/>} />
        <Route path="/listaComponente" element={<ListaComponente/>} />
        <Route path="/listaComponente" element={<Modos titulo='Modo Fácil' titulo2='Modo Difícil' texto='Iniciantes' texto2='Peritos'/>} />
        <Route path="/laboratorioOpcao" element={<LaboratorioOpção/>} />
      </Routes>
      
    </BrowserRouter>
      
    </div>
    </div>
  );
}
export default App;