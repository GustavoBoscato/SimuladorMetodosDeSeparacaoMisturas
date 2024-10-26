import { ComponenteMistura } from "../data/ComponenteMistura";

export const agua = new ComponenteMistura("Água", 997, 100, "L", true, null, false);
export const etanol = new ComponenteMistura("Etanol",789,78.37,"L",true,null,false);
export const oleoCozinha = new ComponenteMistura("Óleo de Cozinha",800,200,"L",false,null,false);
export const gasolina = new ComponenteMistura("Gasolina",715,215,"L",false,null,false);
export const salCozinha = new ComponenteMistura("Sal de Cozinha",2162,null,"S",true,10,false);
export const acucar = new ComponenteMistura("Açúcar", 900, null, "S", true, 15, false);
export const areia = new ComponenteMistura("Areia", 1600, null, "S", false, 20, false);
export const brita = new ComponenteMistura("Brita", 1450, null, "S", false, 50, false);
export const ferro = new ComponenteMistura("Ferro", 7850, null, "S", false, 30, true);

export const listaComponentes = [agua, etanol, oleoCozinha, gasolina, salCozinha, acucar, areia, brita, ferro];