import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchQuery } from "src/features/products/productsApiSlice";
import ProductsPage from "src/Components/ProductsPage";

export default function SearchPage() {
    const [param, setParam] = useSearchParams();
    const { data } = useSearchQuery(param.get("q"));

    return <ProductsPage data={data} title={`Search: ${param.get("q")}`} />;
}
