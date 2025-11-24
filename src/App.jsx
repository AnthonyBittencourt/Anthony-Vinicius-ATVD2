import styles from'./App.module.css'
import braçoImg from '../public/braco.png'
import israelBd from '../public/bandeiraisrael.jpg'
import palestinaBd from '../public/bandeirapalestina.jpg'
import acordoQuebrado from '../public/AcordoQuebrado.png'
import bandeirasCard from '../public/bandeirasCard.jpg'
import cidadeCard from '../public/cidadeCard.jpg'
import propostaCard from '../public/propostaCard.jpg'
import vitimasCard from '../public/vitimasCard.jpg'

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
        <div>
          
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
        <div>
          
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
