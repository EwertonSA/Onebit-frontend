import HeaderAuth from "@/src/components/common/headerAuth"
import { courseService, CourseType } from "@/src/services/courseService"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

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
                console.log("Nenhum curso encontrado");
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
    <main>
<HeaderAuth/>
{result?.map((course)=>(
    <div key={course.id}>
<p>{course.name}</p>
    </div>
))}
    </main> 
    </>
    )
}
export default Search