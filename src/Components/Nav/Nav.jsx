import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    MagnifyingGlassIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Badge } from "@material-tailwind/react";
import CustomMenu from "./../CustomMenu";
import { useSelector } from "react-redux";
import SignIn from "./../../GoogleAuth/SignIn";

export default function Nav({ setSearchbar, searchbar }) {
    const [scroll, setScroll] = useState(false);
    const cartItems = useSelector((state) => state.cart.items);

    const getCartQuantity = () => {
        let q = 0;
        cartItems.map((item) => (q += Number(item.quantity)));
        return q;
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <nav
            className={`${
                scroll ? "fixed bg-sky-100" : "absolute"
            }  z-10 flex flex-nowrap w-[100%] justify-around items-center border-b-2  gap-4 md:gap-20 `}
        >
            <Link to='/'>
                <h1 className='whitespace-nowrap text-lg md:text-3xl font-bold pl-2'>
                    {" "}
                    React Store
                </h1>
            </Link>
            <CustomMenu />
            <div className='flex gap-4 items-center'>
                <MagnifyingGlassIcon
                    className='h-6 md:h-8 w-6 md:w-8 hover:cursor-pointer'
                    onClick={() => setSearchbar(!searchbar)}
                />
                {getCartQuantity() !== 0 ? (
                    <Badge content={getCartQuantity()}>
                        <Link to='cart'>
                            <ShoppingCartIcon className='h-8 md:h-10 w-8 md:w-10 pr-2' />
                        </Link>
                    </Badge>
                ) : (
                    <Link to='cart'>
                        <ShoppingCartIcon className='h-8 md:h-10 w-8 md:w-10 pr-2' />
                    </Link>
                )}
                <SignIn />
            </div>
        </nav>
    );
}
