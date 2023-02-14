import React, { useState, useContext } from "react";
import { CartContext } from "./../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { BsCartDash } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import { Button, Card } from "react-bootstrap";

export default function Cart() {
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const upQuantity = (id, state) => {
        const newCart = cart.map((item) => {
            if (item.id === id)
                if (state === "up") {
                    return { ...item, quantity: item.quantity + 1 };
                } else return { ...item, quantity: item.quantity - 1 };

            return item;
        });

        setCart(newCart);
    };
    return (
        <>
            <BsCartDash
                className='icon'
                size={"2.5rem"}
                onClick={() => setShow(true)}
            />

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2>My Cart</h2>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {cart.length !== 0 ? (
                        <>
                            {cart?.map((item) =>
                                item.quantity !== 0 ? (
                                    <Card className='my-4' key={item.id}>
                                        <Card.Header as='h5'>
                                            {item.title}
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Title>
                                                <mark>
                                                    $
                                                    {item.price * item.quantity}
                                                </mark>
                                            </Card.Title>
                                            <Card.Text>
                                                {item.description}
                                            </Card.Text>
                                            <Card.Text>
                                                <h3>{item.quantity}</h3>
                                                <Button
                                                    variant='success'
                                                    onClick={() =>
                                                        upQuantity(
                                                            item.id,
                                                            "up"
                                                        )
                                                    }
                                                >
                                                    +
                                                </Button>
                                                <Button
                                                    variant='danger'
                                                    onClick={() => {
                                                        upQuantity(
                                                            item.id,
                                                            "down"
                                                        );
                                                    }}
                                                >
                                                    -
                                                </Button>
                                            </Card.Text>
                                            <Button
                                                variant='danger'
                                                onClick={() =>
                                                    removeFromCart(item.id)
                                                }
                                            >
                                                Remove
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                ) : (
                                    removeFromCart(item.id)
                                )
                            )}
                        </>
                    ) : (
                        <h4>your cart is empty.</h4>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {cart.length !== 0 && (
                        <Button
                            onClick={() => {
                                navigate("checkout");
                                setShow(false);
                            }}
                        >
                            Checkout
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
}
