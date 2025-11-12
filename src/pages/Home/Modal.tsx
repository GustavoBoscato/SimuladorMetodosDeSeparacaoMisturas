import React from 'react'
import "./Modal.css";
import { ComponenteMistura } from '../../data/ComponenteMistura';
interface iModal {
    texto: string
    isOpen: boolean
    setIsOpen: Function
}
const Modal = ({texto, isOpen, setIsOpen} : iModal) => {
    if (isOpen) {
        return (
    <div className='backgroundModal'>
        <div className="modal">
            <p>{texto}</p>
            <button onClick={() => {
            setIsOpen(!isOpen)
        }}>Fechar</button>
    </div>
        </div>
        
  )    
    } else {
        return null
    }
    
}

export default Modal