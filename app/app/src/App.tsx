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
        nome;
        densidade;
        pontoDeEbulicao;
        tamanho;
        estadoFisico;
        soluvelEmAgua;
        magnetismo;

        constructor(nome: string ,densidade : number, pontoDeEbulicao : NumberOrNull, estadoFisico :
            EstadoFisico, soluvelEmAgua : boolean, tamanho : NumberOrNull,
            magnetismo : boolean){
            this.nome = nome;

            this.densidade = densidade

            this.pontoDeEbulicao = pontoDeEbulicao;

            this.tamanho = tamanho;

            this.estadoFisico = estadoFisico;

            this.soluvelEmAgua = soluvelEmAgua;

            this.magnetismo = magnetismo;

        }
      
        }
    
        class mistura {
          mistura;
          classificacao : string = ''

          get getMistura(){
            return this.mistura;
          }

          set setMistura(mistura : Array<object>){
            this.mistura = mistura
          }

          adicionarComponenteMistura(mistura : object){
            let i = 0;
            this.mistura.forEach((value)=>{
              if (value == mistura) {
                i++
              }
              
            })
            //Impede de adicionar um componente que já esteja presente na mistura.
            if (i == 0) {
              this.mistura.push(mistura);  
            }
            
          }

          constructor(mistura : Array<object>){
            this.mistura = mistura
          }
        }
      

         const agua  = new ComponenteMistura("Água", 997, 100, 'L', true, null, false);
         const etanol = new ComponenteMistura("Etanol",789, 78.37, 'L', true, null, false);
         const oleoCozinha = new ComponenteMistura("Óleo de Cozinha", 800, 200, 'L', false, null, false);
         const gasolina = new ComponenteMistura("Gasolina", 715, 215, 'L', false, null, false);
         const salCozinha = new ComponenteMistura("Sal de Cozinha",2162, null, 'S', true, 10, false);
         const acucar = new ComponenteMistura("Açúcar", 900, null, 'S', true, 15, false);
         const areia = new ComponenteMistura("Areia",1600, null, 'S', false, 20, false);
         const brita = new ComponenteMistura("Brita", 1450, null, 'S', false, 50, false);
         const ferro = new ComponenteMistura("Ferro", 7850, null, 'S', false, 30, true);
         const mistureba = new mistura([agua, etanol, oleoCozinha]);
         mistureba.adicionarComponenteMistura(areia);
         console.log(mistureba);
         
  return (
    <div className="App">
      <p><Componentes></Componentes></p>
      <p>{}</p>
    </div>
  );
}
export default App;
