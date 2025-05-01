import React from 'react'
import './Modos.css';
import { Link } from 'react-router-dom';
interface ModosProps {
    titulo: string;
    titulo2: string;
    texto: string;
    texto2: string;
    img?: string;
    img2?: string;
    
  }
  const Modos: React.FC<ModosProps> = ({titulo, titulo2,texto, texto2, img, img2}) => {
  
    return (
    <section className='Modos'>
        <h3>Modos</h3>
        <p>Selecione o modo desejado.</p>
      
        <div className="opcoes">
        <Link to='/modoFacil' className='linkModos'>
        <div className="textoMistura">
          
            <h3 className='h3Mistura'>{titulo}</h3>
            <p className='paragrafoMistura'>{texto}</p>
          
          </div>
          </Link>
        <Link to="/laboratorio" className='linkModos'>
        <div className="textoMistura">
          
          <h3 className='h3Mistura'>{titulo2}</h3>
          <p className='paragrafoMistura'>{texto2}</p>
        
        </div>
        </Link>
          
          
          </div>
          
      </section>
  )
}

export default Modos