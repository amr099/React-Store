import React, { useState } from "react";
import ProductCard from "src/Components/Products/ProductCard";
import Sort from "src/Components/Products/Sort";

export default function ProductsPage({ data, title }) {
    const [sortby, setSortby] = useState("");

    const sortFun = (a, b) => {
        if (sortby === "asc") return a.price - b.price;
        else if (sortby === "dec") return b.price - a.price;
        else return;
    };

    return (
        <div className='relative min-h-screen'>
            <h2 className='m-10'>{title}</h2>
            <Sort setSortby={setSortby} />
            <div className='flex flex-wrap justify-around'>
                {data?.products
                    ?.slice(0)
                    .sort(sortFun)
                    ?.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
            </div>
        </div>
    );
}
