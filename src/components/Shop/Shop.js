import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts]= useState([]);
    const [cart, setCart] = useState([]);
    const [searchData, setSarachData] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setSarachData(data);
        });
    }, []);
    const handleToCart = (props) =>{
        // console.log(props.name);
        const newCart = [...cart, props];
        setCart(newCart);
    }

    const getINputData = (event) =>{
        console.log(event.target.value);
        const inputValue = event.target.value;
        const matchData = products.filter(product => product.name.toLowerCase().includes(inputValue.toLowerCase()));
        setSarachData(matchData);
    }
    return (
        <div>
            <div className="search-feild">
                <input type="text" onChange={getINputData}/>
            </div>
            <div className="shop">
                <div className="products-details">
                    <h1>Shop porducts: {searchData.length}</h1>
                    
                    {
                        searchData.map( product => <Product 
                            key={product.key} 
                            good={product} 
                            handle={handleToCart}>
                            </Product>)
                    }
                </div>
                <div className="order-details">
                    <Order cart={cart}></Order>
                </div>
            </div>
        </div>
    );
};

export default Shop;