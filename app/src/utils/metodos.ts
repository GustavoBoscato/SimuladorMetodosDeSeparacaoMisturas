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
        //Seleciona o elemento de menor densidade.
        mistura.itens.forEach(value => {
          if (value.densidade < menorDensidade) {
            menorDensidade = value.densidade;
            elementoMenorDensidade = value;
          }
          
      })
      //Remove o elemento de menor densidade.
      mistura.itens.forEach((value, i) =>{
        
        if (value == elementoMenorDensidade) {
            mistura.itens.splice(i, 1);
          
        }
      })
      //Cria uma nova mistura com o elemento menos denso.
      let misturaSeparada = new Mistura([elementoMenorDensidade]);

      misturaSeparada.calcularTipo();
      misturaSeparada.calcularClassificacao();
      mistura.calcularTipo()
      mistura.calcularClassificacao();
        
      return [mistura, misturaSeparada];
       //Retorna uma mensagem de erro especificando o que o usuário fez de errado.
    } else return `A decantação apenas pode ser utilizada em misturas Heterogêneas S/L, essa mistura é ${mistura.classificacao} ${mistura.tipo}`
  break;
  case 'decantação com funil de bromo':
    //Condicionando o uso da decantação com funil de bromo para as misturas heterogênea e L/L.
    if (mistura.tipo === 'L/L' && mistura.classificacao === 'Heterogenea') {
      let maiorDensidade : number = mistura.itens[0].densidade;
        let elementoMaiorDensidade : ComponenteMistura = mistura.itens[0];        
        //Busca o elemento de maior densidade
        mistura.itens.forEach(value => {
          if (value.densidade < maiorDensidade) {
            maiorDensidade = value.densidade;
            elementoMaiorDensidade = value;
          }
          
      })
      //Remove da mistura o elemento de maior densidade.
      mistura.itens.forEach((value, i) =>{
        
        if (value == elementoMaiorDensidade) {
            mistura.itens.splice(i, 1);
          
        }
      })
      //Cria uma nova mistura com o elemento de maior densidade.
      let misturaSeparada = new Mistura([elementoMaiorDensidade]);

      misturaSeparada.calcularTipo();
      misturaSeparada.calcularClassificacao();
      mistura.calcularTipo()
      mistura.calcularClassificacao();
        
      return [mistura, misturaSeparada];
    } else return `A decantação com funil de bromo apenas pode ser utilizada em misturas Heterogêneas L/L, essa mistura é ${mistura.classificacao} ${mistura.tipo}`
  break;
  case 'centrifugação':
     //Condicionando o uso da centrifugação para as misturas heterogênea e S/L.
    if (mistura.tipo == 'S/L' && mistura.classificacao == 'Heterogenea') {
      let menorDensidade : number = mistura.itens[0].densidade;
      let elementoMenorDensidade : ComponenteMistura = mistura.itens[0];        
       //Seleciona o elemento de menor densidade.
      mistura.itens.forEach(value => {
        if (value.densidade < menorDensidade) {
          menorDensidade = value.densidade;
          elementoMenorDensidade = value;
        }
        
    })
    //Remove o elemento de menor densidade da mistura..
    mistura.itens.forEach((value, i) =>{
      
      if (value == elementoMenorDensidade) {
          mistura.itens.splice(i, 1);
        
      }
    })
    //Cria uma nova mistura com o elemento de menor densidade como componente
    let misturaSeparada = new Mistura([elementoMenorDensidade]);

    misturaSeparada.calcularTipo();
    misturaSeparada.calcularClassificacao();
    mistura.calcularTipo()
    mistura.calcularClassificacao();
      
    return [mistura, misturaSeparada];
     
  } 
  else 
  // Mensagem de erro caso o usuário tente fazer uma separação diferente de heterogênea ou L/L
  return `A centrifugação apenas pode ser utilizada em misturas Heterogêneas S/L, essa mistura é ${mistura.classificacao} ${mistura.tipo}`
  case 'destilação simples':
    if (mistura.tipo === 'S/L' && mistura.classificacao === 'Homogenea') {
      //Condicionando o uso da destilação simples para as misturas homogênea e S/L.
      
      let menorTemperaturaEbulicao : number = mistura.itens[0].pontoDeEbulicao;
      let elementoMenorTemperaturaEbulicao : ComponenteMistura = mistura.itens[0];
      
      mistura.itens.forEach((value) => {
        if (value.pontoDeEbulicao < menorTemperaturaEbulicao) {
          menorTemperaturaEbulicao = value.pontoDeEbulicao;
          elementoMenorTemperaturaEbulicao = value;
        }
        //Descobre e armazena o elemento com menor temperatura de ebulição
      })
      mistura.itens.forEach((value, i) => {
        if (value === elementoMenorTemperaturaEbulicao) {
          mistura.itens.splice(i, 1);
        }
      })
      //Cria uma nova mistura com o elemento de menor temperatura de ebulição.
      let misturaSeparada = new Mistura([elementoMenorTemperaturaEbulicao])
      return [mistura, misturaSeparada];
      // Mensagem de erro caso o usuário tente fazer a separação com uma mistura que não seja homogênea S/L
    } else return `A destilação simples apenas pode ser utilizada em misturas Homogêneas S/L, essa mistura é ${mistura.classificacao} ${mistura.tipo}`
    break;
  case 'destilação fracionada':
    //Condicionando o uso da destilação fracionada para as misturas homogênea e L/L.
    if (mistura.tipo === 'L/L' && mistura.classificacao === 'Homogenea') {
      let menorTemperaturaEbulicao : number = mistura.itens[0].pontoDeEbulicao;
      let elementoMenorTemperaturaEbulicao : ComponenteMistura = mistura.itens[0];
      //Descobre e armazena o elemento com menor temperatura de ebulição
      mistura.itens.forEach((value) => {
        if(value.pontoDeEbulicao < menorTemperaturaEbulicao){
          menorTemperaturaEbulicao = value.pontoDeEbulicao;
          elementoMenorTemperaturaEbulicao = value;
        }
      })      
      //Remove da mistura o elemento com menor temperatura de ebulição.
      mistura.itens.forEach((value, i) =>{
        mistura.itens.splice(i, 1);
      })
      //Cria uma nova mistura com o elemento de menor temperatura de ebulição como componente.
      let misturaSeparada = new Mistura([elementoMenorTemperaturaEbulicao]);
      return[mistura, misturaSeparada]
      // Mensagem de erro caso o usuário tente fazer a separação com uma mistura que não seja homogênea L/L
    } else return `A destilação fracionada apenas pode ser utilizada em misturas Homogêneas L/L, essa mistura é ${mistura.classificacao} ${mistura.tipo}`
      break;
  case  'filtração':
    //Condicionando o uso da filtração para as misturas heterogênea e S/L.
    if (mistura.classificacao === 'Heterogenea' && mistura.tipo === 'S/L') {
      //Seleciona todos os líquidos da mistura

      const liquidos : Array<ComponenteMistura> = mistura.itens.filter((value) =>  value.estadoFisico === 'L')
      //Seleciona todos os sólidos dissolvidos nos líquidos
      const solidosDissolvidos : Array<ComponenteMistura> = mistura.itens.filter((value) => value.soluvelEmAgua === liquidos[0].soluvelEmAgua)
      
      //
      if (liquidos.every((value) => value.soluvelEmAgua === true || value.soluvelEmAgua === false)) {
        //Cria uma categoria sólidos não dissolvidos  
        const solidosNaoDissolvidos : Array<ComponenteMistura> = mistura.itens.filter((value) => {
        return value.soluvelEmAgua !== liquidos[0].soluvelEmAgua && value.estadoFisico === 'S';
    }) 
      //Une os sólidos dissolvidos e líquidos em um mesmo vetor      
      const misturaLiquidaESolidosDissolvidos = new Mistura(liquidos.concat(solidosDissolvidos))
      //Cria uma nova mistura com os sólidos não dissolvidos que ficaram retidos no filtro.
      const misturaSolidosNaoDissolvidos = new Mistura(solidosNaoDissolvidos)

      return [misturaLiquidaESolidosDissolvidos, misturaSolidosNaoDissolvidos]
            
          } // Mensagem de erro caso o usuário tente fazer a separação com uma mistura que não seja heterogênea S/L
        } else return `A filtração apenas pode ser utilizada em misturas Heterogêneas S/L, essa mistura é ${mistura.classificacao} ${mistura.tipo} ou não poderá conter líquidos de diferentes polaridades.`
      break;
}

}





