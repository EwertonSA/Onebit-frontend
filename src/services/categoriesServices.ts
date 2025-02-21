
import { CourseType } from "./courseService";
import { api } from "./api";

export type CategoryType={
    id:number;
    name:string;
    position:string;
    courses?:CourseType[]
};
const categoriesServices= {
  
    getCategories: async () => {
        const token = sessionStorage.getItem("onebitflix-token");
    
        try {
            const res = await api.get("/categories", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
    
            console.log("Resposta da API:", res);
    
            return res.data;
        } catch (err) {
            console.error("Erro ao buscar categorias:", err);
            return null;
        }
    },
    
    getCourses: async (id: number) => {
        const token = sessionStorage.getItem("onebitflix-token");
    
        try {
            const res = await api.get(`/categories/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
    
            console.log("Dados da categoria:", res.data); 
    
            return res.data; 
        } catch (err) {
            console.error("Erro ao buscar cursos:", err);
            return { course: [] };  
        }
    },

    }

export default categoriesServices