import React from 'react';
import './headline.css';
import userData from '../../userData/userData.json';
import { updateCart } from '../../userData/userData.js';

const Headline = () => {

    const addItem = () => {
        userData.cart.push('shirt');
        updateCart(userData);
    }

    return (
        <div className="headline" style={{height: `${window.innerHeight - 50}px`}}>
            <h1>Headline</h1>
            <button onClick={addItem}>+</button>
        </div>
    );
};

export default Headline;