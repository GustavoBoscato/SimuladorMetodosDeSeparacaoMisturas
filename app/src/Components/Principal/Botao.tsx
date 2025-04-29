import React from 'react'
import './Botao.css';

interface BotaoProps {
    colorFundo: string;
    colorTexto: string;
    texto: string;
    width: string;
  }
  const Botao: React.FC<BotaoProps> = ({colorFundo, colorTexto, texto, width}) => {
  return (
    <>
    <button className='buttonPadrao' style={{backgroundColor: colorFundo, color: colorTexto, width: width}}>{texto}</button>
    </>
  )
}

export default Botao