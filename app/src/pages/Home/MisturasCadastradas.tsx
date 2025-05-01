import React from 'react'
import OpcaoMistura from '../../Components/Principal/OpcaoMistura'
import './MisturasCadastradas.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Mistura } from '../../data/Mistura'
import { listaComponentes } from '../../data/dataComponentes'
import { listaMisturasModoFacil } from '../../data/dataMisturas';
import { createContext } from 'vm'
type MisturasCadastradasProps = {
  selecionarMisturaModoFacil: (index: number) => void;
};
const MisturasCadastradas = ({selecionarMisturaModoFacil} : MisturasCadastradasProps) => {
  
  return (
    <div>
        <div className="misturasCadastradas">
          <div className="conteinerOpcaoMistura">
            <Link onClick={() =>selecionarMisturaModoFacil(0)} to='/laboratorioModoFacil'><OpcaoMistura h3='Água, Etanol' texto='Mistura Homogênea L/L'/></Link>
            <Link onClick={() =>selecionarMisturaModoFacil(1)} to='/laboratorioModoFacil'><OpcaoMistura h3='Água, Etanol, Gasolina e Óleo de Cozinha' texto='Mistura Heterogênea L/L' /></Link>
            <Link onClick={() =>selecionarMisturaModoFacil(2)} to='/laboratorioModoFacil'><OpcaoMistura h3='Água, Óleo de Cozinha' texto='Mistura Heterogênea L/L' /></Link>
            <Link onClick={() =>selecionarMisturaModoFacil(3)} to='/laboratorioModoFacil'><OpcaoMistura h3='Brita, Ferro e Açúcar' texto='Mistura Heterogênea S/S' /></Link>
            <Link onClick={() =>selecionarMisturaModoFacil(4)} to='/laboratorioModoFacil'><OpcaoMistura h3='Sal de Cozinha e Açúcar' texto='Mistura Heterogênea S/S'/></Link>
            <Link onClick={() =>selecionarMisturaModoFacil(5)} to='/laboratorioModoFacil'><OpcaoMistura h3='Brita, Ferro, Açúcar e Sal de Cozinha' texto='Mistura Heterogênea S/S'/></Link>
            <Link onClick={() =>selecionarMisturaModoFacil(6)} to='/laboratorioModoFacil'><OpcaoMistura h3='Água e Sal de Cozinha' texto='Mistura Homogênea S/L' /></Link>
            <Link onClick={() =>selecionarMisturaModoFacil(7)} to='/laboratorioModoFacil'><OpcaoMistura h3='Óleo de Cozinha e Açúcar' texto='Mistura Heterogênea S/L'/></Link>
            <Link onClick={() =>selecionarMisturaModoFacil(8)} to='/laboratorioModoFacil'><OpcaoMistura h3='Água, Etanol, Gasolina, Sal de Cozinha e Ferro' texto='Mistura Heterogênea S/L'/></Link>
            
          </div>
          

        </div>
    </div>
  )
}

export default MisturasCadastradas
