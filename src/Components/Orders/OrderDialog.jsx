import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function OrderDialog({ open, handleOpen }) {
    return (
        <Dialog open={open} handler={handleOpen}>
            <DialogHeader>
                <Typography variant='h5' color='green'>
                    Success!
                </Typography>
            </DialogHeader>
            <DialogBody divider className='grid place-items-center gap-4'>
                <CheckIcon className='h-16 w-16 text-green-500' />
                <Typography color='green' variant='h4'>
                    Order has been placed successfully!
                </Typography>
            </DialogBody>
            <DialogFooter className='space-x-2'>
                <Button variant='text' color='blue-gray' onClick={handleOpen}>
                    close
                </Button>
                <Link to='/orders'>
                    <Button
                        variant='outlined'
                        onClick={handleOpen}
                        className='flex items-center gap-1'
                    >
                        Check out your orders
                        <ShoppingBagIcon className='w-6 h-6 text-primary' />{" "}
                    </Button>
                </Link>
            </DialogFooter>
        </Dialog>
    );
}
