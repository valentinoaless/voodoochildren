import React from 'react';
import NavBar from '../nav/nav.js'
import './lookbook.css'
import Footer from '../footer/footer.js'


const Lookbook = () => {
    return (
        <div>
            <NavBar />
            <div className="about" style={{height: `${window.innerHeight - 50}px`}}>
                <h1>Lookbook</h1>
            </div>
            <Footer />
        </div>
    );
};

export default Lookbook;