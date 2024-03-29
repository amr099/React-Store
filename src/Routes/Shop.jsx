import React, { useState } from "react";
import ProductsPage from "src/Components/Products/ProductsPage";
import { useGetProductsQuery } from "src/features/products/productsApiSlice";
import { Pagination } from "./../Components/Pagination";

export default function Shop() {
    const [active, setActive] = useState(1);
    const { data } = useGetProductsQuery((active - 1) * 12);

    return (
        <>
            <ProductsPage data={data}></ProductsPage>
            <Pagination active={active} setActive={setActive} />
        </>
    );
}
