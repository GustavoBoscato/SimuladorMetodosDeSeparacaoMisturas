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
const ModoFacil = () => {
    const mistura1 = new Mistura([agua, areia]);
  return (
    <div className='laboratorio'>
        <ListaMistura h6='Mistura 01' mistura={mistura1}/>
        <div className="laboratorioOpcoes">
            <div className="topo">
            <img src={IconeVoltar} alt="Imagem voltar" className='imagemVoltar' />
                <h2>Simulação</h2>
                <p id='modoNome'>Modo Fácil</p>
            </div>
            <div className="conteinerFrasco">
              <img src={BicoDeEnyemeyer} alt="FrascoLaboratorio" className='FrascoLaboratorio' draggable="false" />
            </div>
            <div className="botoesLaboratorio">
              <Botao colorFundo='#000' colorTexto='#FDFDFD' texto='Separar' width=''/>
              <SelectMetodos id='metodosModoLivre'/>
              
              
            </div>
                       
        </div>
    </div>
  )
}

export default ModoFacil