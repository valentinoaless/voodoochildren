import React from 'react';
import './benefits.css'
import { Link } from 'react-router-dom'

const Benefits = () => {
    return (
        <div className="benefits">
            <img className="mask-image" src="./landingpics/mask.png" alt="mask photo" />

            <div className="collection">
                <h3 className="hendrix-face-mask">Hendrix Face Mask Collection</h3>
                <h5 className="collection-text">A portion of the proceeds from each face mask sale will be donated by Authentic Hendrix, LLC to the Odessa Brown's Children's Clinic in Seattle, WA.</h5>
                <Link to='/products'><button className="landing-button"><b>Shop Now</b></button></Link>
            </div>

        </div>
    );
};

export default Benefits;