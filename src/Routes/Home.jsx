import React from "react";
import banner from "../assets/banner.jpg";
import { useGetCategoryQuery } from "src/features/products/productsApiSlice";
import Slider from "src/Components/Slider";

export default function Home() {
    const phones = useGetCategoryQuery("smartphones");
    const laptops = useGetCategoryQuery("laptops");
    const watches = useGetCategoryQuery("mens-watches");
    const sunglasses = useGetCategoryQuery("sunglasses");
    return (
        <>
            <img src={banner} className='w-full h-96  object-center'></img>
            <main className='mx-auto w-[90%] flex flex-col'>
                <Slider data={phones?.data} title={"Smartphones"} />
                <Slider data={laptops?.data} title={"Laptops"} />
                <Slider data={watches?.data} title={"Menswatches"} />
                <Slider data={sunglasses?.data} title={"Sunglasses"} />
            </main>
        </>
    );
}
