import React from "react";
import Products from "src/Components/Products/Products";
import banner from "../assets/banner.jpg";

export default function Home() {
    return (
        <>
            <img src={banner} className='min-h-fit'></img>
            <main className='mx-auto w-[90%]'>
                <hr />
                <Products />
            </main>
        </>
    );
}
