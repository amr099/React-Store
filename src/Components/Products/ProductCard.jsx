import React, { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { addToCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
    Badge,
    Rating,
} from "@material-tailwind/react";
import ProductDetails from "./ProductDetails";
export default function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <>
            <Card className='w-48 xl:w-72 !flex !justify-between h-96 my-4'>
                <CardHeader
                    shadow={false}
                    floated={false}
                    className='h-32 xl:h-52 hover:cursor-pointer'
                    onClick={handleOpen}
                >
                    <img
                        src={product.thumbnail}
                        className='w-full h-full object-cover'
                    />
                </CardHeader>
                <CardBody onClick={handleOpen}>
                    <div className='flex items-center justify-between gap-3 mb-2 hover:cursor-pointer'>
                        {/* <Link to={`/products/${product.id}`}> */}
                        <h4
                            color='blue-gray'
                            className='text-xs font-semibold text-primary lg:text-base'
                        >
                            {product.title}
                        </h4>
                        <h4
                            color='blue-gray'
                            className='self-end text-xs font-semibold text-primary lg:text-base'
                        >
                            ${product.price}
                        </h4>
                    </div>
                    <div className='flex justify-between items-center'>
                        <Rating value={Math.floor(product.rating)} readonly />
                        <Typography
                            variant='small'
                            color='gray'
                            className='font-bold opacity-75 text-ellipsis overflow-hidden w-42'
                        >
                            {product.rating}
                        </Typography>
                    </div>
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
            <ProductDetails
                product={product}
                open={open}
                handleOpen={handleOpen}
                dispatch={dispatch}
                setQuantity={setQuantity}
                quantity={quantity}
            />
        </>
    );
}
