import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom';
import logoNavbar from '../../img/logoNavbar.png'
const Navbar = () => {
  return (
    <nav>
      <ul className='ulNavbar'>
        <li><Link to="/"><img src={logoNavbar} id='logoNavbar'/></Link></li>
        <li id='navSimulador'><Link to="/">Simulador Dos Métodos de Separação</Link></li>
        <li ><Link className='link' to='/'>Página Inicial</Link></li>
        <li><Link className='link' to='/simular'>Simular</Link></li>
        <li><Link className='link' to='/listaComponente'>Lista dos Componentes</Link></li>
        <li><Link className='link' to='/contatos'>Contatos</Link></li>
        
      </ul>
    </nav>
  )
}

export default Navbar