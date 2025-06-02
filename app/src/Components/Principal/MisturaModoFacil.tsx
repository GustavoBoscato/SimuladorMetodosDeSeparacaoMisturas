import React from 'react'
import './MisturaModoDificil.css';
import ListaMistura from '../../Components/Principal/ListaMistura'
import { Mistura } from '../../data/Mistura';
import { agua, areia } from '../../data/dataComponentes';

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
import LaboratorioOpção from '../../pages/Home/LaboratorioOpção';
  type MisturaDificilProps = {
  mistura: Mistura;
  index : string;
  TodasMisturas : Mistura[];
  setTodasMisturas : Function;
}
const MisturaModoDificil : React.FC<MisturaDificilProps> = ({mistura, index, setTodasMisturas, TodasMisturas}) => {
  const [MetodoSeparacao, setMetodoSeparacao]  = useState<metodoSeparacao>('centrifugação');
  const [Visualizacao, setVisualizacao] = useState<boolean>(true);
      useEffect(() => {
          mistura.calcularTipo();
          mistura.calcularClassificacao();
        }, [mistura]);
  
        
        return (
    <div className='MisturaModoDificil'>
     
    <ListaMistura mistura={mistura} h6={`Mistura ${index}`}/>
    
                      { mistura.itens.length > 1 && (
                      <div className="botoesDificil">
                      <button className='buttonPadrao' onClick={() => {
                      let misturaNova = (separarMistura(MetodoSeparacao, mistura))
                      if (misturaNova) {
                        
                        if (Array.isArray(misturaNova)) {
                
                          if (misturaNova.length > 0) {
                            let misturaApagada = TodasMisturas.filter((value) => value !== mistura)
                            setTodasMisturas([...misturaApagada, misturaNova[0], misturaNova[1]])
                      
                            setMetodoSeparacao('destilação simples')
                            console.log(TodasMisturas);
                          }
                        } else {
                          alert(misturaNova);
                        }
                        
                      }
                      
                      }} style={{backgroundColor: "#000", color: '#FDFDFD', width: ''}}>Separar</button>
                      <SelectMetodos id='metodosModoLivre' setMetodoSeparacao={setMetodoSeparacao}/>
                      
                        </div>                  
                      )}
     
     
    </div>
  )
       
        
  
    
  
}

export default MisturaModoDificil