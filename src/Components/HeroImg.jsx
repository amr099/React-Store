import { Button, Typography } from "@material-tailwind/react";
import banner from "../assets/banner.jpg";
import bannerMob from "../assets/banner-mob.png";
import { Link } from "react-router-dom";

export function HeroImg() {
    return (
        <figure className='relative h-[90vh] w-full'>
            <picture>
                <source media='(max-width:769px)' srcset={bannerMob}></source>
                <img
                    src={banner}
                    className='h-full w-full rounded-xl object-cover object-center'
                ></img>
            </picture>
            <Link to='/products'>
                <figcaption className='absolute bottom-8 left-2/4 flex w-[200px] -translate-x-2/4 justify-center rounded-xl text-white bg-primary hover:bg-[#4E9DC6] py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm'>
                    <Typography variant='h4'>Shop Now</Typography>
                </figcaption>
            </Link>
        </figure>
    );
}
