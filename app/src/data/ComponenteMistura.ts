type NumberOrNull = number | null;
type StringOrNull = string | null;
type BooleanOrNull = boolean | null;
type EstadoFisico = "L" | "S";

export class ComponenteMistura {
  nome;
  densidade;
  pontoDeEbulicao;
  tamanho;
  estadoFisico;
  soluvelEmAgua;
  magnetismo;

  constructor(
    nome: string,
    densidade: number,
    pontoDeEbulicao: number,
    estadoFisico: EstadoFisico,
    soluvelEmAgua: boolean,
    tamanho: number,
    magnetismo: boolean
  ) {
    this.nome = nome;
    this.densidade = densidade;
    this.pontoDeEbulicao = pontoDeEbulicao;
    this.tamanho = tamanho;
    this.estadoFisico = estadoFisico;
    this.soluvelEmAgua = soluvelEmAgua;
    this.magnetismo = magnetismo;
  }
}