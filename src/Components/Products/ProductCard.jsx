import React, { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { addToCart } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
  Badge,
  Rating,
  Dialog,
  DialogHeader,
  DialogBody,
  Carousel,
} from "@material-tailwind/react";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Card className="w-52 xl:w-72 !flex !justify-between h-96 ">
        <CardHeader
          shadow={false}
          floated={false}
          className="h-32 xl:h-52 hover:cursor-pointer"
          onClick={handleOpen}
        >
          <img src={product.thumbnail} className="w-full h-full object-cover" />
        </CardHeader>
        <CardBody onClick={handleOpen}>
          <div className="flex items-center justify-between gap-3 mb-2 hover:cursor-pointer">
            {/* <Link to={`/products/${product.id}`}> */}
            <h4
              color="blue-gray"
              className="text-xs font-semibold text-primary lg:text-base"
            >
              {product.title}
            </h4>
            {/* </Link> */}
            <h4
              color="blue-gray"
              className="self-end text-xs font-semibold text-primary lg:text-base"
            >
              ${product.price}
            </h4>
          </div>
          <div className="flex justify-between items-center">
            <Rating value={Math.floor(product.rating)} readonly />
            <Typography
              variant="small"
              color="gray"
              className="font-bold opacity-75 text-ellipsis overflow-hidden w-42"
            >
              {product.rating}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="flex gap-1 justify-center items-center bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
            onClick={() => {
              dispatch(addToCart(product));
              setQuantity((state) => (state += 1));
            }}
          >
            Add to Cart{" "}
            {quantity ? (
              <Badge content={quantity} color="green">
                <ShoppingCartIcon className="w-5 h-5 text-primary" />
              </Badge>
            ) : (
              <ShoppingCartIcon className="w-5 h-5 text-primary" />
            )}
          </Button>
        </CardFooter>
      </Card>

      <Dialog size="xl" open={open} handler={handleOpen}>
        <DialogBody>
          <div className="flex flex-col md:flex-row">
            <Carousel className="rounded-xl md:w-[50%]">
              {product?.images?.map((img) => (
                <img
                  src={img}
                  className="h-[24rem] rounded-lg object-cover object-center"
                />
              ))}
            </Carousel>
            <div className="w-full md:w-[40%] mx-auto py-4 md:py-12 flex flex-col gap-2 md:gap-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                {product?.category}
              </Typography>
              <Typography variant="h4">{product?.title}</Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal"
              >
                {product?.description}
              </Typography>

              <Rating value={Math.floor(product.rating)} readonly />

              <Typography
                variant="h3"
                color="blue-gray"
                className="self-end font-semibold text-primary"
              >
                ${product.price}
              </Typography>
              <Button
                ripple={false}
                fullWidth={true}
                className="flex self-center gap-1 justify-center items-center bg-primary text-white shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                onClick={() => {
                  dispatch(addToCart(product));
                  setQuantity((state) => (state += 1));
                }}
              >
                Add to Cart{" "}
                {quantity ? (
                  <Badge content={quantity} color="green">
                    <ShoppingCartIcon className="w-5 h-5 text-white" />
                  </Badge>
                ) : (
                  <ShoppingCartIcon className="w-5 h-5 text-white" />
                )}
              </Button>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
