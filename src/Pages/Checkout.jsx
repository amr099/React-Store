import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Stack, Container, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export default function Checkout() {
    const { cart } = useContext(CartContext);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate("");

    let total = 0;
    cart.forEach((item) => {
        total += item.price * item.quantity;
    });

    const showOrderInfo = (e) => {
        e.preventDefault();
        setSuccess(true);
        e.target.reset();
        total = 0;
    };
    return (
        <>
            <Container>
                <BsArrowLeft
                    className='icon'
                    size={"2.5rem"}
                    onClick={() => navigate(-1)}
                />
                <Stack direction='horizontal' gap={4}>
                    <h2 className='text-info m-4'>
                        Total Price : $<mark>{total}</mark>
                    </h2>
                    {success && (
                        <Alert
                            variant='success'
                            className='ms-auto'
                            dismissible
                            onClose={() => setSuccess(false)}
                        >
                            <Alert.Heading>
                                Your Order has been placed successfully.
                            </Alert.Heading>
                            <p>
                                Checkout your <Link>Orders page</Link> for more
                                details.
                            </p>
                        </Alert>
                    )}
                </Stack>
            </Container>
            <Container className='mt-4 full-view justify-content-center d-flex'>
                <>
                    <Form onSubmit={(e) => showOrderInfo(e)}>
                        <Stack direction='horizontal' gap='3'>
                            <Form.Group className='mb-4'>
                                <Form.Label>
                                    Full Name{" "}
                                    <span style={{ color: "red" }}>*</span>
                                </Form.Label>
                                <Form.Control
                                    name='name'
                                    type='text'
                                    required
                                    pattern='[A-Za-z ]{8,64}'
                                />
                                <Form.Text className='text-warning'></Form.Text>
                            </Form.Group>
                            <Form.Group className='mb-4'>
                                <Form.Label>
                                    Email Address <span> (Optional)</span>
                                </Form.Label>
                                <Form.Control name='email' type='email' />
                                <Form.Text className='text-warning'></Form.Text>
                            </Form.Group>
                        </Stack>
                        <div className='d-flex justify-content-between'>
                            <Form.Group className='mb-4'>
                                <Form.Label>
                                    Phone Number{" "}
                                    <span style={{ color: "red" }}>*</span>
                                </Form.Label>
                                <Form.Control
                                    name='phone'
                                    type='tel'
                                    required
                                    pattern='[0-9]{11}'
                                />
                                <Form.Text className='text-warning'></Form.Text>
                            </Form.Group>
                            <Form.Group className='mb-4'>
                                <Form.Label>
                                    Phone Number 2 <span> (Optional)</span>
                                </Form.Label>
                                <Form.Control
                                    name='phone'
                                    type='tel'
                                    pattern='[0-9]{11}'
                                />
                                <Form.Text className='text-warning'></Form.Text>
                            </Form.Group>
                        </div>
                        <Form.Group className='mb-4'>
                            <Form.Label>
                                Shipping Address{" "}
                                <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                                name='address'
                                type='text'
                                minLength='20'
                            />
                            <Form.Text className='text-warning'></Form.Text>
                        </Form.Group>
                        <Stack direction='horizontal' gap='3'>
                            <Form.Group className='mr-4 w-50'>
                                <Form.Label>
                                    Governorate{" "}
                                    <span style={{ color: "red" }}>*</span>
                                </Form.Label>
                                <Form.Select required>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className='ml-4 w-50'>
                                <Form.Label>
                                    City <span style={{ color: "red" }}>*</span>
                                </Form.Label>
                                <Form.Control
                                    name='city'
                                    type='text'
                                    required
                                    pattern='[A-Za-z ]{4,20}'
                                />
                                <Form.Text className='text-warning'></Form.Text>
                            </Form.Group>
                        </Stack>
                        <Form.Group
                            className='my-4'
                            controlId='formBasicCheckbox'
                        >
                            <Form.Check
                                type='checkbox'
                                label='Cash on Delivery'
                                required
                            />
                        </Form.Group>

                        <Button
                            variant='outline-primary'
                            className='my-4 w-100'
                            type='submit'
                        >
                            Place Order
                        </Button>
                    </Form>
                </>
            </Container>
        </>
    );
}
