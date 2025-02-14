import Link from "next/link"
import styles from "./styles.module.scss"
import { Container,Row,Col,Button } from "reactstrap"
export const PresentationSection=()=>{
    return(
        <>
        <Container className="py-4">
            <Row>
                <Col md className="d-flex flex-column justify-content-center align-items-start">
                <p className={styles.subtittle}>ACESSO ILIMITADO</p>
                <p className={styles.title}>Tenha acesso aos melhores <br /> tutoriais de programação.</p>
                <p className={styles.description}>Estude de onde estiver, a qualquer momento e continue <br /> evoluindo como programador.</p>
                <Link href="/register">
                <Button className={styles.btnCta} outline>ACESSE AGORA <img className={styles.btnImg} src="/buttonPlay.svg" alt="buttonImg" /> </Button>
                </Link>
                </Col>
                <Col md>
                <img src="/homeNoAuth/imgPresentation.png" alt="presentation" className={styles.imgPresentation} />
                </Col>
                <Row>
                    <Col className="d-flex justify-content-center pt-5">
                    <img className={styles.arrowDown} 
                    src="/homeNoAuth/iconArrowDown.svg" alt="arrowDown" />
                    </Col>
                </Row>
            </Row>
        </Container>
        </>
    )
}