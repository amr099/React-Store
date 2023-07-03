import React from "react";
import { Typography } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { db } from "src/firebase-config";
import { deleteDoc, doc } from "firebase/firestore";

const tdclasses = "p-4 border-b border-blue-gray-50";

export default function Order({ item }) {
    const onDelete = (id) => {
        deleteDoc(doc(db, "Orders", id));
    };
    return (
        <tr key={item?.id}>
            <td className={tdclasses}>
                <div className='flex items-center gap-3'>
                    {/* <Link to={`/order/${item?.id}`}> */}
                    <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-bold md:text-lg'
                    >
                        {item?.id}
                    </Typography>
                    {/* </Link> */}
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
            <td className={tdclasses}>
                <div className='w-max'>
                    <TrashIcon
                        className='w-8 h-8 hover:text-deep-orange-800 hover:cursor-pointer items-end'
                        onClick={() => onDelete(item.id)}
                    />
                </div>
            </td>
        </tr>
    );
}
