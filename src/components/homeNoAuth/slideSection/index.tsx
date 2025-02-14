import { CourseType } from "@/src/services/courseService"
import styles from "./styles.module.scss"
import { Button, Container } from "reactstrap";
import { SlideComponent } from "../../common/slideComponent";
import Link from "next/link";
interface props{
    newestCourses: CourseType[];
}
export const SlideSection =({newestCourses}:props)=>{
    return(
        <>
        <Container>
            <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
            <SlideComponent course={newestCourses}/>
            <Link href="/register">
            <Button outline color="ligth" className={styles.slideSectionBtn}>cadastre para acessar</Button>
            </Link>
        </Container>
        </>
    )
}