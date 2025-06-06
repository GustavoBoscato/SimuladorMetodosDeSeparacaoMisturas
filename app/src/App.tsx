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
import Modos from './pages/Home/Modos';
import LaboratorioOpção from './pages/Home/LaboratorioOpção';
import MisturasCadastradas from './pages/Home/MisturasCadastradas'
import ModoFacil from './pages/Home/ModoFacil';
import { listaMisturasModoFacil } from './data/dataMisturas';
import { useState, useEffect } from 'react';
import Laboratorio from './pages/Home/Laboratorio';

function App() {
  
  const mistura1 = new Mistura([agua, etanol]);
  const mistura2 = new Mistura([agua, oleoCozinha]);
  const mistura3 = new Mistura([agua, salCozinha]);
  const mistura4 = new Mistura([agua, etanol, salCozinha]);
  const mistura5 = new Mistura([areia, ferro, brita]);
  const mistura6 = new Mistura([agua, oleoCozinha, etanol]);
  const mistura7 = new Mistura([areia, salCozinha]);

  //Modo Fácil
  const [MisturaFacil, setMisturaFacil]  = useState<Mistura>(mistura1);
   
  const [MisturaDificil, setMisturaDificil]  = useState<Mistura>(mistura1);
  MisturaDificil.calcularTipo();
  MisturaDificil.calcularClassificacao();
  MisturaFacil.calcularTipo();
  MisturaFacil.calcularClassificacao();
  useEffect(() => {
  }, [MisturaDificil]);

  const selecionarMisturaModoFacil = (x : number) : void =>{
      setMisturaFacil(listaMisturasModoFacil[x])
      console.log(listaMisturasModoFacil[x])
  }
  const listaMisturas = [mistura1, mistura2, mistura3, mistura4, mistura5, mistura6, mistura7];         
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={< Iniciar/>} />
        <Route path="/laboratorio" element={< Laboratorio misturaDificil={MisturaDificil} setMisturaDificil={setMisturaDificil}/>} />
        <Route path="/listaComponente" element={<ListaComponente/>} />
        <Route path="/listaComponente" element={<Modos titulo='Modo Fácil' titulo2='Modo Difícil' texto='Iniciantes' texto2='Peritos'/>} />
        
        <Route path="/simular" element={<Modos titulo='Modo Fácil' texto='Utilize 
        das misturas cadastradas no sistema para realizar experimentos. Este modo
         prioriza a objetividade. Recomendado para iniciantes' 
         titulo2='Modo Livre' texto2='Crie sua própria mistura, 
         adicione componentes e faça experimentos! Este modo possui todas as ferramentas liberadas.'/>} />
        <Route path="/modoFacil" element={< MisturasCadastradas selecionarMisturaModoFacil={selecionarMisturaModoFacil}/>} />
        <Route path="/laboratorioModoFacil" element={<ModoFacil setMisturaFacil={setMisturaFacil} MisturaFacil={MisturaFacil}/>} />
      </Routes>
      
    </BrowserRouter>
      
    </div>
    </div>
  );
}
export default App;