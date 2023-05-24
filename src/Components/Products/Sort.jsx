import React from "react";

export default function Sort({ setSortby }) {
    return (
        <div className='flex flex-col w-36 mt-6 ml-12'>
            <label htmlFor='sort' className='font-bold'>
                Sort by price
            </label>
            <select id='sort' onChange={(e) => setSortby(e.target.value)}>
                <optgroup label='by price'>
                    <option value='asc'>Asc</option>
                    <option value='dec'>Dec</option>
                </optgroup>
            </select>
        </div>
    );
}
