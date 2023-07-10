import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Checkbox } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { setDoc, doc } from "firebase/firestore";
import { db } from "src/firebase-config";
import { useForm } from "react-hook-form";
import Cart from "src/Routes/Cart";
import { getTotalPrice, clearCart } from "src/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import OrderItem from "src/Components/Orders/Order";
import OrderProduct from "src/Components/Orders/OrderProduct";

export default function Checkout() {
    const user = useSelector((state) => state.auth);
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();
    const orderId = uuidv4();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        dispatch(getTotalPrice());
    }, [cartItems]);

    const onSubmit = async (data) => {
        try {
            await setDoc(doc(db, "Orders", orderId), {
                id: orderId,
                uid: user.uid,
                name: data.username,
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
            // navigate(`/order/${orderId}`);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <section className='flex flex-wrap justify-around gap-10 pt-10'>
            <div className='w-[100%] md:w-[40%] p-4 flex flex-col'>
                <h2 className='text-lg font-bold md:text-3xl py-4'>
                    User's Information
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col gap-10'
                >
                    <Input
                        defaultValue={user?.name}
                        error={errors.username}
                        label='Name'
                        {...register("username", { required: true })}
                    />
                    <Input
                        defaultValue={user?.email}
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
                </form>
            </div>
            <div className='w-[90%] md:w-[50%]'>
                <h2 className='text-lg font-bold md:text-3xl py-4'>Cart</h2>
                {cartItems.map((item) => (
                    <OrderProduct item={item} />
                ))}
            </div>
        </section>
    );
}
