import React from 'react'
import './OpcaoMistura.css';
import { Mistura } from '../../data/Mistura';
interface OpcaoMisturaProps {
    h3: string;
    texto: string;
    img?: string;
    mistura : Mistura;
  }
  const OpcaoMistura: React.FC<OpcaoMisturaProps> = ({h3,texto,img, mistura}) => {
  return (
    <div className='opcaoMistura'>
        <img src={img} alt="Mistura" className='imgMistura' />
        <h3>{h3}</h3>
        <p>{texto}</p>
    </div>
  )
}

export default OpcaoMistura