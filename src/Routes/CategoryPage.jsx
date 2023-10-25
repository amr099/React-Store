import { useParams } from "react-router-dom";
import { useGetCategoryQuery } from "src/features/products/productsApiSlice";
import ProductsPage from "src/Components/Products/ProductsPage";

export default function CategoryPage() {
    const { category } = useParams();
    const { data } = useGetCategoryQuery(category);

    return <ProductsPage data={data} title={category} />;
}
