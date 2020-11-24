import React from 'react';
import NavBar from '../nav/nav.js'
import ShopNav from './shopnav/shopnav.js'
import Footer from '../footer/footer.js'
import './shop.css';

const Shop = () => {
    return (
        <div>
            <NavBar />
            <ShopNav />
            <div className='shop-landing' style={{height: '100vh'}}>
                <h1>Shop Today</h1>
            </div>
            <Footer />
        </div>
    );
};

export default Shop;