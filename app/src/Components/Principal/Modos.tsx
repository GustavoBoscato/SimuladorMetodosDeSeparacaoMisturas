import React from 'react'
import './Modos.css';

interface ModosProps {
    h3: string;
    texto: string;
    img?: string;
  }
  const Modos: React.FC<ModosProps> = ({h3,texto,img}) => {
  return (
    <section className='Modos'>
        <div className="img">
        {img && <img src={img} className='imgMistura'/>}
        </div>
        <div className="textoMistura">
          <h3 className='h3Mistura'>{h3}</h3>
          <p className='paragrafoMistura'>{texto}</p>
          </div>
          
      </section>
  )
}

export default Modos