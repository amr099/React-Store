import { Button, Typography } from "@material-tailwind/react";
import banner from "../assets/banner.jpg";
import bannerMob from "../assets/banner-mob.png";
import { Link } from "react-router-dom";

export function HeroImg() {
  return (
    <figure className="relative max-h-[1000px] w-full">
      <picture>
        <source media="(max-width:769px)" srcset={bannerMob}></source>
        <img
          src={banner}
          className="w-full rounded-xl object-cover object-center"
        ></img>
      </picture>
      <Link to="/products">
        <Button
          color="blue"
          className="!absolute bottom-[10%] left-[50%] translate-x-[-50%] "
        >
          Shop Now
        </Button>
      </Link>
    </figure>
  );
}
