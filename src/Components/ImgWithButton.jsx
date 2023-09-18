import { Button, Typography } from "@material-tailwind/react";
import banner from "../assets/banner.jpg";
import { Link } from "react-router-dom";

export function ImgWithBlurredCaption() {
    return (
        <figure className='relative h-[90vh] w-full'>
            <img
                src={banner}
                className='h-full w-full rounded-xl object-cover object-center'
            ></img>
            <Link to='/products'>
                <figcaption className='absolute bottom-8 left-2/4 flex w-[200px] -translate-x-2/4 justify-center rounded-xl text-white bg-primary hover:bg-[#4E9DC6] py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm'>
                    <Typography variant='h4'>Shop Now</Typography>
                </figcaption>
            </Link>
        </figure>
    );
}
