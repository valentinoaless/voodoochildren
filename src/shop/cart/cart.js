import React, { useEffect, useState } from 'react';
import './cart.css';
import NavBar from './../../nav/nav.js';
import Footer from './../../footer/footer.js';
import CartIcon from './carticon.js'
import { updateDBCart, getDBCart } from './../../userData/userData.js';
import { userCart } from './usercart.js';
import { productlist } from './../product-details/product/productlist.js';



const Cart = (props) => {

    let [numItemsInCart, setNumItemsInCart] = useState(userCart.length)
    let [cart, setCart] = useState(userCart);
    
    useEffect(() =>{
        getDBCart().then(res=>{
            setCart(res);
            setNumItemsInCart(res.length);
        })
    },[])


    const removeItem =  async (i) => {
        let copyCart = [...cart]
        copyCart.splice(i, 1);
        await updateDBCart(copyCart)
        setCart(copyCart);
        setNumItemsInCart(copyCart.length);
    }

    const getSubtotal = () => {
        let subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        console.log(cart.reduce((acc, item) => acc + (item.price * item.quantity)), 0);
        return subtotal;
    }

    const CartItems = () => {
        return cart.map((item,i) => {
            return  (
            <tr className="cart-row">
                <td>
                    <div style={{display: 'flex'}}>
                        <img src={productlist.find(product => product.name === item.name).image} alt={item.name}></img>
                        <div>
                            <h3>{item.name}</h3>
                            <h4>{item.size}</h4>
                        </div>
                    </div>
                </td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>${item.price * item.quantity}</td>
                <td><div className="remove-item" onClick={() => removeItem(i)}>X</div></td>
            </tr>)
        })
    }

    return (
        <div>
        <NavBar />
        <CartIcon number={numItemsInCart}/>
        <table className="cart">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <CartItems />
            </tbody>
        </table>
        <div>
            <h2>Subtotal: US ${getSubtotal().toFixed(2)}</h2>
            <h3>Tax: US ${(.07 * getSubtotal()).toFixed(2)}</h3>
            <h2>Order Total: US ${(1.07 * getSubtotal()).toFixed(2)}</h2>
            <div>Checkout</div>
        </div>
        <Footer />
        </div>
    );
};

export default Cart;