import React from 'react'
import ListaMistura from './ListaMistura'
import { Mistura } from '../../data/Mistura';
import { agua, areia } from '../../data/dataComponentes';
import './Laboratorio.css';
import IconeVoltar from '../../img/IconeVoltar.png';
import BicoDeEnyemeyer from '../../img/frascoLaboratorio.png' ;
import Botao from './Botao';
import SelectMetodos from './SelectMetodos';
import { Link } from 'react-router-dom';
const Laboratorio = () => {
    const mistura1 = new Mistura([agua, areia]);
  return (
    <div className='laboratorio'>
        <ListaMistura h6='Mistura 01' mistura={mistura1}/>
        <div className="laboratorioOpcoes">
            <div className="topo">
            <img src={IconeVoltar} alt="Imagem voltar" className='imagemVoltar' />
                <h2>Simulação</h2>
                <p id='modoNome'>Modo Difícil</p>
            </div>
            <div className="conteinerFrasco">
              <img src={BicoDeEnyemeyer} alt="FrascoLaboratorio" className='FrascoLaboratorio' draggable="false" />
            </div>
            <div className="botoesLaboratorio">
              <Botao colorFundo='#000' colorTexto='#FDFDFD' texto='Separar'/>
              <SelectMetodos id='metodosModoLivre'/>
              <Link id='voltarLaboratorio' to="/laboratorioOpcao"><Botao colorFundo='#484D50' colorTexto='#FDFDFD' texto='Opções' width='100%'/></Link>
              
            </div>
                       
        </div>
    </div>
  )
}

export default Laboratorio