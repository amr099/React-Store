import React, { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { addToCart } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
    Badge,
} from "@material-tailwind/react";

export default function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();

    return (
        <Card className='w-52 xl:w-72 !flex !justify-between h-96'>
            <CardHeader shadow={false} floated={false} className='h-32 xl:h-52'>
                <img
                    src={product.thumbnail}
                    className='w-full h-full object-cover'
                />
            </CardHeader>
            <CardBody>
                <div className='flex items-center justify-between gap-3 mb-2'>
                    <Link to={`/products/${product.id}`}>
                        <h4
                            color='blue-gray'
                            className='text-xs font-semibold text-primary lg:text-base'
                        >
                            {product.title}
                        </h4>
                    </Link>
                    <h4
                        color='blue-gray'
                        className='self-end text-xs font-semibold text-primary lg:text-base'
                    >
                        ${product.price}
                    </h4>
                </div>
                {/* <Typography
                    variant='small'
                    color='gray'
                    className='font-normal opacity-75 text-ellipsis overflow-hidden w-42'
                >
                    {product.description}
                </Typography> */}
            </CardBody>
            <CardFooter className='pt-0'>
                <Button
                    ripple={false}
                    fullWidth={true}
                    className='flex gap-1 justify-center items-center bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100'
                    onClick={() => {
                        dispatch(addToCart(product));
                        setQuantity((state) => (state += 1));
                    }}
                >
                    Add to Cart{" "}
                    {quantity ? (
                        <Badge content={quantity} color='green'>
                            <ShoppingCartIcon className='w-5 h-5 text-primary' />
                        </Badge>
                    ) : (
                        <ShoppingCartIcon className='w-5 h-5 text-primary' />
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
}
