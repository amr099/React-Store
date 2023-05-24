import { Carousel } from "@material-tailwind/react";

export default function CustomCarousel({ imgs }) {
    return (
        <Carousel className='rounded-xl w-[90%] md:w-[25%] mx-auto'>
            {imgs?.map((img) => (
                <img src={img} alt='' className='h-full w-full object-cover' />
            ))}
        </Carousel>
    );
}
