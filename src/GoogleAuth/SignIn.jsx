import { auth, db, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { signIn } from "src/features/auth/authSlice";
import { Tooltip } from "@material-tailwind/react";

export default function SignIn() {
    const dispatch = useDispatch();

    const login = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            dispatch(signIn(result.user));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Tooltip content='Login' className='bg-primary'>
            <UserIcon
                className='h-8 md:h-10 w-8 md:w-10 pr-2 hover:cursor-pointer text-primary'
                onClick={login}
            />
        </Tooltip>
    );
}
