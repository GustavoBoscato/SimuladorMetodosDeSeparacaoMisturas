import { ComponenteMistura } from "../data/ComponenteMistura";

export const agua = new ComponenteMistura("Água", 997, 100, "L", true, 0, false);
export const etanol = new ComponenteMistura("Etanol",789,78.37,"L",true,0,false);
export const oleoCozinha = new ComponenteMistura("Óleo de Cozinha",800,200,"L",false,0,false);
export const gasolina = new ComponenteMistura("Gasolina",715,215,"L",false,0,false);
export const salCozinha = new ComponenteMistura("Sal de Cozinha",2162, 1465,"S",true,10,false);
export const acucar = new ComponenteMistura("Açúcar", 900, 500, "S", true, 15, false);
export const areia = new ComponenteMistura("Areia", 1600, 2230, "S", false, 20, false);
export const brita = new ComponenteMistura("Brita", 1450, 2000, "S", null, 50, false);
export const ferro = new ComponenteMistura("Ferro", 7850, 2862, "S", null, 30, true);

export const listaComponentes = [agua, etanol, oleoCozinha, gasolina, salCozinha, acucar, areia, brita, ferro];
