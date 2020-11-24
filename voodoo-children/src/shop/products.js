import React from 'react';
import NavBar from '../nav/nav.js'
import Product from './products/product/product.js'
import productlist from './products/productlist.json';
import Footer from '../footer/footer.js'
import './products.css'

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
            <div className="products">
                <LoadProducts first="0" last="5"/>
                <div style={{position: "relative"}}>
                    <img src="./images/background/promo-bg.png" width="100%" alt=""/>
                    <h3 id="promo">Get 10% Off</h3>
                </div>
                <LoadProducts first="6" last="8"/>
                <Footer />
            </div>
        </div>
    );
};

export default Products;