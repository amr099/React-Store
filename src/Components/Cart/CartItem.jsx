import React from "react";
import { Badge, Typography, Avatar } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { removeFromCart, changeQuantity } from "../../features/cart/cartSlice";
import { TrashIcon } from "@heroicons/react/24/outline";

const tdclasses = "p-4 border-b border-blue-gray-50";

export default function CartItem({ item }) {
    const dispatch = useDispatch();

    return (
        <tr key={item?.id}>
            <td className={tdclasses}>
                <div className='flex items-center gap-3'>
                    <>
                        <Avatar
                            src={item?.thumbnail}
                            alt={item?.title}
                            size='md'
                            className='border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1'
                        />
                        <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-bold md:text-lg text-primary'
                        >
                            {item?.title}
                        </Typography>
                    </>
                </div>
            </td>
            <td className={tdclasses}>
                <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal md:text-lg text-primary'
                >
                    ${item?.price * item?.quantity}
                </Typography>
            </td>
            <td className={tdclasses}>
                <input
                    onChange={(e) =>
                        dispatch(
                            changeQuantity({
                                id: item.id,
                                amount: Number(e.target.value),
                            })
                        )
                    }
                    min={1}
                    value={item?.quantity}
                    className='text-xs md:text-lg w-24 px-3 py-2 text-center bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl'
                    type='number'
                ></input>
            </td>
            <td className={tdclasses}>
                <div className='w-max'>
                    <TrashIcon
                        className='w-8 h-8 hover:text-deep-orange-800 hover:cursor-pointer items-end'
                        onClick={() => dispatch(removeFromCart(item?.id))}
                    />
                </div>
            </td>
        </tr>
    );
}
