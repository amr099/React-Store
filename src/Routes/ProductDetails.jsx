import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useGetProductQuery } from "src/features/products/productsApiSlice";
import { Button } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import { useEffect } from "react";

export default function ProductDetails() {
    const { id } = useParams();
    const { data } = useGetProductQuery(id);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='relative min-h-screen flex items-center'>
            <section className='flex gap-20 flex-wrap justify-around mx-auto'>
                <Carousel className='rounded-xl w-[90%] md:w-[25%] mx-auto'>
                    {data?.images?.map((img) => (
                        <img
                            src={img}
                            alt=''
                            className='h-full w-full object-cover'
                        />
                    ))}
                </Carousel>
                <div className='flex flex-col gap-8 w-[75%] md:w-[50%] pt-4'>
                    <div className=' flex flex-col flex-wrap justify-between'>
                        <h2>{data?.title}</h2>
                        <p className='pt-2'>{data?.description}</p>
                        <h4 className='pt-8'>$ {data?.price}</h4>
                    </div>
                    <hr />
                    <div className='flex flex-wrap justify-between md:gap-14 md:justify-normal'>
                        <Button
                            className='self-end'
                            onClick={() => dispatch(addToCart(data))}
                        >
                            Add To Cart
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
