import React from 'react';
import './product.css';
import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <div className="product">
            <div className="product-image">
                <Link to={`/products/${props.name}`}>
                    <img src={props.image} alt={props.name} width="187px" height="200px"></img>
                </Link>
            </div>
            <div>
                <h3 className="product-name">{props.name}</h3>
                <p className="product-type">{props.type}</p>
                <h1 className="product-price">${props.price}</h1>
            </div>
        </div>
    );
};

export default Product;