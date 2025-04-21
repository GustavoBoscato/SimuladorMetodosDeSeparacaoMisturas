import React from 'react'
import ListaMistura from './ListaMistura'
import { Mistura } from '../../data/Mistura';
import { agua, areia } from '../../data/dataComponentes';

const Laboratorio = () => {
    const mistura1 = new Mistura([agua, areia]);
  return (
    <div className='laboratorio'>
        <ListaMistura h6='Mistura 01' mistura={mistura1}/>
    </div>
  )
}

export default Laboratorio