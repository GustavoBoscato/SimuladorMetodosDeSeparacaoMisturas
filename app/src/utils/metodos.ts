import { ComponenteMistura } from "../data/ComponenteMistura";
import { acucar, agua, areia, brita, etanol, ferro, gasolina, oleoCozinha, salCozinha } from "../data/dataComponentes";
import { Mistura } from "../data/Mistura";


export type metodoSeparacao = 'centrifugação' | 'decantação' | 'decantação com funil de bromo' | 'filtração' 
| 'peneiração' | 'separação magnética' | 'dissolução fracionada' | 'destilação simples' | 'destilação fracionada';
export default function separarMistura(metodo: metodoSeparacao, mistura : Mistura) : Array<Mistura> | null | ComponenteMistura | undefined | string{
  switch (metodo) {
    /*
      Explicar em qual situação o método é realizado, e qual o valor que retornará para todos os métodos.
    */
    case 'decantação':
      //Condicionando o uso da decantação para as misturas heterogênea e S/L.

      if (mistura.tipo == 'S/L' && mistura.classificacao == 'Heterogenea') {
        let menorDensidade : number = mistura.itens[0].densidade;
        let elementoMenorDensidade : ComponenteMistura = mistura.itens[0];        
        
        mistura.itens.forEach(value => {
          if (value.densidade < menorDensidade) {
            menorDensidade = value.densidade;
            elementoMenorDensidade = value;
          }
          
      })
      mistura.itens.forEach((value, i) =>{
        
        if (value == elementoMenorDensidade) {
            mistura.itens.splice(i, 1);
          
        }
      })
      let misturaSeparada = new Mistura([elementoMenorDensidade]);

      misturaSeparada.calcularTipo();
      misturaSeparada.calcularClassificacao();
      mistura.calcularTipo()
      mistura.calcularClassificacao();
        
      return [mistura, misturaSeparada];
       
    } else return `A decantação apenas pode ser utilizada em misturas Heterogêneas S/L, essa mistura é ${mistura.classificacao} ${mistura.tipo}`
  break;
  case 'decantação com funil de bromo':

    if (mistura.tipo === 'L/L' && mistura.classificacao === 'Heterogenea') {
      let maiorDensidade : number = mistura.itens[0].densidade;
        let elementoMaiorDensidade : ComponenteMistura = mistura.itens[0];        
        
        mistura.itens.forEach(value => {
          if (value.densidade < maiorDensidade) {
            maiorDensidade = value.densidade;
            elementoMaiorDensidade = value;
          }
          
      })
      mistura.itens.forEach((value, i) =>{
        
        if (value == elementoMaiorDensidade) {
            mistura.itens.splice(i, 1);
          
        }
      })
      let misturaSeparada = new Mistura([elementoMaiorDensidade]);

      misturaSeparada.calcularTipo();
      misturaSeparada.calcularClassificacao();
      mistura.calcularTipo()
      mistura.calcularClassificacao();
        
      return [mistura, misturaSeparada];
    } else return `A decantação com funil de bromo apenas pode ser utilizada em misturas Heterogêneas L/L, essa mistura é ${mistura.classificacao} ${mistura.tipo}`
  break;
  case 'centrifugação':

    if (mistura.tipo == 'S/L' && mistura.classificacao == 'Heterogenea') {
      let menorDensidade : number = mistura.itens[0].densidade;
      let elementoMenorDensidade : ComponenteMistura = mistura.itens[0];        
      
      mistura.itens.forEach(value => {
        if (value.densidade < menorDensidade) {
          menorDensidade = value.densidade;
          elementoMenorDensidade = value;
        }
        
    })
    mistura.itens.forEach((value, i) =>{
      
      if (value == elementoMenorDensidade) {
          mistura.itens.splice(i, 1);
        
      }
    })
    let misturaSeparada = new Mistura([elementoMenorDensidade]);

    misturaSeparada.calcularTipo();
    misturaSeparada.calcularClassificacao();
    mistura.calcularTipo()
    mistura.calcularClassificacao();
      
    return [mistura, misturaSeparada];
     
  } else return `A centrifugação apenas pode ser utilizada em misturas Heterogêneas S/L, essa mistura é ${mistura.classificacao} ${mistura.tipo}`
  case 'destilação simples':
    if (mistura.tipo === 'S/L' && mistura.classificacao === 'Homogenea') {

      let menorTemperaturaEbulicao : number = mistura.itens[0].pontoDeEbulicao;
      let elementoMenorTemperaturaEbulicao : ComponenteMistura = mistura.itens[0];
      
      mistura.itens.forEach((value) => {
        if (value.pontoDeEbulicao < menorTemperaturaEbulicao) {
          menorTemperaturaEbulicao = value.pontoDeEbulicao;
          elementoMenorTemperaturaEbulicao = value;
        }

      })
      mistura.itens.forEach((value, i) => {
        if (value === elementoMenorTemperaturaEbulicao) {
          mistura.itens.splice(i, 1);
        }
      })
      let misturaSeparada = new Mistura([elementoMenorTemperaturaEbulicao])
      return [mistura, misturaSeparada];
    } else return `A destilação simples apenas pode ser utilizada em misturas Homogêneas S/L, essa mistura é ${mistura.classificacao} ${mistura.tipo}`
    break;
}

}





