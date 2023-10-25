import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const tdclasses = "p-4 border-b border-blue-gray-50";

export default function Order({ item }) {
    return (
        <tr key={item?.id}>
            <td className={tdclasses}>
                <div className='flex items-center gap-3'>
                    <Link to={`/orders/${item?.id}`}>
                        <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-bold md:text-lg'
                        >
                            {item?.id}
                        </Typography>
                    </Link>
                </div>
            </td>
            <td className={tdclasses}>
                <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal md:text-lg'
                >
                    {item?.uid}
                </Typography>
            </td>
            <td className={tdclasses}>
                <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal md:text-lg'
                >
                    ${item?.totalPrice}
                </Typography>
            </td>
            <td className={tdclasses}>
                <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal md:text-lg'
                >
                    {item?.address}
                </Typography>
            </td>
            <td className={tdclasses}>
                <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal md:text-lg'
                >
                    {item?.phone}
                </Typography>
            </td>
        </tr>
    );
}
