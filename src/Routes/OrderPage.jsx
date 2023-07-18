import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "src/firebase-config";
import OrderProduct from "src/Components/Orders/OrderProduct";
import { Typography } from "@material-tailwind/react";
import { List, ListItem, Card } from "@material-tailwind/react";

export default function OrderPage() {
    const { id } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        onSnapshot(doc(db, "Orders", id), (doc) => {
            setData(doc.data());
        });
    }, []);
    return (
        <section className='flex flex-wrap justify-around gap-10 pt-10'>
            <div className='w-[100%] md:w-[40%] p-4 flex flex-col'>
                <h2 className='text-lg font-bold md:text-3xl mb-10 text-primary'>
                    Shipping Information
                </h2>
                <Card className=''>
                    <List>
                        <ListItem>
                            <span className='font-bold'>Order Id:</span>{" "}
                            {data?.id}
                        </ListItem>
                        <ListItem>
                            <span className='font-bold'>Client Id:</span>{" "}
                            {data?.uid}
                        </ListItem>
                        <ListItem>
                            <span className='font-bold'>Name:</span>{" "}
                            {data?.name}
                        </ListItem>
                        <ListItem>
                            <span className='font-bold'>Email:</span>{" "}
                            {data?.email}
                        </ListItem>
                        <ListItem>
                            <span className='font-bold'>Address:</span>{" "}
                            {data?.address}
                        </ListItem>
                        <ListItem>
                            <span className='font-bold'>Phone Number:</span>{" "}
                            {data?.phone}
                        </ListItem>
                    </List>
                </Card>
            </div>
            <div className='w-[90%] md:w-[50%]'>
                <h2 className='text-lg font-bold md:text-3xl my-10 text-primary'>
                    Order items
                </h2>
                {data?.products?.map((item) => (
                    <OrderProduct item={item} />
                ))}
                <p>
                    Total :{" "}
                    <span className='text-primary'>${data?.totalPrice}</span>
                </p>
            </div>
        </section>
    );
}
