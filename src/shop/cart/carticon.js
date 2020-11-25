import React, { useState } from 'react';
import './carticon.css';
import cart from "./../../assets/products/cart.svg";
import { userCart } from "./usercart.js"
import { getDBCart } from "./../../userData/userData.js"

const CartIcon = () => {

    let [cartCount, setCartCount] = useState(0);

    getDBCart().then(res => {
        setCartCount(res.length);
    })

    return (
        <div id="cart-img">
            <p>{cartCount}</p>
            <img src={cart} alt="cart"/>
        </div>
    );
};

export default CartIcon;