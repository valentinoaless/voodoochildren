import React from 'react';
import NavBar from '../../nav/nav.js'
import ShopNav from '../shopnav/shopnav.js'
import Product from './product/product.js'
import productlist from './productlist.json';
import Footer from '../../footer/footer.js'
import './products.css'

const Products = (props) => {

    const LoadProducts = () => {
        return productlist[0][props.match.params.productType].map((product) => {
            return (
                <div>
                    <Product {...product} />
                </div>
            )
        })

    }


    return (
        <div>
            <NavBar />
            <ShopNav />
            <div className="products">
                <LoadProducts />
            </div>
            <Footer />
        </div>
    );
};

export default Products;