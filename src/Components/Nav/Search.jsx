import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function Search({ searchbar, scroll }) {
    const [param, setParam] = useState("");
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        navigate(`/products/search?q=${param}`);
    };

    return (
        <form
            onSubmit={onSubmit}
            className={`fixed w-[100%] z-10 ${scroll && "mt-[4rem]"} ${
                searchbar ? "scale-100" : "scale-0"
            } flex shrink bg-sky-200  items-center justify-between transition-transform`}
        >
            <input
                onChange={(e) => setParam(e.target.value)}
                placeholder='Search'
                type='search'
                name='q'
                id='search'
                className='w-[90%] shrink placeholder:text-white text-white bg-inherit pl-4 py-2  focus:outline-none focus:bg-inherit'
            />

            <button>
                <MagnifyingGlassIcon className='w-6 md:w-10 h-7 md:h-7 px-1' />
            </button>
        </form>
    );
}
