import { useState } from "react";

import "./style.css";

import { Mistura } from "../../data/Mistura";
import MisturaPainel from "../../Components/MisturaPainel";
import { metodoSeparacao, separarMistura } from "../../utils/metodos";

export default function Home({ opcoesMisturas }: {opcoesMisturas: Mistura[]}) {

  const [misturas, setMisturas] = useState<Mistura[]>([]);

  function separador(indMistura: number, metodo: metodoSeparacao) {
    //const resultado = separarMistura(metodo, misturas[indMistura]);

    const resposta = separarMistura(metodo, misturas[indMistura]);

    //Avisar para o gustado elhorar a implementação do separarMistura
    //disparando um erro se não for possível fazer a separação
    if (Array.isArray(resposta)) {
      const copiaMisturas = [...misturas];
      copiaMisturas.splice(indMistura, 1, ...resposta);
      //console.log(copiaMisturas);
      setMisturas(copiaMisturas);
    }

    if (typeof resposta === "string") {
      alert(resposta);
    }
  }

  return (
    <div className="container">
      <div className="containerEscolhaMisturaInicial">
        <h2>Escolher Mistura Inicial</h2>
        <select onChange={(e) => {
                if (e.target.value === "") 
                    setMisturas([]);
                else
                    setMisturas([opcoesMisturas[parseInt(e.target.value)]]);
            }
        }>
          <option value="">Selecione a mistura inicial para teste</option>
          {opcoesMisturas.map((mistura, ind) => (
            <option key={ind} value={ind}>{mistura.itens.map((item) => item.nome).join(', ')}</option>
          ))}
        </select>
      </div>
      <hr/>
      <div className="containerSeparadorMistura">
        {misturas.map((m, ind) => (
          <MisturaPainel mistura={m} ind={ind} separador={separador} />
        ))}
      </div>
    </div>
  );
}
