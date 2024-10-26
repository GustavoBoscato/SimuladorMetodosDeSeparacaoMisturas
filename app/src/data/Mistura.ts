import { ComponenteMistura } from './ComponenteMistura';
type tipoMistura = 'S/S' | 'S/L' | 'L/L' | null;
type tipoClassificacao = 'Heterogenea' | 'Homogenea' | null;
export class Mistura {
  private _itens: Array<ComponenteMistura> = [];
  private _classificacao: tipoClassificacao = null;
  private _tipo: tipoMistura = null;
  get itens() : Array<ComponenteMistura> {
    return this._itens;
  }

  set itens(componentes : Array<ComponenteMistura>) {
    componentes.forEach((componente) => {
      this.adicionarComponenteMistura(componente);
    })
  }

  get classificacao() : tipoClassificacao{
    return this._classificacao;
  }

  get tipo() : tipoMistura {
    return this._tipo;
  }

  calcularTipo() : void{
    //Se todos os itens tem estado físico L
    if (this._itens.every((componente) => componente.estadoFisico == 'L')) {
      this._tipo = 'L/L';
    } else {
      //Se todos os itens tem estado físico S
      if (this._itens.every((componente) => componente.estadoFisico == 'S')) {
        this._tipo = 'S/S';
      } else {
        this._tipo = 'S/L';
      }
    }
  }

  calcularClassificacao() : void {
    if (this._tipo == 'S/S' || 
        this._itens.some((componente) => componente.soluvelEmAgua == false)) {
      this._classificacao = 'Heterogenea';
    } else {
      this._classificacao = 'Homogenea';
    }   
  }

  adicionarComponenteMistura(componente: ComponenteMistura) : void {
    //Se o item ainda não existir na mistura adiciona     
    if (this._itens.findIndex((item) => item.nome == componente.nome) == -1) {
      this._itens.push(componente);
      this.calcularTipo();
      this.calcularClassificacao();
    } else {
      console.log("Componente ja existe na mistura");
    }

    /*
    let i = 0;
    this._itens.forEach((value) => {
      if (value == mistura) {
        i++;
      }
    });
    //Impede de adicionar um componente que já esteja presente na mistura.
    if (i == 0) {
      this._itens.push(mistura);
    }*/
  }

  /*
  constructor(mistura: Array<ComponenteMistura>) {
    this._itens = mistura;
  }
  */
  constructor(componentes: Array<ComponenteMistura>) {
    this.itens = componentes;
  }
}