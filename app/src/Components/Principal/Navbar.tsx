import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom';
import logoNavbar from '../../img/logoNavbar.png'
const Navbar = () => {
  return (
    <nav>
      <ul className='ulNavbar'>
        <li><img src={logoNavbar} id='logoNavbar'/></li>
        <li id='navSimulador'>Simulador Dos Métodos de Separação</li>
        <li ><Link className='link' to='/'>Iniciar</Link></li>
        <li><Link className='link' to='/simular'>Simular</Link></li>
        <li><Link className='link' to='/listaComponente'>Lista dos Componentes</Link></li>
        
      </ul>
    </nav>
  )
}

export default Navbar