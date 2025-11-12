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
        
        <div className="textoMistura">
          <div className="img">
          {img && <img src={img} draggable="false" className='imgMistura'/>}
          </div>
          <div className="textoInformacaoMistura">
            <h3 className='h3Mistura'>{h3}</h3>
            <p className='paragrafoMistura'>{texto}</p>
          </div>
          
          </div>
          
      </section>
    );
  };
  
export default InformacaoMistura