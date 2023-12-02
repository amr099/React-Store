import React from "react";
import ProductCard from "./Products/ProductCard";
import { default as SlickSlider } from "react-slick";
import { Spinner } from "@material-tailwind/react";

var settings = {
    dots: true,
    centerMode: true,
    mobileFirst: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

export default function Slider({ data, title }) {
    return (
        <>
            <div className='my-10'>
                <h3 className='text-s lg:text-xl font-bold text-primary mb-4'>
                    {title}
                </h3>
                {!data && (
                    <Spinner color='blue' className='w-16 h-16 mx-auto' />
                )}
                <SlickSlider {...settings}>
                    {data?.products?.map((product) => (
                        <ProductCard product={product} key={product?.id} />
                    ))}
                </SlickSlider>
            </div>
        </>
    );
}
