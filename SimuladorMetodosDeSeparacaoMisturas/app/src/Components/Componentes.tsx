import React from 'react'

type Props = {}

const Componentes = () => {
    type NumberOrNull = number | null;
    type StringOrNull = string | null;
    type BooleanOrNull = boolean | null;
    type EstadoFisico = 'L' | 'S';
    

    class Component {
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
         const agua  = new Component(1000, 100, 'S', true, null, false);
  return (
    <div>
        <p>{agua.densidade}</p>
    </div>
  )
}

export default Componentes
