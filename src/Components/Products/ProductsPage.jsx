import React, { useEffect, useState } from "react";
import ProductCard from "src/Components/Products/ProductCard";
import Sort from "src/Components/Products/Sort";

export default function ProductsPage({ data, title }) {
    const [sortby, setSortby] = useState("");

    const sortFun = (a, b) => {
        if (sortby === "asc") return a.price - b.price;
        else if (sortby === "dec") return b.price - a.price;
        else return;
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [data]);

    return (
        <div className='min-h-screen pt-10'>
            <h3 className='pl-10 text-s lg:text-xl font-bold text-primary mb-4 capitalize'>
                {title}
            </h3>
            <Sort setSortby={setSortby} />
            <div className='flex content-start flex-wrap gap-10 justify-around'>
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
