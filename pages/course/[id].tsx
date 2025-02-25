import HeaderAuth from "@/src/components/common/headerAuth"
import PageSpinner from "@/src/components/common/spinner"
import { courseService, CourseType } from "@/src/services/courseService"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Button, Container } from "reactstrap"
import styles from "../../styles/coursePage.module.scss"
import EpisodeList from "@/src/components/common/episodeList"
import { Footer } from "@/src/components/common/footer"
const CoursePage = () => {
    const [course, setCourse] = useState<CourseType | null>(null);
    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const router = useRouter();
    const { id } = router.query;

    const getCourse = async () => {
        if (typeof id !== "string") return;

        try {
            const res = await courseService.getEpisodes(id);
            if (res.status === 200) {
                setCourse(res.data);
                setLiked(res.data.liked); // Corrigido para res.data.liked
                setFavorited(res.data.favorited); // Corrigido para res.data.favorited
            }
        } catch (error) {
            console.error("Erro ao buscar curso:", error);
        }
    };

    useEffect(() => {
        if (id) getCourse();
    }, [id]);

    const imageUrl = course ? `${process.env.NEXT_PUBLIC_BASEURL}/${encodeURI(course.thumbnailUrl)}` : "";

    const handleLikeCourse = async () => {
        if (typeof id !== "string") return;
    
        try {
           
    
            if (liked) {
                const response = await courseService.removeLike(id);
                
    
                setLiked(false);
                const res = await courseService.getEpisodes(id);
         
    
                if (res.status === 200) {
                    setLiked(res.data.liked);
                }
    
            } else {
                await courseService.Like(id);
                setLiked(true);
            }
    
          
        } catch (error) {
            console.error("Erro ao atualizar like:", error);
        }
    };
    const handleFavCourse = async () => {
        if (typeof id !== "string") return;
        try {
            if (favorited) {
                await courseService.removeFav(id);
                setFavorited(false);
            } else {
                await courseService.addFav(id);
                setFavorited(true);
            }
        } catch (error) {
            console.error("Erro ao atualizar favorito:", error);
        }
    };
if(course=== undefined) return <PageSpinner/>
    return (
        <>
            <Head>
                <title>Onebitflix - {course?.name || <PageSpinner />}</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <div
                    style={{
                        backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(${imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "450px",
                    }}
                >
                    <HeaderAuth />
                </div>
                <Container className={styles.courseInfo}>
                    <p className={styles.courseTitle}>{course?.name}</p>
                    <p className={styles.courseDescription}>{course?.synopsis}</p>
                    <Button outline className={styles.courseBtn} disabled={course?.episodes?.length === 0 ? true : false}>
                        ASSISTIR AGORA! <img src="/buttonPlay.svg" alt="buttonImg" className={styles.buttonImg} />
                    </Button>
                    <div className={styles.interations}>
                        <img
                            src={liked ? "/course/iconLike.svg" : "/course/iconLiked.svg"}
                            alt="likeImage"
                            className={styles.interationImg}
                            onClick={handleLikeCourse}
                        />
                        <img
                            src={favorited ? "/course/iconFavorited.svg" : "/course/iconAddFav.svg"}
                            alt="favoriteImage"
                            className={styles.interationImg}
                            onClick={handleFavCourse}
                        />
                    </div>
                </Container>
                <Container className={styles.episodeInfo}>
                    <p className={styles.episodeDivision}>EPISÓDIOS</p>
                    <p className={styles.episodeLength}>{course?.episodes?.length} episódios</p>
                  {
                    course?.episodes?.length === 0 ?(
                    <p>
                        <strong>
                            Não temos episódios ainda, volte outra hora! &#x1F606; &#x1F918;&#x1F380;
                        </strong>
                    </p>
                    ):(
                        course?.episodes?.map((episode)=>(
                            <EpisodeList key={episode.id} episode={episode} course={course}/>
                          ))
                    )
                  }
                </Container>
                <Footer/>
            </main>
        </>
    )
};

export default CoursePage;
