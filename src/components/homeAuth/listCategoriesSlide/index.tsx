import categoriesServices from "@/src/services/categoriesServices"
import useSWR from "swr"
import styles from "../../../../styles/slideCategory.module.scss"
import { SlideComponent } from "../../common/slideComponent";
import PageSpinner from "../../common/spinner";
interface props{
    categoryId:number;
    categoryName:string
}
const ListCategoriesSlide = ({ categoryId, categoryName }: props) => {
    const { data, error } = useSWR(`/categoriesCourses/${categoryId}`, () => categoriesServices.getCourses(categoryId));
    console.log("Dados da categoria e cursos:", data);
    console.log("Tipo de data:", typeof data);
    console.log("Estrutura de data:", JSON.stringify(data, null, 2));
    if (error) return <p>Erro ao carregar categorias: {error.message}</p>;
    if(!data){
        return <PageSpinner/>
    }

    return (
        <>
            <p className={styles.titleCategory}>{categoryName}</p>
            {data.courses && data.courses.length > 0 ? (
                <SlideComponent course={data.courses} />
            ) : (
                <p>Não há cursos disponíveis nesta categoria.</p>
            )}
        </>
    );
};

export default ListCategoriesSlide