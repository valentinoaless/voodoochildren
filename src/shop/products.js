import React from 'react';
import NavBar from '../nav/nav.js'
import Product from './product-details/product/product.js'
import { productlist } from './product-details/product/productlist.js';
import Footer from '../footer/footer.js';
import './products.css';
import bg from "./../assets/background/promo-bg.png";
import CartIcon from "./cart/carticon.js";
import { userCart } from "./cart/usercart";


const Products = (props) => {

    const LoadProducts = (props) => {

        let products = [];

        for(let i = Number(props.first); i <= Number(props.last); i++) {
            products.push(
                <div>
                    <Product {...productlist[i]} />
                </div>
            )
        }

        return products;
    }

    return (
        <div>
            <NavBar />
            <CartIcon />
            <div className="products">
                <LoadProducts first="0" last="5"/>
                <div style={{position: "relative"}}>
                    <img src={bg} width="100%" alt=""/>
                    <h3 id="promo">Get 10% Off</h3>
                </div>
                <LoadProducts first="6" last="8"/>
                <Footer />
            </div>
        </div>
    );
};

export default Products;