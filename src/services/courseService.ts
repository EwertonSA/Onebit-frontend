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
export const courseService = {
    getNewestCourse: async () => {
      try {
        const res = await api.get("/courses/newest");
        return res.data; // Retorna apenas os dados
      } catch (error:any) {
        console.error("Erro ao buscar curso:", error.response?.data?.message || error.message);
        return null; // Retorna null para evitar `undefined`
      }
    }}