import React from 'react';
import './Order.css';

const Order = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const tax = total / 10;
    const shipping= 30;
    const totalCost = total + tax + shipping;
    return (
        <div>
            <h1>cart length: {props.cart.length}</h1>
            <p>price: {total.toFixed(2)} </p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <br />
            <p>total cost: {totalCost.toFixed(2)}</p>
        </div>
    );
};

export default Order;