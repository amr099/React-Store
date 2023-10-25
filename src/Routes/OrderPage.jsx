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
        <section className='flex flex-wrap justify-around gap-5 pt-10'>
            <div className='w-[100%] p-4 flex flex-col'>
                <h2 className='text-lg font-bold md:text-3xl mb-10 text-primary'>
                    Shipping Information
                </h2>
                <Card className=''>
                    <List>
                        <ListItem>
                            <span className='font-bold whitespace-nowrap inline-block mr-2'>Order Id: </span>{" "}
                            <p className="truncate">{data?.id}</p>
                        </ListItem>
                        <ListItem>
                            <span className='font-bold whitespace-nowrap inline-block mr-2'>Client Id:</span>{" "}
                            <p className="truncate">{data?.uid}</p>
                        </ListItem>
                        <ListItem>
                            <span className='font-bold whitespace-nowrap inline-block mr-2'>Name:</span>{" "}
                            <p className="truncate">{data?.name}</p>
                        </ListItem>
                        <ListItem>
                            <span className='font-bold whitespace-nowrap inline-block mr-2'>Email:</span>{" "}
                            <p className="truncate">{data?.email}</p>
                        </ListItem>
                        <ListItem>
                            <span className='font-bold whitespace-nowrap inline-block mr-2'>Address:</span>{" "}
                            <p className="truncate">{data?.address}</p>
                        </ListItem>
                        <ListItem>
                            <span className='font-bold whitespace-nowrap inline-block mr-2'>Phone Number:</span>{" "}
                            <p className="truncate">{data?.phone}</p>
                        </ListItem>
                    </List>
                </Card>
            </div>
            <div className='w-[90%] mx-auto'>
                <h2 className='text-lg font-bold md:text-3xl mt-4 mb-12 text-primary'>
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
