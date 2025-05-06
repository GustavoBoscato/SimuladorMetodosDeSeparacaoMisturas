import React from 'react'
import './TabelaComponentes.css'
import { listaComponentes } from '../../data/dataComponentes';
  const TabelaComponentes = () => {
  return (
    <table className='ComponenteTabela'>
        <tr className='ComponenteTabela'>
            <th>Nome</th>
            <th>Densidade</th>
            <th>Ponto de Ebulição</th>
            <th>Tamanho</th>
            <th>Estado Físico</th>
            
        </tr>
        {listaComponentes.map((value) => (
            <tr className='ComponenteTabela'>
                <th>{value.nome}</th>
                <th>{value.densidade}</th>
                <th>{value.pontoDeEbulicao}</th>
                <th>{value.tamanho}</th>
                <th>{value.estadoFisico}</th>
                

            </tr>
                    ))}
    </table>
        
          
        

  )
}

export default TabelaComponentes