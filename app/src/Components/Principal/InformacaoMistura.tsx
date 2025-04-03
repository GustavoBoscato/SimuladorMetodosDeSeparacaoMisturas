import React from 'react'
import './InformacaoMistura.css';

interface InformacaoMisturaProps {
    h3: string;
    texto: string;
    img?: string;
  }
  const InformacaoMistura: React.FC<InformacaoMisturaProps> = ({ h3, texto, img }) => {
    return (
      <section>
        <div className="img">
        {img && <img src={img} className='imgMistura'/>}
        </div>
        <div className="textoMistura">
          <h3 className='h3Mistura'>{h3}</h3>
          <p className='paragrafoMistura'>{texto}</p>
          </div>
          
      </section>
    );
  };
  
export default InformacaoMistura