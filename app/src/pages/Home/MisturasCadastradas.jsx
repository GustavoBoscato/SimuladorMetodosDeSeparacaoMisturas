import React from 'react'
import OpcaoMistura from '../../Components/Principal/OpcaoMistura'
import './MisturasCadastradas.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Mistura } from '../../data/Mistura'
import { listaComponentes } from '../../data/dataComponentes'
const MisturasCadastradas = () => {
  
  let [MisturaFacil, setMisturaFacil] = useState(listaComponentes[0])
  console.log(MisturaFacil)
  return (
    <div>
        <div className="misturasCadastradas">
          <div className="conteinerOpcaoMistura">
            <Link to='/laboratorioModoFacil'><OpcaoMistura h3='Água, Etanol' texto='Mistura Homogênea L/L'/></Link>
            <Link to='/laboratorioModoFacil'><OpcaoMistura h3='Água, Etanol, Gasolina e Óleo de Cozinha' texto='Mistura Heterogênea L/L'/></Link>
            <Link to='/laboratorioModoFacil'><OpcaoMistura h3='Água, Óleo de Cozinha' texto='Mistura Heterogênea L/L'/></Link>
            <Link to='/laboratorioModoFacil'><OpcaoMistura h3='Brita, Ferro e Açúcar' texto='Mistura Heterogênea S/S'/></Link>
            <Link to='/laboratorioModoFacil'><OpcaoMistura h3='Sal de Cozinha e Açúcar' texto='Mistura Heterogênea S/S'/></Link>
            <Link to='/laboratorioModoFacil'><OpcaoMistura h3='Brita, Ferro, Açúcar e Sal de Cozinha' texto='Mistura Heterogênea S/S'/></Link>
            <Link to='/laboratorioModoFacil'><OpcaoMistura h3='Água e Sal de Cozinha' texto='Mistura Homogênea S/L'/></Link>
            <Link to='/laboratorioModoFacil'><OpcaoMistura h3='Óleo de Cozinha e Açúcar' texto='Mistura Heterogênea S/L'/></Link>
            <Link to='/laboratorioModoFacil'><OpcaoMistura h3='Água, Etanol, Gasolina, Sal de Cozinha e Ferro' texto='Mistura Heterogênea S/L'/></Link>
            
          </div>
          

        </div>
    </div>
  )
}

export default MisturasCadastradas