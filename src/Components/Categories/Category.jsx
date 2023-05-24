import React from "react";
import { Link } from "react-router-dom";

export default function Category({ name }) {
    return (
        <>
            <div className='bg-sky-500 px-4 py-2 rounded-2xl mx-2 self-center whitespace-nowrap'>
                {" "}
                <Link to={`products/category/${name}`}>
                    <h3 className='text-white hover:text-sky-900'>{name}</h3>
                </Link>
            </div>
        </>
    );
}
