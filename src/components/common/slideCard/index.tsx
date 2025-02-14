import styles from "./styles.module.scss"
export const SlideCard=()=>{
    return(
        <>
        <div className={styles.slide}>
            <img src="" alt=""  className={styles.slideImg}/>
            <p className={styles.slideTitle}></p>
            <p className={styles.description}></p>
        </div>
        </>
    )
}