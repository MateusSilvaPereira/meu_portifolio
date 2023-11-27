import styles from './Sobre.module.css'
import avatar from './images/avatar.jpg'
import html from './images/icon-html.png'
import css from './images/icon-css.png'
import spring from './images/icon-spring.png'
import js from './images/icon-js.png'
import react from './images/icon-react.png'
import java from './images/java.svg'
import sql from './images/icon-sql.png'


function Sobre() {
    return (
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Mateus Silva</span> <br />
                       <strong> Dev Full Stack</strong>
                    </p>

                    <p>Trabalho com desenvolvimento web desde 2020.</p>

                    <p>Sou apaixonado por transformar ideias em Software.</p>

                    <p>Especializado em Análise e Desenvolvimento de Sistemas, <br />
                        com foco na experiência do usuário.
                    </p>

                </div>
            </div>
            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="ìcone do HTML"className={styles.html} />
                    <img src={css} alt="ìcone do CSS" className={styles.css}/>
                    <img src={js} alt="ìcone do JS" className={styles.js}/>
                    <img src={react} alt="ìcone do REACT" className={styles.react}/>
                    <img src={sql} alt="ìcone do SQL" className={styles.sql}  />
                    <img src={java} alt="ìcone do JAVA" className={styles.java}/>
                    <img src={spring} alt="ìcone do Spring" className={styles.spring}/>
                </div>
            </div>
        </section>
    );
}

export default Sobre;