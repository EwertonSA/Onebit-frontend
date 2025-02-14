import { api } from "./api"
export type EpisodeType={
    id:number
    name:string
    synopsis:string
    order:number
    videoUrl:string
    secondsLong:number
    episode?:EpisodeType[]

}

export type CourseType={
    id:number
    name:string
    thumbnailUrl:string
    synopsis:string
}
export const coourseService={
getNewestCourse: async()=>{
    const res=await api.get("/course/newest").catch((error)=>{
        console.log(error.response.data.message)
        return error.message
    })
    return res;
}
}