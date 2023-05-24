import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";
import { Badge } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function CheckoutItem({ item }) {
    const dispatch = useDispatch();

    return (
        <div className='grid grid-cols-12 md:grid-cols-9  items-center w-[100%] md:w-[90%] mx-auto gap-3 p-3 m-3 bg-slate-500'>
            <Badge color='amber' content={item?.quantity}>
                <img
                    src={item?.thumbnail}
                    className='w-12 h-12 col-span-2 md:col-span-1 rounded-full'
                />
            </Badge>
            <h3 className='text-xs md:text-xl whitespace-nowrap col-span-6 md:col-span-5 truncate'>
                {item?.title}
            </h3>
            <h4 className='text-xs md:text-xl whitespace-nowrap col-span-3 md:col-span-2'>
                $ {item?.price * item?.quantity}
            </h4>

            <TrashIcon
                className='w-8 h-8 hover:text-deep-orange-800 hover:cursor-pointer'
                onClick={() => dispatch(removeFromCart(item?.id))}
            />
        </div>
    );
}
