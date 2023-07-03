import { Badge, Navbar } from "@material-tailwind/react";
import ProfileMenu from "./ProfileMenu";
import CategoriesMenu from "./CategoriesMenu";
import { useSelector } from "react-redux";
import SignIn from "../../GoogleAuth/SignIn";
import {
    ShoppingCartIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Nav({ searchbar, setSearchbar, scroll }) {
    const user = useSelector((state) => state.auth);
    const cartItems = useSelector((state) => state.cart.items);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const getCartQuantity = () => {
            let q = 0;
            cartItems?.map((item) => (q += Number(item.quantity)));
            setQuantity(q);
        };
        getCartQuantity();
    }, [cartItems]);

    return (
        <>
            <Navbar
                className={`${
                    scroll && "fixed"
                } top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4`}
            >
                <div className='flex items-center justify-between text-blue-gray-900'>
                    <Link to='/'>
                        <h1 className='whitespace-nowrap text-sm md:text-3xl font-bold pl-2'>
                            {" "}
                            React Store
                        </h1>
                    </Link>
                    <CategoriesMenu />
                    <div className='flex gap-4 items-center'>
                        <MagnifyingGlassIcon
                            className='h-4 md:h-6 w-4 md:w-6 hover:cursor-pointer'
                            onClick={() => setSearchbar(!searchbar)}
                        />
                        {quantity !== 0 ? (
                            <Badge content={quantity}>
                                <Link to='cart'>
                                    <ShoppingCartIcon className='h-6 md:h-8 w-6 md:w-8 pr-2' />
                                </Link>
                            </Badge>
                        ) : (
                            <Link to='cart'>
                                <ShoppingCartIcon className='h-6 md:h-8 w-6 md:w-8 pr-2' />
                            </Link>
                        )}
                        <div>{user ? <ProfileMenu /> : <SignIn />}</div>
                    </div>
                </div>
            </Navbar>
        </>
    );
}
