import React, { useState } from "react";
import ProductsPage from "src/Components/Products/ProductsPage";
import { useGetProductsQuery } from "src/features/products/productsApiSlice";
import { Pagination } from "./../Components/Pagination";
import FilterByCategory from "../Components/Categories/FilterByCategory";

export default function Shop() {
  const [active, setActive] = useState(1);
  const { data } = useGetProductsQuery((active - 1) * 10);

  return (
    <>
      {/* <FilterByCategory /> */}
      <ProductsPage data={data}></ProductsPage>
      <Pagination active={active} setActive={setActive} />
    </>
  );
}
