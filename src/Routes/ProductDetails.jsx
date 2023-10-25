import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useGetProductQuery } from "src/features/products/productsApiSlice";
import {
    Carousel,
    Badge,
    Button,
    Typography,
    Rating,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function ProductDetails() {
    const { id } = useParams();
    const { data } = useGetProductQuery(id);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='relative min-h-[70vh] flex items-center mt-4 lg:pt-0'>
            <section className='flex gap-20 flex-wrap justify-around mx-auto'>
                <Carousel className='rounded-xl w-[90%] md:w-[25%] mx-auto'>
                    {data?.images?.map((img) => (
                        <img src={img} alt='' className='w-[100%] h-[300px]' />
                    ))}
                </Carousel>
                <div className='flex flex-col gap-8 w-[75%] md:w-[50%] pt-4'>
                    <div className=' flex flex-col flex-wrap justify-between'>
                        <h2 className='text-primary'>{data?.title}</h2>
                        <Typography
                            variant='small'
                            color='gray'
                            className='font-normal opacity-75'
                        >
                            {data?.description}
                        </Typography>
                        <h4 className='pt-8 text-primary'>$ {data?.price}</h4>
                        <div className='flex gap-4 items-center'>
                            {data?.rating && (
                                <Rating
                                    value={Math.floor(data.rating)}
                                    readonly
                                />
                            )}
                            <Typography
                                variant='small'
                                color='gray'
                                className='font-bold opacity-75 text-ellipsis overflow-hidden w-42'
                            >
                                {data?.rating}
                            </Typography>
                        </div>
                    </div>
                    <hr />
                    <div className='flex flex-wrap justify-between md:gap-14 md:justify-normal'>
                        <Button
                            ripple={false}
                            className='flex gap-1 justify-center items-center shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100'
                            onClick={() => {
                                dispatch(addToCart(data));
                                setQuantity((state) => (state += 1));
                            }}
                        >
                            Add to Cart{" "}
                            {quantity ? (
                                <Badge content={quantity} color='green'>
                                    <ShoppingCartIcon className='w-5 h-5' />
                                </Badge>
                            ) : (
                                <ShoppingCartIcon className='w-5 h-5' />
                            )}
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
