import React, { useState } from "react";

import {
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
} from "@material-tailwind/react";
import { PowerIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";

export default function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    const user = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
            <MenuHandler>
                <Button
                    variant='text'
                    color='blue-gray'
                    className='flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 text-primary'
                >
                    <Avatar
                        variant='circular'
                        size='sm'
                        alt='candice wu'
                        className='border border-blue-500 p-0.5'
                        src={user?.photoURL}
                    />
                </Button>
            </MenuHandler>
            <MenuList className='p-1'>
                <Link to='/orders'>
                    <MenuItem
                        onClick={closeMenu}
                        className={`flex items-center justify-center gap-2 rounded `}
                    >
                        <ShoppingBagIcon className='w-6 h-6 text-primary' />{" "}
                        Orders
                    </MenuItem>
                </Link>
                <MenuItem
                    onClick={() => {
                        dispatch(signOut());
                        closeMenu;
                    }}
                    className={`flex items-center justify-center gap-2 rounded `}
                >
                    <PowerIcon className='w-6 h-6 text-primary' /> Logout
                </MenuItem>
            </MenuList>
        </Menu>
    );
}
