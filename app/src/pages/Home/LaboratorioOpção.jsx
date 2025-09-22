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
const LaboratorioOpção = ({ misturaDificil, Visualizacao, setVisualizacao }) => {
    const mistura1 = new Mistura([agua, areia]);

    misturaDificil.calcularTipo();
    misturaDificil.calcularClassificacao();
    const itensNaMistura = misturaDificil.itens.map((item) => item.nome);

    const [componentesAdicionar, setComponentesAdicionar] = useState(listaComponentes.filter((item) => !itensNaMistura.includes(item.nome)))
    const [componentesRemover, setComponentesRemover] = useState(!listaComponentes.filter((item) => !itensNaMistura.includes(item.nome)))
    const [SelectAdicionar, setSelectAdicionar] = useState(componentesAdicionar[0]?.nome || '')
    const [SelectRemover, setSelectRemover] = useState(componentesRemover[0]?.nome || '')

    function atualizarSelectAdicionareSelectRemover() {
    const itensNaMistura = misturaDificil.itens.map(item => item.nome);

    const novosAdicionar = listaComponentes.filter(c => !itensNaMistura.includes(c.nome));
    const novosRemover = listaComponentes.filter(c => itensNaMistura.includes(c.nome));

    setComponentesAdicionar(novosAdicionar);
    setComponentesRemover(novosRemover);

    setSelectAdicionar(novosAdicionar[0].nome || '');
    setSelectRemover(novosRemover[0].nome || '');
}

    return (
        <div>

            <ListaMisturaHorizontal h6='Mistura 01' mistura={misturaDificil} />
            <div className="conteinerLaboratorioOpcao">

                <div className="adicionarOuRemover">
                    {
                        SelectAdicionar &&
                        <div className="conjuntoBotaoSelect">
                            <button className='buttonPadrao' onClick={() => {
                                
                                let componentesMistura = listaComponentes.find((value) => value.nome === SelectAdicionar);
                                console.log(componentesMistura)
                                if (componentesMistura) {
                                    misturaDificil.adicionarComponenteMistura(componentesMistura);
                                    atualizarSelectAdicionareSelectRemover();
                                    
                                }

                            }} style={{ backgroundColor: "#59D868", color: '#363636', width: '100%' }}>Adicionar Componente</button>
                            <SelectComponente Select={SelectAdicionar} setSelect={setSelectAdicionar} id='selectAdicionarComponente' width='90%' listaComponentes={componentesAdicionar} />
                        </div>
                    }
                    {
                        SelectRemover &&
                        <div className="conjuntoBotaoSelect">
                            <button className='buttonPadrao' onClick={() => {
                                if (SelectRemover) {
                                    misturaDificil.removerComponenteMistura(SelectRemover);
                                    atualizarSelectAdicionareSelectRemover();
                                }



                            }} style={{ backgroundColor: "#F11313", color: '#FDFDFD', width: '100%' }}>Remover Componente</button>

                            <SelectComponente Select={SelectRemover} setSelect={setSelectRemover} id='selectRemoverComponente' width='90%' listaComponentes={componentesRemover} />
                        </div>
                    }
                </div>
            </div>
            <div className="resetarMisturaOuVoltar">
                <button className='buttonPadrao' onClick={() => {

                    misturaDificil.resetarMistura(agua, etanol);
                    atualizarSelectAdicionareSelectRemover();
                }} style={{ backgroundColor: "#2C6ED0", color: '#FDFDFD', width: '65%' }}>Resetar Mistura</button>

                <button className='buttonPadrao' onClick={() => {
                    if (Visualizacao == true) {
                        setVisualizacao(false)
                    } else {
                        setVisualizacao(true)
                    }
                }} style={{ backgroundColor: '#484D50', color: '#FDFDFD', width: '100%' }}>Voltar</button>
            </div>
        </div>



    )
}

export default LaboratorioOpção