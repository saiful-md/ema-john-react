import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const product = props.good;
    const handle = props.handle;
    const {name, img, price, seller, stock, } = product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="shop-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <p>by {seller}</p>
                <p>${price}</p>
                <p>Only {stock} left in stock order soon</p>
                <button onClick={()=>handle(product)}>{element} Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;