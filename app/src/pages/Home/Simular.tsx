import React, { useState } from 'react'
import Modos from '../../Components/Principal/Modos';
const Simular = () => {
  const [Number, setNumber] = useState(0);
  const exibirTelas = (num : Number) => {
    switch (num) {
      case 0:
        
        break;
      case 1:
        
        break;
      case 2:
        
      break;
      default:
        break;
    }
  }
  const x = 10;

  return (
    <div>
      <Modos h3='Modo Fácil' texto='Iniciantes'/>
    </div>
  )
}

export default Simular