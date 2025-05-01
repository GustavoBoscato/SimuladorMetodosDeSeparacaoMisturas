import React, { useState } from 'react'
import Modos from './Modos';
import Laboratorio from './Laboratorio';
const Simular = () => {
  const [Number, setNumber] = useState(0);
  const exibirTelas = (num : Number) => {
    switch (num) {
      case 0:
        return (
          <div>
          
        </div>
        )
      case 1:
        console.log(num)
        break;
      case 2:
        console.log(num)
      break;
      default:
        break;
    }
  }
  const x = 10;

  return (
    <div>
      <Laboratorio/>
    </div>
  )
}

export default Simular