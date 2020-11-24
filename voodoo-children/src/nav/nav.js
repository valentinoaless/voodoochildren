import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const NavBar = () => {
    return (
        <div className="nav">
            <div className='nav-home'>
                <Link to='/' className='nav-link'>Home</Link>
            </div>
            <div className='nav-links'>
                <Link to="/about" className='nav-link'>About</Link>
                <Link to="/shop" className='nav-link'>Shop</Link> 
            </div>
        </div>
    );
};

export default NavBar;