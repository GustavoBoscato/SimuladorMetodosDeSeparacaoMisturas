import React from 'react'
import './LaboratorioOpção.css';
import ListaMisturaHorizontal from '../../Components/Principal/ListaMisturaHorizontal'
import { Mistura } from '../../data/Mistura';
import { agua, areia } from '../../data/dataComponentes';
import Botao from '../../Components/Principal/Botao';
import SelectComponente from '../../Components/Principal/SelectComponente';
import { Link } from 'react-router-dom';
const LaboratorioOpção = () => {
    const mistura1 = new Mistura([agua, areia]);
  return (
    <div>        
        
            <ListaMisturaHorizontal h6='Mistura 01' mistura={mistura1}/>
            <div className="conteinerLaboratorioOpcao">
                

                
            <div className="adicionarOuRemover">
                <div className="conjuntoBotaoSelect">
                    <Botao colorFundo='#59D868' colorTexto='#363636' texto='Adicionar Componente' width='40%'/>
                    <SelectComponente id='selectAdicionarComponente' width='30%'/>
                </div>
                <div className="conjuntoBotaoSelect">
                    <Botao colorFundo='#F11313' colorTexto='#FDFDFD' texto='Remover Componente' width='40%'/>
                    <SelectComponente id='selectRemoverComponente' width='30%'/>
                </div>
                </div>
            </div>
            <div className="resetarMisturaOuVoltar">
                <Botao colorFundo='#2C6ED0' colorTexto='#FDFDFD' texto='Resetar Mistura' className="botaoLaboratorio"/>
                <Link id='voltarLaboratorioOpcao' to="/laboratorio"><Botao colorFundo='#484D50' colorTexto='#FDFDFD' texto='Voltar' className="botaoLaboratorio" width='100%'/></Link>
                </div>
            </div>

        
        
  )
}

export default LaboratorioOpção