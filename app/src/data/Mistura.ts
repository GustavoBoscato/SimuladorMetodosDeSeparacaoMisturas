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
    if (this._itens.some((componente) => componente.soluvelEmAgua == null) || this._tipo == 'S/S' || (this._itens.some((componente) => componente.soluvelEmAgua == false && this._itens.some((componente) => componente.soluvelEmAgua == true)))) {
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

    
  }
  removerComponenteMistura(componente: string): void {
    this._itens = this._itens.filter((value) => value.nome !== componente);
    this.calcularTipo();
    this.calcularClassificacao();  
  }
  resetarMistura(componente1: ComponenteMistura, componente2 : ComponenteMistura){
    this._itens = [componente1, componente2]
  }

  constructor(componentes: Array<ComponenteMistura>) {
    this.itens = componentes;
  }
}