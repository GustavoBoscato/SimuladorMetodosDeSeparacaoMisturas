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
import { separarMistura } from '../../utils/metodos';
import { useState } from 'react';
import { metodoSeparacao } from '../../utils/metodos';
import { ComponenteMistura } from '../../data/ComponenteMistura';
type MisturaDificilProps = {
  misturaDificil: Mistura;
  setMisturaDificil : Function;
}
const Laboratorio : React.FC<MisturaDificilProps> = ({misturaDificil, setMisturaDificil}) => {
    const [MetodoSeparacao, setMetodoSeparacao]  = useState<metodoSeparacao>('centrifugação');
    
  return (
    <div className='laboratorio'>
        <ListaMistura h6='Mistura 01' mistura={misturaDificil}/>
        <div className="laboratorioOpcoes">
            <div className="topo">
            <Link className='imagemVoltar' to="/simular"><img src={IconeVoltar} alt="Imagem voltar" className='imagemVoltar' /></Link>
                <h2>Simulação</h2>
                <p id='modoNome'>Modo Difícil</p>
            </div>
            <div className="conteinerFrasco">
              <img src={BicoDeEnyemeyer} alt="FrascoLaboratorio" className='FrascoLaboratorio' draggable="false" />
            </div>
            <div className="botoesLaboratorio">
  
              <button className='buttonPadrao' onClick={() => {
                let misturaNova = (separarMistura(MetodoSeparacao, misturaDificil))
                if (misturaNova) {
                  
                  if (Array.isArray(misturaNova)) {
          
                    if (misturaNova.length > 0) {
                      setMisturaDificil(misturaNova[0]);
                      console.log(misturaDificil)
                    }
                  }
                  
                }
                
                }} style={{backgroundColor: "#000", color: '#FDFDFD', width: ''}}>Separar</button>
              <SelectMetodos id='metodosModoLivre' setMetodoSeparacao={setMetodoSeparacao}/>
              <Link id='voltarLaboratorio' to="/laboratorioOpcao"><Botao colorFundo='#484D50' colorTexto='#FDFDFD' texto='Opções' width='100%'/></Link>
              
            </div>
                       
        </div>
    </div>
  )
}

export default Laboratorio