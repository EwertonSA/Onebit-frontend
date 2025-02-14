import styles from "./styles.module.scss"
import { Container, Button } from "reactstrap"
export const HeaderNoAuth=()=>{
    return(
        <>
        <div className={styles.ctaSection}>
            <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />
            <p>Se cadastre para ter acesso aos cursos</p>
            <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />

        </div>
        <Container>
            <img src="/logoOnebitflix.svg" alt="logoOnebitflix" />
            <div>
                <Button outline color="primary">Entrar</Button>
            </div>
        </Container>
        </>
    )
}