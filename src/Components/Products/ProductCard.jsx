import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { addToCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
} from "@material-tailwind/react";

export default function ProductCard({ product }) {
    const dispatch = useDispatch();

    return (
        <Card className='w-96'>
            <CardHeader shadow={false} floated={false} className='h-96'>
                <img
                    src={product.thumbnail}
                    className='w-full h-full object-cover'
                />
            </CardHeader>
            <CardBody>
                <div className='flex items-center justify-between mb-2'>
                    <Link to={`product/${product.id}`}>
                        <Typography color='blue-gray' className='font-medium'>
                            {product.title}
                        </Typography>
                    </Link>
                    <Typography color='blue-gray' className='font-medium'>
                        ${product.price}
                    </Typography>
                </div>
                <Typography
                    variant='small'
                    color='gray'
                    className='font-normal opacity-75'
                >
                    {product.description}
                </Typography>
            </CardBody>
            <CardFooter className='pt-0'>
                <Button
                    ripple={false}
                    fullWidth={true}
                    className='flex gap-1 justify-center items-center bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100'
                    onClick={() => dispatch(addToCart(product))}
                >
                    Add to Cart <ShoppingCartIcon className='w-5 h-5' />
                </Button>
            </CardFooter>
        </Card>
    );
}
