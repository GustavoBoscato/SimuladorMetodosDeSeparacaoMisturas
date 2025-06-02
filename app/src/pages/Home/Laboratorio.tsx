import React from 'react'
import ListaMistura from '../../Components/Principal/ListaMistura'
import { Mistura } from '../../data/Mistura';
import { agua, areia, etanol, ferro } from '../../data/dataComponentes';
import './Laboratorio.css';
import IconeVoltar from '../../img/IconeVoltar.png';
import frascoLaboratorio from '../../img/frascoLaboratorio.png';
import Botao from '../../Components/Principal/Botao';
import SelectMetodos from '../../Components/Principal/SelectMetodos';
import { Link } from 'react-router-dom';
import { separarMistura } from '../../utils/metodos';
import { useState } from 'react';
import { metodoSeparacao } from '../../utils/metodos';
import { ComponenteMistura } from '../../data/ComponenteMistura';
import { useEffect } from 'react';
import MisturaModoDificil from '../../Components/Principal/MisturaModoDificil';
type MisturaDificilProps = {
  misturaDificil: Mistura;
  setMisturaDificil : Function;
}


const Laboratorio : React.FC<MisturaDificilProps> = ({misturaDificil, setMisturaDificil}) => {
  const mistura1 = new Mistura([agua, etanol])
  const mistura2 = new Mistura([agua, ferro])
    const [MetodoSeparacao, setMetodoSeparacao]  = useState<metodoSeparacao>('centrifugação');
    const [TodasMisturas, setTodasMisturas] = useState<Mistura[]>([mistura1])
    useEffect(() => {
        misturaDificil.calcularTipo();
        misturaDificil.calcularClassificacao();
      }, [misturaDificil]);
      useEffect(() => {
          console.log("TodasMisturas atualizada:", TodasMisturas);
      }, [TodasMisturas]);
  return (
    <div className='laboratorio'>
      
        {Array.isArray(TodasMisturas) && TodasMisturas.map((value, index) => (
  <MisturaModoDificil
    key={index}
    mistura={value}
    TodasMisturas={TodasMisturas}
    setTodasMisturas={setTodasMisturas}
    index={(index + 1).toString()}
  />
))}

              
            </div>
                       
        
   
  )
}

export default Laboratorio