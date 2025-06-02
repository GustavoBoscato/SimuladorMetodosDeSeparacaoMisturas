import React, { useState } from 'react'
import './LaboratorioOpção.css';
import ListaMisturaHorizontal from '../../Components/Principal/ListaMisturaHorizontal'
import { Mistura } from '../../data/Mistura';
import { agua, areia, etanol } from '../../data/dataComponentes';
import Botao from '../../Components/Principal/Botao';
import SelectComponente from '../../Components/Principal/SelectComponente';
import { Link } from 'react-router-dom';
import { listaComponentes } from '../../data/dataComponentes';
import { useEffect } from 'react';
const LaboratorioOpção = ({misturaDificil, Visualizacao, setVisualizacao}) => {
    const mistura1 = new Mistura([agua, areia]);

    misturaDificil.calcularTipo();
    misturaDificil.calcularClassificacao();
    const [SelectAdicionar, setSelectAdicionar] = useState('Água')
    const [SelectRemover, setSelectRemover] = useState('Água')
    const [forcarRender, setForcarRender] = useState(0);
    useEffect(() => {
      }, [misturaDificil]);
      useEffect(() => {
      }, [SelectAdicionar]);
      useEffect(() => {}, SelectComponente)
    
  return (
    <div>        
        
            <ListaMisturaHorizontal h6='Mistura 01' mistura={misturaDificil}/>
            <div className="conteinerLaboratorioOpcao">
                

                
            <div className="adicionarOuRemover">
                <div className="conjuntoBotaoSelect">
                    <button className='buttonPadrao' onClick={() => {
                                    let componentesMistura = listaComponentes.find((value) => value.nome === SelectAdicionar);
                                    misturaDificil.adicionarComponenteMistura(componentesMistura);
                                     setForcarRender((value) => value + 1);
                                    
                                    }} style={{backgroundColor: "#59D868", color: '#363636', width: '100%'}}>Adicionar Componente</button>
                    <SelectComponente setSelect={setSelectAdicionar} id='selectAdicionarComponente' width='90%'/>
                </div>
                <div className="conjuntoBotaoSelect">
                <button className='buttonPadrao' onClick={() => {
                                    
                                    misturaDificil.removerComponenteMistura(SelectRemover);
                                    setForcarRender((value) => value + 1);
                                    
                                    }} style={{backgroundColor: "#F11313", color: '#FDFDFD', width: '100%'}}>Remover Componente</button>
                    
                    <SelectComponente setSelect={setSelectRemover} id='selectRemoverComponente' width='90%'/>
                </div>
                </div>
            </div>
            <div className="resetarMisturaOuVoltar">
            <button className='buttonPadrao' onClick={() => {
                                    
                                    misturaDificil.resetarMistura(agua, etanol);
                                    setForcarRender((value) => value + 1);
                                    }} style={{backgroundColor: "#2C6ED0", color: '#FDFDFD', width: '65%'}}>Resetar Mistura</button>
                
                <button className='buttonPadrao' onClick={() => {
                       if (Visualizacao == true) {
                          setVisualizacao(false)
                       } else{
                        setVisualizacao(true)
                       }
                      }} style={{backgroundColor: '#484D50', color: '#FDFDFD', width: '100%'}}>Voltar</button>
                </div>
            </div>

        
        
  )
}

export default LaboratorioOpção