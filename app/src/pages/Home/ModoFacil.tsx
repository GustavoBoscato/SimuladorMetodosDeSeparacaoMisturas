import React from 'react'
import ListaMistura from '../../Components/Principal/ListaMistura'
import { Mistura } from '../../data/Mistura';
import { agua, areia } from '../../data/dataComponentes';
import './Laboratorio.css';
import IconeVoltar from '../../img/IconeVoltar.png';
import BicoDeEnyemeyer from '../../img/frascoLaboratorio.png' ;
import Botao from '../../Components/Principal/Botao';
import SelectMetodos from '../../Components/Principal/SelectMetodos';
import { Link } from 'react-router-dom';
import { metodoSeparacao } from '../../utils/metodos';
import { separarMistura } from '../../utils/metodos';
import { useState } from 'react';
type MisturaFacilProps = {
  MisturaFacil: Mistura;
  setMisturaFacil: React.Dispatch<React.SetStateAction<Mistura>>;
}
const ModoFacil: React.FC<MisturaFacilProps> = ({MisturaFacil, setMisturaFacil}) => {
    const [MetodoSeparacao, setMetodoSeparacao]  = useState<metodoSeparacao>('centrifugação');
  return (
    <div className='laboratorio'>
        <ListaMistura h6='Mistura 01' mistura={MisturaFacil}/>
        <div className="laboratorioOpcoes">
            <div className="topo">
            <Link className='imagemVoltar' to="/simular"><img src={IconeVoltar} alt="Imagem voltar" className='imagemVoltar' /></Link>
                <h2>Simulação</h2>
                <p id='modoNome'>Modo Fácil</p>
            </div>
            <div className="conteinerFrasco">
              <img src={BicoDeEnyemeyer} alt="FrascoLaboratorio" className='FrascoLaboratorio' draggable="false" />
            </div>
            <div className="botoesLaboratorio">
              <button className='buttonPadrao' onClick={() => {
                              let misturaNova = (separarMistura(MetodoSeparacao, MisturaFacil))
                              if (misturaNova) {
                                
                                if (Array.isArray(misturaNova)) {
                        
                                  if (misturaNova.length > 0) {
                                    setMisturaFacil(misturaNova[0]);
                                    console.log(MisturaFacil)
                                  }
                                }
                                
                              }
                              
                              }} style={{backgroundColor: "#000", color: '#FDFDFD', width: ''}}>Separar</button>
              <SelectMetodos id='metodosModoLivre' setMetodoSeparacao={ setMetodoSeparacao}/>
              
              
            </div>
                       
        </div>
    </div>
  )
}

export default ModoFacil