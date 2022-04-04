import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <>
        <div>
            <Button variant="secondary" size="sm">
                <img src="./img/cart.png" alt="cart" />
            </Button>
        </div>
        </>
    );
};

export default CartWidget