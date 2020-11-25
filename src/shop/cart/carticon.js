import React, { useState } from 'react';
import './carticon.css';
import cart from "./../../assets/products/cart.svg";
import { Link } from 'react-router-dom';
import { userCart } from "./usercart.js"
import { getDBCart } from "./../../userData/userData.js"

const CartIcon = (props) => {

    let [cartCount, setCartCount] = useState(userCart.length);

    getDBCart().then(res => {
        setCartCount(res.length);
    })


    return (
        <div id="cart-img">
            <p>{cartCount}</p>
            <Link to='/cart'><img src={cart} alt="cart"/></Link>
        </div>
    );
};

export default CartIcon;