import { ComponenteMistura } from "../data/ComponenteMistura";
import { acucar, agua, areia, brita, etanol, ferro, gasolina, oleoCozinha, salCozinha } from "../data/dataComponentes";
import { Mistura } from "../data/Mistura";


export type metodoSeparacao = 'centrifugação' | 'decantação' | 'decantação com funil de bromo' | 'filtração' 
| 'peneiração' | 'separação magnética' | 'dissolução fracionada' | 'destilação simples' | 'destilação fracionada';
export default function separarMistura(metodo: metodoSeparacao, mistura : Mistura) : Array<Mistura> | null | ComponenteMistura | undefined{
  switch (metodo) {
    /*
      Explicar em qual situação o método é realizado, e qual o valor que retornará para todos os métodos.
    */
    case 'decantação':
      //Condicionando o uso da decantação para as misturas heterogênea e S/L.

      if (mistura.tipo == 'S/L' && mistura.classificacao == 'Heterogenea') {
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
       
  }
}
}





