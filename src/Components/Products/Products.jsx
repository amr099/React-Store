import React from "react";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "../../features/products/productsApiSlice";

export default function Products() {
    const { data } = useGetProductsQuery();

    return (
        data && (
            <>
                <h2>Top Deals</h2>
                <div className='flex gap-5 m-5 flex-wrap justify-around overflow-x-auto'>
                    {data?.products?.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </>
        )
    );
}
