import React, { lazy, Suspense } from "react";
import Banner from "src/Components/Banner";
import Categories from "src/Components/Categories/Categories";
import Products from "src/Components/Products/Products";

export default function Home() {
    return (
        <>
            <Banner />
            <main className='mx-auto w-[90%]'>
                <Categories />
                <hr />
                <Products />
            </main>
        </>
    );
}
