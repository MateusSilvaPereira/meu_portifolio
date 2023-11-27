
import styles from './Contato.module.css'

import { GoMail } from 'react-icons/go'
import { BsInstagram, BsYoutube, BsGithub, BsLinkedin } from 'react-icons/bs'
function Contato() {

    return (
                <section className={styles.contatos}>
                    <h2>Contatos</h2>
                    <h3>Entre em Contato</h3>
                    <p>Para que possamos conversar mais sobre.</p>

                    <div className={styles.icones}>
                        <a href="mailto:mateussilvapereira2018@gmail.com" target="_blank" rel="noopener noreferrer">
                            <GoMail className={styles.icone} />
                        </a>

                        <a href="https://www.instagram.com/mateus_silva_pereira_/" target="_blank" rel="noopener noreferrer">
                            <BsInstagram className={styles.instagram} />
                        </a>

                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <BsYoutube className={styles.youtube} />
                        </a>

                        <a href="https://github.com/MateusSilvaPereira" target="_blank" rel="noopener noreferrer">
                            <BsGithub className={styles.github} />  
                        </a>
                        
                        <a href="https://www.linkedin.com/in/mateus-silva-pereira/" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin className={styles.linkedin} />
                        </a>

                    </div>
                </section>
    );
}

export default Contato;