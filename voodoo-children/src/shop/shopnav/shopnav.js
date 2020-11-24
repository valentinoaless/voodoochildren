import React from 'react';
import './shopnav.css';
import { Link, Switch, Route } from 'react-router-dom'


const ShopNav = () => {
    return (
        <div className='shop-nav'>
            <div id="cart">
               <Link to='/shopping-cart' className="link">Cart (0)</Link>
            </div>
            <ul className='shop-links'>
                <Link to='/products/vinyl' className='link'><li>Vinyl</li></Link>
                <Link to='/products/hats' className='link'><li>Hats</li></Link>
                <Link to='/products/shirts' className='link'><li>Shirts</li></Link>
            </ul>
        </div>
    );
};

export default ShopNav;