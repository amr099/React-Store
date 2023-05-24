import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Badge } from "@material-tailwind/react";
import { useSelector } from "react-redux";

export default function Nav() {
    const cart = useSelector((state) => state.cart.items.length);
    return (
        <nav className='flex flex-nowrap  w-[100%] justify-around items-center border-b-2 py-4 gap-4 md:gap-20 '>
            <Link to='/'>
                <h1 className='whitespace-nowrap text-lg md:text-3xl font-bold pl-2'>
                    {" "}
                    React Store
                </h1>
            </Link>

            <Search />
            {cart !== 0 ? (
                <Badge content={cart}>
                    <Link to='cart'>
                        <ShoppingCartIcon className='h-8 md:h-12 w-8 md:w-12 pr-2' />
                    </Link>
                </Badge>
            ) : (
                <Link to='cart'>
                    <ShoppingCartIcon className='h-8 md:h-12 w-8 md:w-12 pr-2' />
                </Link>
            )}
        </nav>
    );
}
