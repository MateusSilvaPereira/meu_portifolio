import styles from './Card.module.css'
import { FaCss3Alt, FaReact, FaJava, FaHtml5 } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa6";
// eslint-disable-next-line react/prop-types, no-unused-vars
function Card({ name, description, html_url }) {

    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>

            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaReact className={styles.react} />
                    <FaHtml5 className={styles.html} />
                    <FaCss3Alt className={styles.css}/>
                    <SiSpring className={styles.spring} />
                    <FaJava className={styles.java}/>
                </div>
                <a href={html_url} target="_blank" rel="nopenner noopenner norefferer  noreferrer"className={styles.botao} >
                <FaArrowRight />
                </a>
            </div>
        </section>
    );
}

export default Card;