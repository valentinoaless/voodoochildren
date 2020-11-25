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
        console.log('useeffect')
        getDBCart().then(res=>{
            console.log(res)
            setCart(res);
            setNumItemsInCart(res.length);
        })
    },[])


    const removeItem =  async (i) => {
        let copyCart = [...cart]
        //let num = userCart.indexOf(item)
       // console.log(num);
        copyCart.splice(i, 1);
        //let cartNumItems = copyCart.length
        await updateDBCart(copyCart)
        //let cart = await getDBCart()
        //.log(cart)
        setCart(copyCart);
        setNumItemsInCart(copyCart.length);
        
    }

    const CartItems = () => {
        return cart.map((item,i) => {
            console.log(item);
            return  (
            <tr className="cart-row">
                <td>
                    {numItemsInCart}
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

        <Footer />
        </div>
    );
};

export default Cart;