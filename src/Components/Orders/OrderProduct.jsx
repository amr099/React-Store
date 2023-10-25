import React from "react";
import { Badge, Typography, Avatar } from "@material-tailwind/react";

export default function OrderProduct({ item }) {
    return (
        <div className='flex justify-between gap-5 items-center mb-10'>
            <div className='flex gap-5 items-center j'>
                <Badge color='green' content={item?.quantity}>
                    <Avatar
                        src={item?.thumbnail}
                        alt={item?.title}
                        size='md'
                        className='border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1'
                    />
                </Badge>
                <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-bold md:text-lg text-primary'
                >
                    {item?.title}
                </Typography>
            </div>
            <Typography
                variant='small'
                color='blue-gray'
                className='font-normal md:text-lg text-primary'
            >
                ${item?.price * item?.quantity}
            </Typography>
        </div>
    );
}
