import React from "react";
import { useGetCategoryQuery } from "src/features/products/productsApiSlice";
import Slider from "src/Components/Slider";
import { HeroImg } from "src/Components/HeroImg";
import CategoriesSlider from "src/Components/Categories/CategoriesSilder";

export default function Home() {
    const phones = useGetCategoryQuery("smartphones");
    const laptops = useGetCategoryQuery("laptops");
    const watches = useGetCategoryQuery("mens-watches");
    const sunglasses = useGetCategoryQuery("sunglasses");
    return (
        <>
            <HeroImg />
            <main className='mx-auto w-[90%] flex flex-col'>
                <CategoriesSlider title={"Shop by Category"} />
                <Slider data={phones?.data} title={"Smartphones"} />
                <Slider data={laptops?.data} title={"Laptops"} />
                <Slider data={watches?.data} title={"Menswatches"} />
                <Slider data={sunglasses?.data} title={"Sunglasses"} />
            </main>
        </>
    );
}
