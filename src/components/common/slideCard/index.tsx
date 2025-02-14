import styles from "./styles.module.scss"
import { CourseType } from "@/src/services/courseService"

interface props{
    course: CourseType
}

export const SlideCard = ({ course }: props) => {
    const imageUrl = `${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`;
    console.log("Imagem URL: ", imageUrl);

    return (
        <>
            <div className={styles.slide}>
                <img
                    src={imageUrl}
                    alt={course.name}
                    className={styles.slideImg}
                />
                <p className={styles.slideTitle}>{course.name}</p>
                <p className={styles.description}>{course.synopsis}</p>
            </div>
        </>
    );
};