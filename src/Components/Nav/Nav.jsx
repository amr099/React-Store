import { Badge, Navbar, Typography } from "@material-tailwind/react";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";
import SignIn from "./SignIn";
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
                className={`dark ${
                    scroll && "fixed"
                } top z-10 h-max max-w-full rounded-none px-4 lg:px-8 lg:py-4`}
            >
                <div className='container mx-auto'>
                    <div className='flex items-center justify-between text-blue-gray-900'>
                        <Link to='/'>
                            <h1 className='text-primary text-lg font-bold whitespace-nowrap lg:text-2xl'>
                                React Store
                            </h1>
                        </Link>
                        <div className='flex gap-4 items-center'>
                            <MagnifyingGlassIcon
                                className='h-4 md:h-6 w-4 md:w-6 hover:cursor-pointer text-primary'
                                onClick={() => setSearchbar(!searchbar)}
                            />
                            {quantity !== 0 ? (
                                <Badge content={quantity} color='green'>
                                    <Link to='cart'>
                                        <ShoppingCartIcon className='h-6 md:h-8 w-6 md:w-8 pr-2 text-primary' />
                                    </Link>
                                </Badge>
                            ) : (
                                <Link to='cart'>
                                    <ShoppingCartIcon className='h-6 md:h-8 w-6 md:w-8 pr-2 text-primary' />
                                </Link>
                            )}

                            <div className='border-l-2 px-2'>
                                {user ? <ProfileMenu /> : <SignIn />}
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
        </>
    );
}
