import { Mistura } from "./Mistura";
import { agua, etanol, gasolina, oleoCozinha, acucar, salCozinha, ferro, areia, brita } from "./dataComponentes";

const aguaEtanol = new Mistura([agua, etanol]);
const aguaEtanolGasolinaOleoCozinha = new Mistura([agua, etanol, gasolina, oleoCozinha]);
const aguaOleoCozinha = new Mistura([agua, oleoCozinha]);
const britaFerroAcucar = new Mistura([brita, ferro, acucar]);
const salCozinhaAcucar = new Mistura([salCozinha, acucar]);
const britaFerroAcucarSalCozinha = new Mistura([brita, ferro, acucar, salCozinha]);
const aguaSalCozinha = new Mistura([agua, salCozinha]);
const oleoCozinhaAcucar = new Mistura([acucar, oleoCozinha]);
const aguaEtanolGasolinaSalCozinhaFerro = new Mistura([agua, etanol, gasolina, salCozinha, ferro]);
export const listaMisturasModoFacil : Array<Mistura> = [aguaEtanol, aguaEtanolGasolinaOleoCozinha, aguaOleoCozinha, britaFerroAcucar, salCozinhaAcucar, britaFerroAcucarSalCozinha, aguaSalCozinha, oleoCozinhaAcucar, aguaEtanolGasolinaSalCozinhaFerro];
