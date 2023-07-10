import React from "react";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "../../features/products/productsApiSlice";
import Slider from "react-slick";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Products() {
    const { data } = useGetProductsQuery();

    return (
        data && (
            <Slider {...settings}>
                {/* {data?.products?.map((product) => ( */}
                <div className='!flex justify-around'>
                    <ProductCard product={data?.products[0]} />
                    <ProductCard product={data?.products[1]} />
                    <ProductCard product={data?.products[2]} />
                    <ProductCard product={data?.products[3]} />
                </div>
                <div className='!flex justify-around'>
                    <ProductCard product={data?.products[4]} />
                    <ProductCard product={data?.products[5]} />
                    <ProductCard product={data?.products[6]} />
                    <ProductCard product={data?.products[7]} />
                </div>

                {/* ))} */}
            </Slider>
        )
    );
}
