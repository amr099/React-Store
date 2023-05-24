import React, { useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Search() {
    const [param, setParam] = useState("");
    return (
        <div className='flex shrink bg-sky-100 rounded-2xl items-center justify-between w-72 md:w-[30%]'>
            <input
                onChange={(e) => setParam(e.target.value)}
                type='search'
                name='q'
                id='search'
                className='w-[90%] shrink bg-inherit pl-4 py-2 rounded-l-2xl focus:outline-none focus:bg-inherit'
            />
            <Link
                to={`https://react-store123.netlify.app/products/search?q=${param}`}
            >
                <MagnifyingGlassIcon className='w-6 md:w-10 h-7 md:h-7 px-1' />
            </Link>
        </div>
    );
}
