import React from 'react'
import './ListaMistura.css';
import { Mistura } from '../../data/Mistura';
interface ListaMisturaProps {
    h6: string;
    mistura : Mistura;
  }
  const ListaMistura: React.FC<ListaMisturaProps> = ({h6, mistura}) => {
  return (
    <div className='ListaMistura'>
        <p>Simulação</p>
        <h6>{h6}</h6>
        <p>Classificação da Mistura: {mistura.classificacao}</p>
        <p>Tipo da Mistura: {mistura.tipo}</p>
        <ul>
          {mistura.itens.map((value) => <li>{value.nome}</li>)}
        </ul>
    </div>
  )
}

export default ListaMistura