import React from "react";
import { Badge, Typography, Avatar } from "@material-tailwind/react";

export default function OrderProduct({ item }) {
    return (
        <>
            <Badge color='amber' content={item?.quantity}>
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
                className='font-bold md:text-lg'
            >
                {item?.title}
            </Typography>
            <Typography
                variant='small'
                color='blue-gray'
                className='font-normal md:text-lg'
            >
                ${item?.price * item?.quantity}
            </Typography>
        </>
    );
}
