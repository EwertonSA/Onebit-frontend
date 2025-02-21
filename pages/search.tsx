import HeaderAuth from "@/src/components/common/headerAuth"
import { courseService, CourseType } from "@/src/services/courseService"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "../styles/search.module.scss";
import { Container } from "reactstrap"
import SearchCard from "@/src/components/searchCard"
import { Footer } from "@/src/components/common/footer"

const Search=()=>{
    const router=useRouter()
    const searchName:any=router.query.name
    const[result,setResult]=useState<CourseType[]>([])

    const searchCourses=async()=>{
        if(searchName && typeof searchName === "string"){
            const res=await courseService.getSearch(searchName)
            if (res.status === 200 && res.data?.courses?.length > 0) {
                setResult(res.data.courses);
            } else {
                <p className={styles.noSearchText}>Nenhum resultado encontrado</p>
            }
        }
    }
    useEffect(()=>{
        if(searchName){
searchCourses()}
    },[searchName])
    return(
    <>
    <Head>
<title>Onebitflix - {"searchName"}</title>
<link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
    </Head>
    <main className={styles.main}>
        <div className={styles.footerHeaderBg}> 
        <HeaderAuth/>
        </div>


        {result.length >= 1 ? (
          <div className={styles.searchResult}>
            <Container className="d-flex flex-wrap justify-content-center py-4 gap-5">
            {result?.map((course) => (
              <SearchCard key={course.id} course={course} />
            ))}
          </Container>
          </div>
        ) : (
          <p className={styles.noSearchText}>Nenhum resultado encontrado!</p>
        )}
          <div className={styles.footerHeaderBg}> 
        <Footer/>
        </div>
    </main> 
    </>
    )
}
export default Search