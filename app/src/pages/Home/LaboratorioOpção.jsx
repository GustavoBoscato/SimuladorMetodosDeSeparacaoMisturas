import React, { useState } from 'react'
import './LaboratorioOpção.css';
import ListaMisturaHorizontal from '../../Components/Principal/ListaMisturaHorizontal'
import { Mistura } from '../../data/Mistura';
import { agua, areia } from '../../data/dataComponentes';
import Botao from '../../Components/Principal/Botao';
import SelectComponente from '../../Components/Principal/SelectComponente';
import { Link } from 'react-router-dom';
import { listaComponentes } from '../../data/dataComponentes';
const LaboratorioOpção = ({misturaDificil}) => {
    const mistura1 = new Mistura([agua, areia]);

    misturaDificil.calcularTipo();
    misturaDificil.calcularClassificacao();
    const [SelectAdicionar, setSelectAdicionar] = useState('Água')
    const [SelectRemover, setSelectRemover] = useState('Água')
  return (
    <div>        
        
            <ListaMisturaHorizontal h6='Mistura 01' mistura={misturaDificil}/>
            <div className="conteinerLaboratorioOpcao">
                

                
            <div className="adicionarOuRemover">
                <div className="conjuntoBotaoSelect">
                    <Link to='/laboratorio'><button className='buttonPadrao' onClick={() => {
                                    let componentesMistura = listaComponentes.find((value) => value.nome === SelectAdicionar);
                                    misturaDificil.adicionarComponenteMistura(componentesMistura);
                                    console.log(misturaDificil)
                                    
                                    }} style={{backgroundColor: "#59D868", color: '#363636', width: '100%'}}>Adicionar Componente</button></Link>
                    <SelectComponente setSelect={setSelectAdicionar} id='selectAdicionarComponente' width='30%'/>
                </div>
                <div className="conjuntoBotaoSelect">
                <Link to='/laboratorio'><button className='buttonPadrao' onClick={() => {
                                    let componentesMistura = listaComponentes.find((value) => value.nome === SelectRemover);
                                    misturaDificil.removerComponenteMistura(SelectRemover);
                                    console.log(misturaDificil)
                                    
                                    }} style={{backgroundColor: "#F11313", color: '#FDFDFD', width: '100%'}}>Remover Componente</button></Link>
                    
                    <SelectComponente setSelect={setSelectRemover} id='selectRemoverComponente' width='30%'/>
                </div>
                </div>
            </div>
            <div className="resetarMisturaOuVoltar">
                <Botao colorFundo='#2C6ED0' colorTexto='#FDFDFD' texto='Resetar Mistura' className="botaoLaboratorio"/>
                <Link className='voltarLaboratorioOpcao' to="/laboratorio"><Botao colorFundo='#484D50' colorTexto='#FDFDFD' texto='Voltar' className="botaoLaboratorio" width='100%'/></Link>
                </div>
            </div>

        
        
  )
}

export default LaboratorioOpção