import React from 'react';
import logo from './logo.svg';
import { Mistura } from './data/Mistura';
import {acucar, agua, areia, brita, etanol, ferro, gasolina, oleoCozinha, salCozinha} from './data/dataComponentes';
import metodos from './utils/metodos';
import { listaComponentes } from './data/dataComponentes';

import Componentes from './Components/Componentes';
import './App.css';
import separarMistura from './utils/metodos';

function App() {
  
  const mistureba = new Mistura([ferro, brita, areia]);
  const mistureba2 = new Mistura([oleoCozinha, gasolina, brita]);
  const mistureba3 = new Mistura([agua, etanol, oleoCozinha, gasolina, brita, acucar, salCozinha]);
  mistureba2.calcularTipo()
  mistureba2.calcularClassificacao();
  mistureba.calcularTipo()
  mistureba.calcularClassificacao();
  mistureba3.calcularTipo()
  mistureba3.calcularClassificacao();

  console.log(separarMistura('filtração', mistureba2));
  console.log(separarMistura('filtração', mistureba));
  console.log(separarMistura('filtração', mistureba3))
         
  return (
    <div className="App">
      <p>Componentes cadastrados</p>
    </div>
  );
}
export default App;