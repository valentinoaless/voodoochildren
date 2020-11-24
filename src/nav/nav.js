import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const NavBar = () => {
    return (
        <div className="nav">
            <div className='nav-links'>
                <Link to="/products" className='nav-link'>shop</Link> 
                <Link to="/about" className='nav-link'>get groovy</Link>
            </div>
            <div className='nav-home'>
                <Link to='/' className='nav-link'>
                    <img id="logo" src='./images/logo/logo.png' alt="Jimi Hendrix - Home"/>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;