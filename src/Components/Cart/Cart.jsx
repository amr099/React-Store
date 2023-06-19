import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Alert, Button } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Cart() {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <>
            <h2 className='text-sm md:text-2xl font-bold ml-10 pt-20'>
                Shopping Cart
            </h2>
            {cartItems?.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
            {cartItems.length === 0 && (
                <Alert
                    className='md:w-[50%] w-[70%] mx-auto'
                    color='orange'
                    variant='ghost'
                >
                    Cart is empty!
                </Alert>
            )}
            {cartItems.length !== 0 && (
                <Link to='/checkout'>
                    <Button className='text-sm font-bold float-right mr-10 flex gap-1'>
                        Checkout <ArrowRightIcon className='w-5 h-5' />
                    </Button>
                </Link>
            )}
        </>
    );
}
