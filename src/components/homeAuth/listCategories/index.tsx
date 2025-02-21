
import categoriesServices, { CategoryType } from "../../../services/categoriesServices";
import useSWR from "swr";
import ListCategoriesSlide from "../listCategoriesSlide";
import PageSpinner from "../../common/spinner";
const ListCategories = () => {
    const { data, error } = useSWR("/categories", categoriesServices.getCategories);

    console.log("Dados recebidos:", data); 
    if (error) return <p>Erro ao carregar categorias: {error.message}</p>;

    if(!data){
        return <PageSpinner/>
    }

    return (
        <>
            {Array.isArray(data?.categories) && data.categories.length > 0 ? (
                data.categories.map((category: CategoryType) => (
                    <ListCategoriesSlide key={category.id} categoryId={category.id} categoryName={category.name} />
                ))
            ) : (
                <p>Não há categorias disponíveis.</p>
            )}
        </>
    );
};

export default ListCategories