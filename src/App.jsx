import styles from'./App.module.css'
import braçoImg from '../public/braco.png'
import israelBd from '../public/bandeiraisrael.jpg'
import palestinaBd from '../public/bandeirapalestina.jpg'

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
      //causas
      <section id='s2' className={styles.s2}>
        <div className={styles.puxada}>
          <img src={braçoImg} alt="braço" />
        </div>
        <div className={styles.wrapCards}>
              {dados.map((item) => {
                return(
                  <div key={item.id}>
                    <Card tec={item.nome} image={item.imagem} text={item.texto}/>
                  </div>
                )
              })}
         </div>
        </section>
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
            
          </div>
          <div className={styles.cardS4}>

          </div>
          <div className={styles.cardS4}>

          </div>
          <div className={styles.cardS4}>

          </div>
          <div className={styles.cardS4}>
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
