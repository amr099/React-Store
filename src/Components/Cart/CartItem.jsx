import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, changeQuantity } from "../../features/cart/cartSlice";
import { TrashIcon } from "@heroicons/react/24/outline";
export default function CartItem({ item }) {
    const dispatch = useDispatch();

    return (
        <div className='grid grid-cols-12 md:grid-cols-9  items-center w-[100%] md:w-[90%] mx-auto gap-3 p-3 m-3 bg-slate-500'>
            <img
                src={item?.thumbnail}
                className='w-12 h-12 col-span-2 md:col-span-1 rounded-full'
            />
            <h3 className='text-xs md:text-xl whitespace-nowrap col-span-4 md:col-span-5 truncate'>
                {item?.title}
            </h3>
            <h4 className='text-xs md:text-xl whitespace-nowrap col-span-2 md:col-span-1'>
                $ {item?.price * item?.quantity}
            </h4>
            <input
                className='col-span-2 md:col-span-1'
                type='number'
                defaultValue={item?.quantity}
                onChange={(e) =>
                    dispatch(
                        changeQuantity({
                            id: item.id,
                            amount: e.target.value,
                        })
                    )
                }
            />
            <TrashIcon
                className='w-8 h-8 hover:text-deep-orange-800 hover:cursor-pointer items-end'
                onClick={() => dispatch(removeFromCart(item?.id))}
            />
        </div>
    );
}
