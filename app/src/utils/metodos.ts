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

        const liquidos : Array<ComponenteMistura> = mistura.itens.filter((value) =>  value.estadoFisico === 'L')
        if (liquidos.every((value) => value.soluvelEmAgua === liquidos[0].soluvelEmAgua) === true) {
          let soma : number = 0;
          const mediaDensidadeLiquidosVetor : number[] = liquidos.map((value) => soma = value.densidade)
          const mediaDensidade : number = mediaDensidadeLiquidosVetor.reduce((n1, n2) => n1 + n2)/mediaDensidadeLiquidosVetor.length;
          const solidosNaoDissolvidos : ComponenteMistura[] = mistura.itens.filter((value) => value.soluvelEmAgua !== liquidos[0].soluvelEmAgua && value.estadoFisico === 'S');
          const solidosDissolvidos : ComponenteMistura[] = mistura.itens.filter((value) => value.soluvelEmAgua === liquidos[0].soluvelEmAgua && value.estadoFisico === 'S');
          const solidosSeparados : ComponenteMistura[] = solidosNaoDissolvidos.filter((value)=> value.densidade > mediaDensidade)
          const solidosMenorDensidade : ComponenteMistura[] = solidosNaoDissolvidos.filter((value)=> value.densidade < mediaDensidade)
          //Adiciona os elementos líquidos, sólidos dissolvidos, e sólidos não dissolvidos que possuem densidade menor que a média.
          const ComponentesRestantes : ComponenteMistura[] = liquidos.concat(solidosDissolvidos, solidosMenorDensidade)
          const Mistura1 = new Mistura(ComponentesRestantes);
          const MisturaSeparada = new Mistura(solidosSeparados);
          return [Mistura1, MisturaSeparada];
        } else {
          const liquidosSoluveisEmAgua = mistura.itens.filter((value) => value.soluvelEmAgua === true);
          const liquidosNaoSoluveisEmAgua = mistura.itens.filter((value) => value.soluvelEmAgua === false);
          const solidosSoluveisEmAgua = mistura.itens.filter((value) => value.soluvelEmAgua === true);
          const solidosNaoSoluveisEmAgua = mistura.itens.filter((value) => value.soluvelEmAgua === false);
          const componentesPolares = liquidosSoluveisEmAgua.concat(solidosSoluveisEmAgua);
          const componentesAPolares = liquidosNaoSoluveisEmAgua.concat(solidosNaoSoluveisEmAgua);
          const misturaPolar = new Mistura(componentesPolares);
          const misturaAPolar = new Mistura(componentesAPolares);
          return[misturaPolar, misturaAPolar];
        }

       //Retorna uma mensagem de erro especificando o que o usuário fez de errado.
    } else return `A decantação apenas pode ser utilizada em misturas Heterogêneas S/L, essa mistura é ${mistura.classificacao} ${mistura.tipo}`
    break;
  case 'decantação com funil de bromo':
    //Condicionando o uso da decantação com funil de bromo para as misturas heterogênea e L/L.
    if (mistura.tipo === 'L/L' && mistura.classificacao === 'Heterogenea') {
      const liquidosSoluveisEmAgua = mistura.itens.filter((value) => value.soluvelEmAgua === true);
      const liquidosNaoSoluveisEmAgua = mistura.itens.filter((value) => value.soluvelEmAgua === false);
      const misturaPolar = new Mistura(liquidosSoluveisEmAgua);
          const misturaAPolar = new Mistura(liquidosNaoSoluveisEmAgua);
          return[misturaPolar, misturaAPolar];


    } else return `A decantação com funil de bromo apenas pode ser utilizada em misturas Heterogêneas L/L, essa mistura é ${mistura.classificacao} ${mistura.tipo}`
    break;
  case 'centrifugação':
     //Condicionando o uso da centrifugação para as misturas heterogênea e S/L.
    if (mistura.tipo == 'S/L' && mistura.classificacao == 'Heterogenea') {
      const liquidos : Array<ComponenteMistura> = mistura.itens.filter((value) =>  value.estadoFisico === 'L')
        if (liquidos.every((value) => value.soluvelEmAgua === liquidos[0].soluvelEmAgua) === true) {
          let soma : number = 0;
          const mediaDensidadeLiquidosVetor : number[] = liquidos.map((value) => soma = value.densidade)
          const mediaDensidade : number = mediaDensidadeLiquidosVetor.reduce((n1, n2) => n1 + n2)/mediaDensidadeLiquidosVetor.length;
          const solidosNaoDissolvidos : ComponenteMistura[] = mistura.itens.filter((value) => value.soluvelEmAgua !== liquidos[0].soluvelEmAgua && value.estadoFisico === 'S');
          const solidosDissolvidos : ComponenteMistura[] = mistura.itens.filter((value) => value.soluvelEmAgua === liquidos[0].soluvelEmAgua && value.estadoFisico === 'S');
          const solidosSeparados : ComponenteMistura[] = solidosNaoDissolvidos.filter((value)=> value.densidade > mediaDensidade)
          const solidosMenorDensidade : ComponenteMistura[] = solidosNaoDissolvidos.filter((value)=> value.densidade < mediaDensidade)
          //Adiciona os elementos líquidos, sólidos dissolvidos, e sólidos não dissolvidos que possuem densidade menor que a média.
          const ComponentesRestantes : ComponenteMistura[] = liquidos.concat(solidosDissolvidos, solidosMenorDensidade)
          const Mistura1 = new Mistura(ComponentesRestantes);
          const MisturaSeparada = new Mistura(solidosSeparados);
          return [Mistura1, MisturaSeparada];
        } else {
          const liquidosSoluveisEmAgua = mistura.itens.filter((value) => value.soluvelEmAgua === true);
          const liquidosNaoSoluveisEmAgua = mistura.itens.filter((value) => value.soluvelEmAgua === false);
          const solidosSoluveisEmAgua = mistura.itens.filter((value) => value.soluvelEmAgua === true);
          const solidosNaoSoluveisEmAgua = mistura.itens.filter((value) => value.soluvelEmAgua === false);
          const componentesPolares = liquidosSoluveisEmAgua.concat(solidosSoluveisEmAgua);
          const componentesAPolares = liquidosNaoSoluveisEmAgua.concat(solidosNaoSoluveisEmAgua);
          const misturaPolar = new Mistura(componentesPolares);
          const misturaAPolar = new Mistura(componentesAPolares);
          return[misturaPolar, misturaAPolar];
        }
     
  } 
  else return `A centrifugação apenas pode ser utilizada em misturas Heterogêneas S/L, essa mistura é ${mistura.classificacao} ${mistura.tipo}`
  break;
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
        if (value === elementoMenorTemperaturaEbulicao) {
          mistura.itens.splice(i, 1);  
        }
        
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
    case 'peneiração':
      if (mistura.classificacao === 'Heterogenea' && mistura.tipo === 'S/S'){
        let aux : Array<ComponenteMistura> = mistura.itens
        let maiorTamanho : number = mistura.itens[0].tamanho;
        let maiorComponente : ComponenteMistura = aux[0]
        aux.forEach((value) => {
          if (value.tamanho > maiorTamanho) {
           maiorComponente = value
          }
          
        })
        const novaMistura : Mistura = new Mistura([maiorComponente])
        const MisturaRestante : Mistura = new Mistura(aux.filter((value) => value !== maiorComponente))
        return [novaMistura, MisturaRestante]
      } else return `A peneiração apenas pode ser utilizada em misturas Heterogêneas S/S, essa mistura é ${mistura.classificacao} ${mistura.tipo}`
      break;
     case 'separação magnética':
      const contemFerro = mistura.itens.some((value) => value.nome === 'Ferro')
      if (mistura.classificacao === 'Heterogenea' && mistura.tipo === 'S/S' && contemFerro === true){
        const componenteFerro : ComponenteMistura[] = mistura.itens.filter((value) => value.nome === 'Ferro')
        const componentesSemFerro : ComponenteMistura[] = mistura.itens.filter((value) => value.nome !== 'Ferro')
        const misturaRestante : Mistura = new Mistura(componentesSemFerro);
        const misturaFerro : Mistura = new Mistura(componenteFerro);
        return[misturaRestante, misturaFerro];
      } else return `A separação magnética apenas pode ser utilizada em misturas Heterogêneas S/S e deve conter ferro em sua composição, essa mistura é ${mistura.classificacao} ${mistura.tipo}`
      break;
     case 'dissolução fracionada':
      if (mistura.classificacao === 'Heterogenea' && mistura.tipo === 'S/S'){
        const solidosSoluveisEmAgua : ComponenteMistura[] = mistura.itens.filter((value) => value.soluvelEmAgua === true);
        const solidosNaoSoluveisEmAgua : ComponenteMistura[] = mistura.itens.filter((value) => value.soluvelEmAgua === false);
        const misturaSoluvel : Mistura = new Mistura(solidosSoluveisEmAgua)
        const misturaNaoSoluvel : Mistura = new Mistura(solidosNaoSoluveisEmAgua)
        return[misturaSoluvel, misturaNaoSoluvel];
      } else return `A dissolução fracionada apenas pode ser utilizada em misturas Heterogêneas S/S, essa mistura é ${mistura.classificacao} ${mistura.tipo}`
      break;
}

}





