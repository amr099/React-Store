import React from "react";
import { Link } from "react-router-dom";
import { default as SlickSlider } from "react-slick";
import { Typography } from "@material-tailwind/react";

import fragrances from "../../assets/categories/fragrances.png";
import smartphones from "../../assets/categories/smartphones.png";
import laptops from "../../assets/categories/laptops.png";
import skincare from "../../assets/categories/skincare.png";
import sunglasses from "../../assets/categories/sunglasses.png";

var settings = {
  dots: true,
  centerMode: true,
  mobileFirst: true,
  adaptiveHeight: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const categoriesList = [
  { img: fragrances, name: "fragrances" },
  { img: smartphones, name: "smartphones" },
  { img: laptops, name: "laptops" },
  { img: skincare, name: "skincare" },
  { img: sunglasses, name: "sunglasses" },
];

export default function Slider({ title }) {
  return (
    <div className="my-10">
      <h3 className="text-s lg:text-xl font-bold text-primary mb-4">{title}</h3>

      <SlickSlider {...settings}>
        {categoriesList?.map((cat) => (
          <figure className="relative h-96 w-full">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src={cat.img}
            />
            <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <Link to={`/${"smartphones"}`} className="hover:text-primary">
                <Typography variant="h6" className="capitalize align-center">
                  {`${cat.name}`}
                </Typography>
              </Link>
            </figcaption>
          </figure>
        ))}
      </SlickSlider>
    </div>
  );
}
