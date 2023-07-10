import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "src/firebase-config";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    Alert,
} from "@material-tailwind/react";
import Order from "src/Components/Orders/Order";

export default function OrdersPage() {
    const user = useSelector((state) => state.auth);
    const [data, loading, error, snapshot] = useCollectionData(
        collection(db, "Orders")
    );
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const getOrders = () => {
            onSnapshot(doc(db, "Admins", "IDs"), async (doc) => {
                const ids = await doc.data().IDs;
                const isAdmin = ids?.includes(user.uid);
                if (!isAdmin) {
                    setOrders(data?.filter((order) => order.uid == user.uid));
                    return;
                } else {
                    setOrders(data);
                    return;
                }
            });
        };
        getOrders();
    }, []);

    return user ? (
        <Card className='max-h-[90vh] w-full'>
            <CardHeader floated={false} shadow={false} className='rounded-none'>
                <div className='mb-4 flex flex-col justify-center gap-8 md:flex-row md:items-center'>
                    <Typography variant='h5' color='blue-gray'>
                        Orders
                    </Typography>
                </div>
            </CardHeader>
            <CardBody className=' overflow-auto px-0'>
                <table className='w-full min-w-max table-auto text-left'>
                    <thead>
                        <tr>
                            <th className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                                Order ID
                            </th>
                            <th className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                                User ID
                            </th>
                            <th className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                                Total
                            </th>
                            <th className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                                Address
                            </th>
                            <th className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                                Phone
                            </th>
                            <th className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                                Remove
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((item) => (
                            <Order item={item} />
                        ))}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    ) : (
        <Alert
            className='md:w-[50%] w-[70%] mx-auto my-10'
            color='orange'
            variant='ghost'
        >
            You have to Login first.
        </Alert>
    );
}
