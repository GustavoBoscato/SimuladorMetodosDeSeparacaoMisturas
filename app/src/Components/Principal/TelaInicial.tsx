import React from 'react'
import './TelaInicial.css';
interface TelaInicialProps {
    h2: string;
    texto1: string;
    texto2: string;
    img: string;
  }
  
  const TelaInicial: React.FC<TelaInicialProps> = ({h2, texto1, texto2, img}) => {
  return (
    <div className='telaInicial'>
        <div className='textoInicial'>
            <h2 className='h2Inicial'>{h2}</h2>
            <p className='pInicial'>{texto1}</p>
            <p className='pInicial2'>{texto2}</p>
        </div>
        <div className="imagem">
            <img className='imgInicial' src={img} alt="Separação de Mistura"/>
        </div>
    </div>
  )
}

export default TelaInicial