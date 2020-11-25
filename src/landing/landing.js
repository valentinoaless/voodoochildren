import React from 'react';
import './landing.css';
import NavBar from '../nav/nav.js'
import Headline from './headline/headline.js'
import Benefits from './benefits/benefits.js'
import Reviews from './reviews/reviews.js'
import Form from './form/form.js'
import Footer from '../footer/footer.js'

const Landing = () => {

    return (
        <div className="landing-bg">
            <NavBar linkColor='white' />
            <div className="landing-content">
                <Headline />
                <Benefits />
                <Reviews />
                <Form />
            </div>
            <Footer />
        </div>
    );
};

export default Landing;