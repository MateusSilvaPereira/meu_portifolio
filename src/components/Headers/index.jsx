import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import { FaCodeBranch } from 'react-icons/fa'
import { useState } from 'react';
import { IoHome } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { FaProjectDiagram } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

function Header() {

    const [ showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    return(
        <header className={styles.header}>

            <Link to="/">
            <span> DEV - MSP <FaCodeBranch /> </span>
           
            </Link>

            <nav className={`${styles.menuSanduich} ${ showMenu ? styles.show : '' }`}
                onClick={toggleMenu}
            >
                <Link to="/"> <IoHome /> Home</Link>
                <Link to="/sobre"> <ImProfile /> Sobre</Link>
                <Link to="/projetos"> <FaProjectDiagram /> Projetos</Link>
                <Link to="/contatos"> <IoIosContact /> Contatos</Link>
            </nav>

            <div className={styles.menuButton}
                onClick={toggleMenu}
            >

                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
        </header>
    )
}

export default Header