import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { addToCart } from "../../features/cart/cartSlice";
import {
  Typography,
  Button,
  Badge,
  Rating,
  Dialog,
  DialogBody,
  Carousel,
} from "@material-tailwind/react";

export default function ProductDetails({
  product,
  open,
  handleOpen,
  quantity,
  dispatch,
  setQuantity,
}) {
  return (
    <Dialog size="xl" open={open} handler={handleOpen}>
      <div className="container mx-auto">
        <DialogBody>
          <div className="flex flex-col md:flex-row">
            <Carousel className="rounded-xl md:w-[50%]">
              {product?.images?.map((img) => (
                <img
                  src={img}
                  className="h-[24rem] w-full rounded-lg object-contain object-center"
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
      </div>
    </Dialog>
  );
}
