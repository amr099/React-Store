import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "@material-tailwind/react";
import { getTotalPrice } from "src/features/cart/cartSlice";
import CheckoutItem from "src/Components/Cart/CheckoutItem";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Checkout() {
    const cart = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotalPrice());
    }, []);

    return (
        <div>
            <section className='flex flex-wrap pt-20'>
                <div className='flex flex-col w-[100%] lg:w-[50%] py-4'>
                    <h2 className='text-lg font-bold md:text-3xl p-4'>Cart</h2>
                    <div className=' overflow-y-scroll h-96'>
                        {cart?.map((item) => (
                            <CheckoutItem item={item} />
                        ))}
                    </div>
                    <div className='flex justify-between mx-10 w-100 mt-2'>
                        <span className='font-semibold text-2xl'>Total</span>
                        <span className='font-semibold text-2xl text-light-green-600'>
                            ${totalPrice}
                        </span>
                    </div>
                </div>
                <div className='w-1 bg-slate-600 scale-0 md:scale-100 m-2'></div>
                <div className='w-[100%] lg:w-[40%] p-4 flex flex-col'>
                    <h2 className='text-lg font-bold md:text-3xl py-4'>
                        User's Information
                    </h2>
                    <div className='flex flex-col gap-10'>
                        <Input name='Name' type='text' label='Name' />
                        <Input name='Email' type='email' label='Email' />
                        <Input
                            name='Phone Number'
                            type={"text"}
                            label='Phone Number'
                        />
                        <Input name={"Address"} type={"text"} label='Address' />
                        <Button className='self-end flex items-center gap-2'>
                            Proceed to checkout{" "}
                            <ArrowRightIcon className='w-5' />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
