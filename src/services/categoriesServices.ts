
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
    
            console.log("Resposta da API:", res); // 🔍 Logar a resposta completa
    
            // Verifique a estrutura da resposta e ajuste conforme necessário
            return res.data;  // Isso assume que a resposta está em res.data
        } catch (err) {
            console.error("Erro ao buscar categorias:", err);
            return null; // Em caso de erro, retorna null
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
    
            console.log("Dados da categoria:", res.data); // 🔍 Veja no console
    
            return res.data;  // Certifique-se de retornar a estrutura de dados correta.
        } catch (err) {
            console.error("Erro ao buscar cursos:", err);
            return { course: [] };  // Retorna um array vazio para evitar erros de `undefined`
        }
    }
}
export default categoriesServices