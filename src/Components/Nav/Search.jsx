import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function Search({ searchbar, scroll, setSearchbar }) {
    const [param, setParam] = useState("");
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${param}`);
        setSearchbar(false);
    };

    return (
        <form
            onSubmit={onSubmit}
            className={`fixed w-[100%] z-10 ${scroll && "mt-[4rem]"} ${
                searchbar ? "scale-100" : "scale-0"
            } flex shrink bg-gray-50 items-center justify-between transition-transform`}
        >
            <input
                onChange={(e) => setParam(e.target.value)}
                value={param}
                placeholder='Search'
                type='search'
                name='q'
                list='search'
                className='w-[97%] shrink text-primary bg-inherit pl-4 py-2  focus:outline-none focus:bg-inherit placeholder:text-gray-400'
            />
            <button>
                <MagnifyingGlassIcon className='w-6 h-6 mx-2 text-primary' />
            </button>
        </form>
    );
}
