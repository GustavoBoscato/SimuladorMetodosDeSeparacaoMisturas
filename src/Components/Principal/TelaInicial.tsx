import React from 'react'
import './TelaInicial.css';
import { Atom } from 'lucide';
import iconeLivro from '../../img/iconeLivro.png'
import iconeLivroFechado from '../../img/iconeLivroFechado.png';
import iconeFoguete from '../../img/iconeFoguete.png'
import iconeAtomo from '../../img/iconeAtomo.png';
interface TelaInicialProps {
    h2: string;
    texto1: string;
    texto2: string;
    texto3: string;
    texto4: string;
    img: string;
  }
  
  const TelaInicial: React.FC<TelaInicialProps> = ({h2, texto1, texto2, texto3, texto4, img}) => {
  return (
    <div className='telaInicial'>
        <div className='textoInicial'>
            <h2 className='h2Inicial'>{h2}</h2>
            <p className='pInicial'><img draggable="false" src={iconeLivro} alt="Icone Livro" />   {texto1}  </p>
            
            <p className='pInicial'><img draggable="false" src={iconeFoguete} alt="Icone Foguete" />   {texto2}</p>
            <p className='pInicial'><img draggable="false" src={iconeLivroFechado} alt="Icone LivroFechado" />   {texto3}</p>
            <p className='pInicial'><img draggable="false" src={iconeAtomo} alt="Icone Atomo" />    {texto4}</p>
        </div>
        <div className="imagem">
            <img className='imgInicial' draggable="false" src={img} alt="Separação de Mistura"/>
        </div>
    </div>
  )
}

export default TelaInicial