import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Checkbox, Alert } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { setDoc, doc } from "firebase/firestore";
import { db } from "src/firebase-config";
import { useForm } from "react-hook-form";
import { getTotalPrice, clearCart } from "src/features/cart/cartSlice";
import { v4 as uuidv4 } from "uuid";
import OrderProduct from "src/Components/Orders/OrderProduct";
import OrderDialog from "./../Components/Orders/OrderDialog";

export default function Checkout() {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState("");
    const handleOpen = () => setOpen(!open);
    const user = useSelector((state) => state.auth);
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();
    const orderId = uuidv4();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        dispatch(getTotalPrice());
    }, [cartItems]);

    const onSubmit = async (data) => {
        if (cartItems.lenght === 0) {
            setError("Cart is Empty!");
            return;
        }
        try {
            await setDoc(doc(db, "Orders", orderId), {
                id: orderId,
                uid: user.uid,
                name: data.name,
                email: data.email,
                phone: data.phone,
                address: data.address,
                products: [
                    ...cartItems?.map((item) => {
                        return {
                            title: item.title,
                            thumbnail: item.thumbnail,
                            price: item.price,
                            quantity: item.quantity,
                            totalPrice: Number(item.quantity * item.price),
                        };
                    }),
                ],
                totalPrice: totalPrice,
            });
            dispatch(clearCart());
            setOpen(true);
        } catch (e) {
            setError(e.error);
            console.log(e);
        }
    };

    return (
        <>
            {open && <OrderDialog open={open} handleOpen={handleOpen} />}
            <section className='flex flex-wrap justify-around gap-10 pt-10'>
                <div className='w-[100%] md:w-[40%] p-4 flex flex-col'>
                    <h2 className='text-lg font-bold md:text-3xl mb-10 text-primary'>
                        User's Information
                    </h2>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='flex flex-col gap-10'
                    >
                        <Input
                            error={errors.name}
                            label='Name'
                            {...register("name", { required: true })}
                        />
                        <Input
                            error={errors.email}
                            label='E-mail'
                            type={"email"}
                            {...register("email", { required: true })}
                        />
                        <Input
                            error={errors.phone}
                            type={"text"}
                            label='Phone Number'
                            {...register("phone", { required: true })}
                        />
                        <Input
                            error={errors.address}
                            label='Address'
                            {...register("address", { required: true })}
                        />
                        <div className='flex items-center'>
                            <Checkbox color='blue' id='cash' />{" "}
                            <label htmlFor='cash'>Cash On Delivery</label>
                        </div>
                        {user ? (
                            <Button
                                className='self-end flex items-center gap-2'
                                type='submit'
                            >
                                Place Order <ArrowRightIcon className='w-5' />
                            </Button>
                        ) : (
                            "Login first to place your order."
                        )}
                        {error && (
                            <Alert
                                className='md:w-[50%] w-[70%] mx-auto'
                                color='orange'
                                variant='ghost'
                            >
                                {error}
                            </Alert>
                        )}
                    </form>
                </div>
                <div className='w-[90%] md:w-[50%]'>
                    <h2 className='text-lg font-bold md:text-3xl my-10 text-primary'>
                        Cart
                    </h2>
                    {cartItems.map((item) => (
                        <OrderProduct item={item} />
                    ))}
                    <p>
                        Total :{" "}
                        <span className='text-primary'>${totalPrice}</span>
                    </p>
                </div>
            </section>
        </>
    );
}
