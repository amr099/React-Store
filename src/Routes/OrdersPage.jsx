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
import OrderItem from "src/Components/Orders/OrderItem";

export default function OrdersPage() {
    const user = useSelector((state) => state.auth);
    const [admin, setAdmin] = useState(false);
    const [clientOrders, setClientOrders] = useState([]);
    const [data, loading, error, snapshot] = useCollectionData(
        collection(db, "Orders")
    );

    useEffect(() => {
        window.scrollTo(0, 0);

        const checkAdmin = () => {
            onSnapshot(doc(db, "Admins", "IDs"), (doc) => {
                setAdmin(doc.data()?.IDs?.includes(user.uid));
            });
        };
        checkAdmin();

        const getClientOrders = () => {
            setClientOrders(data?.filter((order) => order.uid == user.uid));
        };
        if (!admin) {
            getClientOrders();
        }
    }, [user]);

    const orders = admin ? data : clientOrders;

    return user ? (
        <Card className='max-h-[90vh] w-full'>
            <CardHeader floated={false} shadow={false} className='rounded-none'>
                <div className='mb-4 flex flex-col justify-center gap-8 md:flex-row md:items-center'>
                    <Typography variant='h5' color='blue-gray'>
                        Orders
                    </Typography>
                </div>
            </CardHeader>
            {orders?.length === 0 ? (
                <Alert
                    className='md:w-[50%] w-[70%] mx-auto'
                    color='orange'
                    variant='ghost'
                >
                    You have to login first!
                </Alert>
            ) : (
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
                        {orders ? (
                            <tbody>
                                {orders.map((item) => (
                                    <OrderItem item={item} />
                                ))}
                            </tbody>
                        ) : (
                            <Alert
                                className='md:w-[50%] w-[70%] mx-auto'
                                color='orange'
                                variant='ghost'
                            >
                                There's no orders yet.
                            </Alert>
                        )}
                    </table>
                </CardBody>
            )}
        </Card>
    ) : (
        <Alert
            className='md:w-[50%] w-[70%] mx-auto'
            color='orange'
            variant='ghost'
        >
            You have to Login first.
        </Alert>
    );
}
