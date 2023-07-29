import React from "react";
import { Link } from "react-router-dom";

export default function Category({ name }) {
    return (
        <Link to={`category/${name}`}>
            <div className='bg-sky-500 px-4 py-2 rounded-2xl mx-2 self-center whitespace-nowrap'>
                <h3 className='text-white hover:text-sky-900'>{name}</h3>
            </div>
        </Link>
    );
}
