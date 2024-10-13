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

        constructor(densidade : number, pontoDeEbulicao : number, estadoFisico :
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
         const agua  = new ComponenteMistura(1000, 100, 'S', true, null, false);
  return (
    <div className="App">
      <p><Componentes></Componentes></p>
      <p>{agua.estadoFisico}</p>
    </div>
  );
}

export default App;
