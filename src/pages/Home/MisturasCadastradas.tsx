import React from 'react'
import OpcaoMistura from '../../Components/Principal/OpcaoMistura'
import './MisturasCadastradas.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Mistura } from '../../data/Mistura'
import { listaComponentes } from '../../data/dataComponentes'
import { listaMisturasModoFacil } from '../../data/dataMisturas';
import { createContext } from 'vm'
import aguaEtanol from '../../img/aguaEtanol.jpg';
import aguaEtanolGasolinaOleoCozinha from '../../img/aguaEtanolGasolinaOleoCozinha.jpg';
import aguaOleoCozinha from '../../img/aguaOleoCozinha.jpg';
import britaFerroAcucar from '../../img/britaFerroAcucar.jpg';
import salCozinhaAcucar from '../../img/salCozinhaAcucar.jpg';
import britaFerroAcucarSalCozinha from '../../img/britaFerroAcucarSalCozinha.jpg';
import aguaSalCozinha from '../../img/aguaSalCozinha.jpg';
import oleoCozinhaAcucar from '../../img/oleoAcucar.jpg';
import aguaEtanolGasolinaSalCozinhaFerro from '../../img/aguaEtanolGasolinaSalCozinhaFerro.jpg'
type MisturasCadastradasProps = {
  selecionarMisturaModoFacil: (index: number) => void;
};
const MisturasCadastradas = ({selecionarMisturaModoFacil} : MisturasCadastradasProps) => {
  
  return (
    <div>
        <div className="misturasCadastradas">
          <div className="conteinerOpcaoMistura">
            <Link onClick={() =>selecionarMisturaModoFacil(0)} to='/laboratorioModoFacil'><OpcaoMistura img={aguaEtanol} h3='Água, Etanol' texto='Mistura Homogênea L/L'/></Link>
            <Link onClick={() =>selecionarMisturaModoFacil(1)} to='/laboratorioModoFacil'><OpcaoMistura img={aguaEtanolGasolinaOleoCozinha} h3='Água, Etanol, Gasolina e Óleo de Cozinha' texto='Mistura Heterogênea L/L' /></Link>
            <Link onClick={() =>selecionarMisturaModoFacil(2)} to='/laboratorioModoFacil'><OpcaoMistura img={aguaOleoCozinha} h3='Água, Óleo de Cozinha' texto='Mistura Heterogênea L/L' /></Link>
            <Link onClick={() =>selecionarMisturaModoFacil(3)} to='/laboratorioModoFacil'><OpcaoMistura img={britaFerroAcucar} h3='Brita, Ferro e Açúcar' texto='Mistura Heterogênea S/S' /></Link>
            <Link onClick={() =>selecionarMisturaModoFacil(4)} to='/laboratorioModoFacil'><OpcaoMistura img={salCozinhaAcucar} h3='Sal de Cozinha e Açúcar' texto='Mistura Heterogênea S/S'/></Link>
            <Link onClick={() =>selecionarMisturaModoFacil(5)} to='/laboratorioModoFacil'><OpcaoMistura img={britaFerroAcucarSalCozinha} h3='Brita, Ferro, Açúcar e Sal de Cozinha' texto='Mistura Heterogênea S/S'/></Link>
            <Link onClick={() =>selecionarMisturaModoFacil(6)} to='/laboratorioModoFacil'><OpcaoMistura img={aguaSalCozinha} h3='Água e Sal de Cozinha' texto='Mistura Homogênea S/L' /></Link>
            <Link onClick={() =>selecionarMisturaModoFacil(7)} to='/laboratorioModoFacil'><OpcaoMistura img={oleoCozinhaAcucar} h3='Óleo de Cozinha e Açúcar' texto='Mistura Heterogênea S/L'/></Link>
            <Link onClick={() =>selecionarMisturaModoFacil(8)} to='/laboratorioModoFacil'><OpcaoMistura img={aguaEtanolGasolinaSalCozinhaFerro} h3='Água, Etanol, Gasolina, Sal de Cozinha e Ferro' texto='Mistura Heterogênea S/L'/></Link>
            
          </div>
          

        </div>
    </div>
  )
}

export default MisturasCadastradas
