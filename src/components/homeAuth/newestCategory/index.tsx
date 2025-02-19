import { courseService } from "@/src/services/courseService";
import useSWR from "swr";
import { SlideComponent } from "../../common/slideComponent";
import styles from "../../../../styles/slideCategory.module.scss"
const NewestCategory=()=>{
    const {data,error}=useSWR("/courses/newest", courseService.getNewestCourse)
    if(error) return error;
    if(!data){
        return(
            <p>Loading</p>
        )
    }
    return(
        <>
        <p className={styles.titleCategory}>LANÇAMENTOS</p>
        <SlideComponent course={data|| []}/>
        </>
    )
}
export default NewestCategory