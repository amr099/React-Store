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
        <div className='min-h-screen pt-10'>
            <h2 className='pl-10 capitalize'>{title}</h2>
            <Sort setSortby={setSortby} />
            <div className='flex flex-wrap gap-10 justify-around'>
                {data?.products
                    ?.slice(0)
                    ?.sort(sortFun)
                    ?.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
            </div>
        </div>
    );
}
