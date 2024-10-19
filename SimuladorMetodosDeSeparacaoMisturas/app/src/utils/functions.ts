import { Mistura } from "../data/Mistura";

type metodoSeparacao = 'destilação'  | 'peineração' | 'filtração' | 'decantação' | 'separação magnética' | 'decantaçao funil de bromo';
function separarMistura(metodo: metodoSeparacao, mistura : Mistura) : Array<Mistura> | null {
  switch (metodo) {
    /*
      Explicar em qual situação o método é realizado, e qual o valor que retornará para todos os métodos.
    */
    case 'destilação':
      return null;
    case 'peineração':
      return null;
    case 'filtração':
      return null;
    case 'decantação':
      
      
      return null;
    case 'separação magnética':
      return null;
  }

  return null;  
}

