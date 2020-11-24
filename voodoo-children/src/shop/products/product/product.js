import React from 'react';
import './product.css';

const Product = (props) => {
    return (
        <div className="product">
            <div className="product-image">

            </div>
            <h1 className="product-name">{props.name}</h1>
            <h3 className="product-price">{props.price}<span> USD</span></h3>
        </div>
    );
};

export default Product;