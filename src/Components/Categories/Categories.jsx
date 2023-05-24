import React from "react";
import Category from "./Category";
import { useGetCategoriesQuery } from "src/features/products/productsApiSlice";

export default function Categories() {
    const { data } = useGetCategoriesQuery();
    return (
        data && (
            <>
                <h2 className='mx-auto w-min'>Shop by Category</h2>

                <div className='py-10'>
                    <div className='categories flex flex-wrap gap-2 justify-center overflow-x-auto pl-1'>
                        {data?.map((category) => (
                            <Category name={category} />
                        ))}
                    </div>
                </div>
            </>
        )
    );
}
