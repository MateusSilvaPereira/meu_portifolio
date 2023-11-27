import Container from './../../components/Container/index';
import styles from './PageNotFound.module.css'

function PageNotFound() {

    return (
            <Container>
                <h2 className={styles.titulo2}>Algo de errado não está certo!</h2>
                <div className={styles.textos}>
                    <span className={styles.texto_grande}>404</span><br />
                    <strong className={styles.texto_vermelho}>Página Não Localizada!</strong>
                </div>
            </Container>
    );
}

export default PageNotFound;