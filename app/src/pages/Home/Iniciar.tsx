import React from 'react'

import TelaInicial from '../../Components/Principal/TelaInicial'
import InformacaoMistura from '../../Components/Principal/InformacaoMistura';
import decantacao from '../../img/decantação.jpg'
import decantacaoFunilBromo from '../../img/decantação com funil de bromo.jpg';
import filtracao from '../../img/filtração (2).jpg';
import separacaoMagnetica from '../../img/separação magnética.jpg';
import peneiracao from '../../img/peneiração.jpg';
import destilacaoSimples from '../../img/destilação simples.jpg';
import destilacaoFracionada from '../../img/destiladorFracionado.jpg'
import centrifugacao from '../../img/centrífuga.jpg';
import dissolucaoFracionada from '../../img/dissolução fracionada.jpg'
import cientista from '../../img/cientistaComico.jpg';
import laboratorioQuimica from '../../img/laboratorioQuimica.jpg'
import imagemSeparacao from '../../img/imagemSeparacao.jpg'

import './Iniciar.css'
const Iniciar = () => {
  return (
    <div className='iniciar'>
      <TelaInicial img={laboratorioQuimica} h2='Simulador dos métodos de separação de misturas' texto1='Ferramenta interativa para o aprendizado.' texto2='Simule e coloque em prática suas habilidades sobre os métodos de separação de misturas.' texto3='Desafie-se a compreender o conteúdo dos métodos de separação.' texto4='Ideal para o ensino de química.'/>
            
            <div className="infoMetodosSeparacao">
              <div className="metodosSeparacao">

              <h3>Métodos de Separação</h3>
              
              </div>
              <InformacaoMistura img={decantacao} h3='Decantação' texto='Método utilizado para separar líquidos imiscíveis ou sólidos insóluveis em líquidos.' />
              <InformacaoMistura img={decantacaoFunilBromo} h3='Decantação com funil de bromo' texto='Método utilizado para separar líquidos imiscíveis.' />
              <InformacaoMistura img={filtracao} h3='Filtração' texto='Utilizada para separar sólidos insolúveis de líquidos ou gases.' />
              <InformacaoMistura img={separacaoMagnetica} h3='Separação Magnética' texto='Usado para separar materiais magnéticos de substâncias não magnéticas.' />
              <InformacaoMistura img={peneiracao} h3='Peneiração' texto='Método mecânico de separação de sólidos de diferentes tamanhos.' />
              <InformacaoMistura img={destilacaoSimples} h3='Destilação Simples' texto='Separação de misturas homogêneas de líquidos com pontos de ebulição diferentes.' />
              <InformacaoMistura img={destilacaoFracionada} h3='Destilação Fracionada' texto='Processo de separação de misturas de líquidos com pontos de ebulição próximos.' />
              <InformacaoMistura img={centrifugacao} h3='Centrifugação' texto='Processo de separação de partículas de diferentes densidades por meio de rotação.' />
              <InformacaoMistura img={dissolucaoFracionada} h3='Dissolução Fracionada' texto='Separação de misturas sólidas por meio da dissolução preferencial de um dos componentes.' />
            </div>
    </div>
  )
}

export default Iniciar