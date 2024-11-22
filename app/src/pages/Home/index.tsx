import { useState } from 'react';

import './style.css';

import { Mistura } from "../../data/Mistura";
import MisturaPainel from '../../Components/MisturaPainel';
import { metodoSeparacao, separarMistura } from '../../utils/metodos';

export default function Home({misturaInicial}: {misturaInicial : Mistura}) {
    const [misturas, setMisturas] = useState<Mistura[]>([misturaInicial])

    function separador(indMistura: number, metodo: metodoSeparacao){
        //const resultado = separarMistura(metodo, misturas[indMistura]);

        const resposta = separarMistura(metodo, misturas[indMistura]);

        //Avisar para o gustado elhorar a implementação do separarMistura 
        //disparando um erro se não for possível fazer a separação
        if (Array.isArray(resposta)){
            const copiaMisturas = [...misturas];
            copiaMisturas.splice(indMistura, 1, ...resposta);
            //console.log(copiaMisturas);
            setMisturas(copiaMisturas);
        }

        if (typeof resposta === 'string'){
            alert(resposta);
        }

    }

    return (
        <div className='container'>
            {misturas.map((m, ind) => <MisturaPainel mistura={m} ind={ind} separador={separador} />)}
        </div>
    )
}
