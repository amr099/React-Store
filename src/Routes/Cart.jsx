import { ArrowRightIcon } from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Alert,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import CartItem from "../Components/Cart/CartItem";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Cart({ totalPrice }) {
    const cartItems = useSelector((state) => state.cart.items);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Card className='max-h-[90vh] w-full'>
            <CardHeader floated={false} shadow={false} className='rounded-none'>
                <div className='mb-4 flex flex-col justify-center gap-8 md:flex-row md:items-center'>
                    <Typography variant='h5' color='blue-gray'>
                        Shopping Cart
                    </Typography>
                </div>
            </CardHeader>
            {cartItems?.length === 0 ? (
                <Alert
                    className='md:w-[50%] w-[70%] mx-auto'
                    color='orange'
                    variant='ghost'
                >
                    Cart is empty!
                </Alert>
            ) : (
                <CardBody className=' overflow-auto px-0'>
                    <table className='w-full min-w-max table-auto text-left'>
                        <thead>
                            <tr>
                                <th className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                                    Product
                                </th>
                                <th className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                                    Price
                                </th>
                                <th className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                                    Quantity
                                </th>
                                <th className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                                    Remove
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems?.map((item) => (
                                <CartItem item={item} />
                            ))}
                        </tbody>
                    </table>
                </CardBody>
            )}
            <CardFooter className='flex justify-between p-4 items-center gap-3'>
                {cartItems?.length !== 0 && (
                    <>
                        {totalPrice && <h2>Total: ${totalPrice}</h2>}
                        <Link to='/checkout' className='ml-auto'>
                            <Button className='text-sm font-bold mr-10 flex gap-1 '>
                                Checkout <ArrowRightIcon className='w-5 h-5' />
                            </Button>
                        </Link>
                    </>
                )}
            </CardFooter>
        </Card>
    );
}
