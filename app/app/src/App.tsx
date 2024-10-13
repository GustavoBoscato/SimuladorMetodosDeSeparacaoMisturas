import React from 'react';
import logo from './logo.svg';
import Componentes from './Components/Componentes';
import './App.css';

function App() {

  type NumberOrNull = number | null;
    type StringOrNull = string | null;
    type BooleanOrNull = boolean | null;
    type EstadoFisico = 'L' | 'S';
    

    class ComponenteMistura {
        densidade;
        pontoDeEbulicao;
        tamanho;
        estadoFisico;
        soluvelEmAgua;
        magnetismo;

        constructor(densidade : number, pontoDeEbulicao : NumberOrNull, estadoFisico :
            EstadoFisico, soluvelEmAgua : boolean, tamanho : NumberOrNull,
            magnetismo : boolean){

            this.densidade = densidade

            this.pontoDeEbulicao = pontoDeEbulicao;

            this.tamanho = tamanho;

            this.estadoFisico = estadoFisico;

            this.soluvelEmAgua = soluvelEmAgua;

            this.magnetismo = magnetismo;

        }

    }
         const agua  = new ComponenteMistura(997, 100, 'L', true, null, false);
         const etanol = new ComponenteMistura(789, 78.37, 'L', true, null, false);
         const oleoCozinha = new ComponenteMistura(800, 200, 'L', false, null, false);
         const gasolina = new ComponenteMistura(715, 215, 'L', false, null, false);
         const salCozinha = new ComponenteMistura(2162, null, 'S', true, 10, false);
         const acucar = new ComponenteMistura(900, null, 'S', true, 15, false);
         const areia = new ComponenteMistura(1600, null, 'S', false, 20, false);
         const brita = new ComponenteMistura(1450, null, 'S', false, 50, false);
         const ferro = new ComponenteMistura(7850, null, 'S', false, 30, true);
  return (
    <div className="App">
      <p><Componentes></Componentes></p>
      <p>{agua.estadoFisico}</p>
    </div>
  );
}

export default App;
