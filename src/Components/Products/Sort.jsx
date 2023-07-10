import { Option, Select } from "@material-tailwind/react";
import React from "react";

export default function Sort({ setSortby }) {
    return (
        <div className='flex flex-col w-36 my-6 ml-12'>
            <label htmlFor='sort' className='font-bold'>
                Sort by price
            </label>
            <Select id='sort' onChange={(e) => setSortby(e)}>
                <Option value='asc'>Asc</Option>
                <Option value='dec'>Dec</Option>
            </Select>
        </div>
    );
}
