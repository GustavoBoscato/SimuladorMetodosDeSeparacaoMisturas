import React from 'react'
import './Botao.css';

interface BotaoProps {
    colorFundo: string;
    colorTexto: string;
    texto: string;
    
  }
  const Botao: React.FC<BotaoProps> = ({colorFundo, colorTexto, texto}) => {
  return (
    <>
    <button className='buttonPadrao' style={{backgroundColor: colorFundo, color: colorTexto}}>{texto}</button>
    </>
  )
}

export default Botao