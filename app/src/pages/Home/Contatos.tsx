import React from 'react'
import "./Contatos.css"
import imagemSimepe from '../../img/ImagemSimepe2.jpeg'
import imagemSimepe2 from '../../img/ImagemSimepeComRicardo.jpeg'
const Contatos = () => {
  return (
    <div className='contatosPrincipal'>
      <div className="sobreProjetosEImg">
        <div className="sobreProjeto">
        <h2>Nossa História</h2>
        <p>Este projeto se iniciou devido a uma premiação na Olimpíada Mineira de Química 2023 que resultou em uma bolsa de iniciação científica do CNPQ pela UFMG. O projeto foi desenvolvido no IF Sudeste MG, Campus Juiz de Fora.</p>
        <p>Pelo fato dos estudantes (um bolsista e um voluntário) envolvidos no projeto serem do curso técnico em Desenvolvimento de Sistemas integrado ao Ensino Médio, surgiu a ideia de desenvolver um projeto integrando Química com algumas disciplinas do curso Desenvolvimento de Sistemas.</p>
        <p>Dentre várias ideias de projetos, chegamos à elaboração de um Simulador de Métodos de Separação de Misturas, devido a dificuldade de alunos em relação a este conteúdo. Além disso, as ferramentas existentes até então no mercado podem apresentar barreiras linguísticas e/ou econômicas.</p>
        <p>Para desenvolvimento desta aplicação web estudamos os métodos de separação de misturas, e as ferramentas que seriam utilizadas para a programação (React e Typescript), fizemos um modelo do sistema para definir o escopo da aplicação e começamos a programar. Tivemos diversas dificuldades para definir a lógica por trás dos métodos de separação, pois os métodos apresentam diferenças significativas entre si, para isso identificamos padrões em cada componente para que a simulação se torne o mais real possível.</p>
        <p>Como resultado de meses de esforço, conseguimos desenvolver essa aplicação na qual você está utilizando agora. Caso tenha alguma sugestão e/ou crítica para melhorias no simulador, nos envie, por favor! Seu feedback é muito importante para alcançarmos nosso objetivo de facilitar o processo de ensino/aprendizagem em relação aos principais métodos de separação de misturas abordados no conteúdo de Química.</p>
        
        </div>
        <div className="imgContato">
          <img src={imagemSimepe}/>
          <img className='imgSimepe2' src={imagemSimepe2}/>
      </div>
      </div>
      
      <div className="contatos">
        <h2>Contatos para feedbacks e correções de bugs.</h2>
        <h3>Email: </h3>
        <p><b>Bolsista:</b> curiosoxcdf@gmail.com</p>
        <p><b>Orientadora:</b> roberta.reis@ifsudestemg.edu.br</p>
        <p><b>Coorientador:</b> roberto.ferreira@ifsudestemg.edu.br</p>
        
      </div>  
    </div>

  )
}

export default Contatos