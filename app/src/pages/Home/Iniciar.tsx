import React from 'react'
import TelaInicial from '../../Components/Principal/TelaInicial'
import InformacaoMistura from '../../Components/Principal/InformacaoMistura';
import './Iniciar.css';
const Iniciar = () => {
  return (
    <div className='iniciar'>
      <TelaInicial img='' h2='Seja Bem Vindo!' texto1='Esta é uma feramenta de aprendizado dos métodos de separação de misturas.' texto2='Caro usuário, nesta interativa ferramenta, você poderá aprender e simular o resultado dos principais métodos de separação de misturas. Bem como poderá colocar em cheque suas habilidades por meio de desafios!'/>
            <div className="imgLaboratorio">
              <img src="/img/imagemTelaInicial.png" alt="ImagemTelaInicial" />
            </div>
            <div className="infoMetodosSeparacao">
              <div className="metodosSeparacao">
              <img src="/img/imagemTelaInicial.png" alt="ImagemTelaInicial" />
              <h3>Métodos de Separação</h3>
              
              </div>
              <InformacaoMistura h3='Decantação' texto='Método utilizado para separar líquidos imiscíveis ou sólidos insóluveis em líquidos.' />
              <InformacaoMistura h3='Decantação com funil de bromo' texto='Método utilizado para separar líquidos imiscíveis.' />
              <InformacaoMistura h3='Filtração' texto='Utilizada para separar sólidos insolúveis de líquidos ou gases.' />
              <InformacaoMistura h3='Separação Magnética' texto='Usado para separar materiais magnéticos de substâncias não magnéticas.' />
              <InformacaoMistura h3='Peneiração' texto='Método mecânico de separação de sólidos de diferentes tamanhos.' />
              <InformacaoMistura h3='Destilação Simples' texto='Separação de misturas homogêneas de líquidos com pontos de ebulição diferentes.' />
              <InformacaoMistura h3='Destilação Fracionada' texto='Processo de separação de misturas de líquidos com pontos de ebulição próximos.' />
              <InformacaoMistura h3='Centrifugação' texto='Processo de separação de partículas de diferentes densidades por meio de rotação.' />
              <InformacaoMistura h3='Dissolução Fracionada' texto='Separação de misturas sólidas por meio da dissolução preferencial de um dos componentes.' />
            </div>
    </div>
  )
}

export default Iniciar