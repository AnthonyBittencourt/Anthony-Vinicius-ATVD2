import styles from'./App.module.css'
import braçoImg from '../public/braco.png'
import israelBd from '../public/bandeiraisrael.jpg'
import palestinaBd from '../public/bandeirapalestina.jpg'
import acordoQuebrado from '../public/AcordoQuebrado.png'
import bandeirasCard from '../public/bandeirasCard.jpg'
import cidadeCard from '../public/cidadeCard.jpg'
import propostaCard from '../public/propostaCard.jpg'
import vitimasCard from '../public/vitimasCard.jpg'
import Economica from '../public/criseEconomica.avif'
import Humanitaria from '../public/criseHumanitaria.webp'

import { useState, useEffect } from 'react'
import { Card } from './components/card'

function App() {

    const [dados, setDados] = useState([])

  useEffect(() => {
      fetch('/cardsInfo.json')
        .then(response => response.json())
        .then(data => {
          setDados(data)
        })
  }, [])
  
  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">Início</a>
        <a href="#s2">Causas</a>
        <a href="#s3">Propósitos</a>
        <a href="#s4">Atual</a>
        <a href="#s5">Impactos</a>
        <a href="#s6">Aaaa</a>
      </nav>
    <main>
      <section id="s1" className={styles.s1}>
          <div className={styles.left}>
            <img width={300} className={styles.imgIsrael} src={israelBd} alt='israel'/>
          </div>

          <h1>Israel x Palestina</h1>

          <div className={styles.right}>
            <img width={300} className={styles.imgPalestina} src={palestinaBd} alt='palestina'/>
          </div>
      </section>
      <section id='s2' className={styles.s2}>
        <div className={styles.puxada}>
          <img className={styles.braco} src={braçoImg} alt="braço" />
        </div>
        <div className={styles.wrapCards}>
              {dados.map((item) => {
                return(
                  <div key={item.id}>
                    <Card tec={item.titulo} image={item.imagem} text={item.texto}/>
                  </div>
                )
              })}
         </div>
        </section>
      //proposito de cada equipe
      <section id='s3' className={styles.s3}>
        <div className={styles.esquerda}>
          <h2>ISRAEL</h2>
          <div className={styles.botaoIsrael}>
            <p>Existência e Segurança: O principal objetivo de Israel é garantir sua existência como um Estado judeu soberano e independente e assegurar a segurança de seu povo diante das ameaças percebidas de grupos militantes e nações vizinhas.</p>
            <p>Destruição de Capacidades Militantes: Em conflitos atuais, como o de Gaza, Israel visa especificamente destruir as capacidades militares e governamentais de grupos como o Hamas e a Jihad Islâmica, e recuperar reféns feitos por esses grupos.</p>
            <p>Controle Territorial e Fronteiras: Israel busca manter o controle sobre Jerusalém Oriental (que reivindica como sua capital indivisível) e, para alguns setores políticos, manter ou expandir assentamentos na Cisjordânia, além de garantir fronteiras seguras e reconhecidas internacionalmente.</p>
            <p>Reconhecimento: Israel exige o reconhecimento de seu direito de existir como um Estado judeu por parte dos palestinos e de todos os países árabes.</p>
          </div>
        </div>
        <div className={styles.direita}>
          <h2>PALESTINA</h2>
          <div className={styles.botaoPalestina}>
            <p>Autodeterminação e Estado Independente: O objetivo central da maioria dos palestinos é o estabelecimento de um Estado palestino independente e soberano na Cisjordânia, Faixa de Gaza e Jerusalém Oriental, com Jerusalém Oriental como sua capital.</p>
            <p>Fim da Ocupação: Eles buscam o fim da ocupação israelense dos territórios palestinos que começou em 1967 e a suspensão da construção de assentamentos israelenses.</p>
            <p>Direito de Retorno: Uma reivindicação crucial é o direito de retorno para os milhões de refugiados palestinos que fugiram ou foram expulsos de suas casas durante a guerra de 1948 (conhecida como Nakba) e conflitos subsequentes.</p>
            <p>Reconhecimento e Direitos Humanos: Os palestinos buscam reconhecimento internacional de seus direitos humanos e nacionais, incluindo o fim das restrições de movimento, bloqueios e outras medidas que afetam negativamente suas vidas diárias.</p>
          </div>          
        </div>
      </section> 
      //situação atual
      <section id='s4' className={styles.s4}>
        <div className={styles.wrapcardss4}>
          <div className={styles.cardS4}>
            <img className={styles.cardIMG} src={acordoQuebrado} alt='acordo'/>
            <h2>Apesar dos acordos de cessar-fogo mediados por países como Estados Unidos, Egito e Catar, os confrontos e bombardeios persistem. Israel retomou ataques em Gaza após acusar o Hamas de violar a trégua e atrasar a devolução de restos mortais de reféns, enquanto o Hamas nega as acusações e responsabiliza Israel pelo bloqueio da ajuda humanitária.</h2>
          </div>
          <div className={styles.cardS4}>
            <img className={styles.cardIMG} src={bandeirasCard} alt='bandeiras'/>
            <h2>O Conselho de Segurança da ONU aprovou recentemente um plano de paz apoiado pelos EUA para Gaza. No entanto, o primeiro-ministro de Israel, Benjamin Netanyahu, elogiou a iniciativa, enquanto o Hamas a criticou, indicando que a implementação ainda enfrenta resistência significativa. A ONU também autorizou uma força de estabilização na região.</h2>
          </div>
          <div className={styles.cardS4}>
            <img className={styles.cardIMG} src={cidadeCard} alt='situação'/>
            <h2>A situação humanitária na Faixa de Gaza é descrita como a mais grave em quase dois anos, com a população enfrentando fome extrema e hospitais sobrecarregados. A entrada de ajuda humanitária continua a ser um desafio, com bloqueios que dificultam a distribuição.</h2>
          </div>
          <div className={styles.cardS4}>
            <img className={styles.cardIMG} src={vitimasCard} alt='vitimas'/>
            <h2>O conflito, que se intensificou em outubro de 2023, resultou em dezenas de milhares de mortes, a maioria palestinos, e feridos. Israel continua a recuperar os corpos de reféns detidos pelo Hamas, com cerca de 53 pessoas ainda consideradas cativas, aproximadamente 20 delas vivas.</h2>
          </div>
          <div className={styles.cardS4}>
            <img className={styles.cardIMG} src={propostaCard} alt='proposta'/>
            <h2>As propostas para uma solução de dois Estados estão estagnadas, com ações de Israel, como a expansão de assentamentos na Cisjordânia, vistas como um obstáculo para a criação de um Estado palestino viável. </h2>
          </div>
          
        </div>
      </section>  

      //impactos
      <section id='s5' className={styles.s5}>
        <div className={styles.wrapcardss5}>
          <div className={styles.cards5}>
            <p></p>
          </div>
          <div className={styles.cards5}>
            <p></p>
          </div>
          <div className={styles.cards5}>
            <p></p>
          </div>
        </div>
      </section>     

      <section id = "s6" className={styles.s6}>
        <div>
         

        </div>
      </section>


    </main>
    </>
  )
}

export default App
