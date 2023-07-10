import {
    Menu,
    MenuHandler,
    Button,
    MenuList,
    MenuItem,
    Typography,
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
            <MenuHandler className='capitalize'>
                <Button
                    variant='text'
                    className='text-black font-light text-xs'
                >
                    <h3 className='text-primary flex gap-1 items-center text-s lg:text-base'>
                        Categories{" "}
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-3.5 w-3.5 transition-transform text-primary`}
                        />
                    </h3>
                </Button>
            </MenuHandler>
            <MenuList className='w-[80%] max-h-96 '>
                <div className='flex flex-wrap'>
                    {data?.map((category) => (
                        <MenuItem className='md:max-w-[20%]' key={category}>
                            <Link
                                to={`products/category/${category}`}
                                className='hover:text-primary'
                            >
                                <h4
                                    variant='h6'
                                    className='capitalize text-xs lg:text-sm'
                                >
                                    {category}
                                </h4>
                            </Link>
                        </MenuItem>
                    ))}
                </div>
            </MenuList>
        </Menu>
    );
}
