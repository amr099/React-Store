import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "src/firebase-config";
import CartItem from "./../Components/Cart/CartItem";
import Cart from "./Cart";

export default function OrderPage() {
    const { id } = useParams();
    const [data, setData] = useState({});
    console.log(id);
    useEffect(() => {
        onSnapshot(doc(db, "Orders", id), (doc) => {
            setData(doc.data());
        });
    }, []);
    return (
        <div className='flex flex-col'>
            {data?.products?.map((item) => (
                <CartItem item={item} />
            ))}
        </div>
    );
}
