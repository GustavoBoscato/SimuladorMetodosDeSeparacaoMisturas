import React from 'react'
import "./Contatos.css"
import imagemSimepe from '../../img/ImagemSimepe2.jpeg'
const Contatos = () => {
  return (
    <div className='contatosPrincipal'>
      <div className="sobreProjetosEImg">
        <div className="sobreProjeto">
        <h2>Nossa História</h2>
        <p>Este projeto se iniciou devido a uma premiação na OMQ 2023 que resultou em uma bolsa de iniciação científica da UFMG pelo CNPQ.</p>
        <p>Inicialmente, o projeto era para ser apenas de química, mas pelo fato do bolsista ser estudante do curso técnico em Desenvolvimento de Sistemas, surgiu a ideia de integrar um projeto de química com a prática de Desenvolvimento de Sistemas, dessa forma surgindo a ideia de criar uma aplicação que integre os dois.</p>
        <p>Após a decisão dessa união de áreas de conhecimento, tivemos diversas ideias, como fazer um blog de química, um site de experimentos, uma aplicação para aprender a tabela periódica, ou até mesmo utilizar arduíno para automatizar algum processo químico, entretanto tivemos a ideia de fazer um simulador, pesquisamos por diversos artigos científicos e ferramentas e chegamos a conclusão que o melhor a se fazer era um Simulador dos Métodos de Separação, já que diversos alunos do curso técnico em metalurgia do IFSUDESTEMG apresentavam dificuldades no aprendizado do conteúdo, além disso não existia no mercado ferramentas viáveis, e as que poderiam ser utilizadas eram inviáveis devido a barreiras linguísticas e econômicas.</p>
        <p>Logo depois dessas etapas, estudamos os métodos de separação de misturas, e as ferramentas que seriam utilizadas para a programação. React e Typescript, fizemos um modelo do sistema para definir o escopo da aplicação e começamos a programar, tivemos diversas dificuldades para definir a lógica por trás dos métodos de separação, pois os métodos apresentam diferenças significativas entre si, para isso identificamos padrões em cada componente para que a simulação se torne o mais real possível. </p>
        <p>Como resultado de meses de esforço, conseguimos desenvolver essa aplicação na qual você está utilizando agora, caso queira nos ajudar, nos envie feedbacks com sugestões de melhorias e correções de bugs.</p>
        
        </div>
        <div className="imgContato">
          <img src={imagemSimepe} alt="" />
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