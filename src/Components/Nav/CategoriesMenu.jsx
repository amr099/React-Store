import {
    Menu,
    MenuHandler,
    Button,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { useGetCategoriesQuery } from "src/features/products/productsApiSlice";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function CategoriesMenu() {
    const { data } = useGetCategoriesQuery();

    return (
        <Menu
            animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
            }}
        >
            <MenuHandler>
                <Button
                    variant='text'
                    className='text-black font-light flex gap-2 text-xs'
                >
                    Categories
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className='w-[80%] max-h-96  pt-10'>
                <h1>Categories</h1>
                <div className='flex flex-wrap gap-2'>
                    {data?.map((category) => (
                        <MenuItem className='md:max-w-[20%]' key={category}>
                            <Link to={`products/category/${category}`}>
                                <h3 className='hover:text-sky-900 capitalize'>
                                    {category}
                                </h3>
                            </Link>
                        </MenuItem>
                    ))}
                </div>
            </MenuList>
        </Menu>
    );
}
