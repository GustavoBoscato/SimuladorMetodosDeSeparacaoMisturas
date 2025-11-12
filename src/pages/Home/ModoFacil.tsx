import React from 'react'
import ListaMistura from '../../Components/Principal/ListaMistura'
import { Mistura } from '../../data/Mistura';
import { agua, areia } from '../../data/dataComponentes';
import './Laboratorio.css';

import Botao from '../../Components/Principal/Botao';
import SelectMetodos from '../../Components/Principal/SelectMetodos';
import { Link } from 'react-router-dom';

import { separarMistura } from '../../utils/metodos';
import { useState } from 'react';
import IconeVoltar from '../../img/IconeVoltar.png';
import frascoLaboratorio from '../../img/frascoLaboratorio.png';
import { useEffect } from 'react';
import { metodoSeparacao } from '../../utils/metodos';
import MisturaModoFacil from '../../Components/Principal/MisturaModoFacil';;
type MisturaFacilProps = {
  MisturaFacil: Mistura;
  setMisturaFacil: React.Dispatch<React.SetStateAction<Mistura>>;
}
const ModoFacil: React.FC<MisturaFacilProps> = ({MisturaFacil, setMisturaFacil}) => {
  useEffect(() => {
    MisturaFacil.calcularTipo();
    MisturaFacil.calcularClassificacao();
  }, [MisturaFacil]);

    
    MisturaFacil.calcularTipo();
    MisturaFacil.calcularClassificacao();


    const [MetodoSeparacao, setMetodoSeparacao]  = useState<metodoSeparacao>('centrifugação');
    const [TodasMisturas, setTodasMisturas] = useState<Mistura[]>([MisturaFacil])
    
      useEffect(() => {
          console.log("TodasMisturas atualizada:", TodasMisturas);
      }, [TodasMisturas]);
  return (
    <div className='laboratorio'>
      
        {Array.isArray(TodasMisturas) && TodasMisturas.map((value, index) => (
  <MisturaModoFacil
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

export default ModoFacil