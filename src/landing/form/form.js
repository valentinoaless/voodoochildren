import React from 'react';
import './form.css'

const Form = () => {
    return (
        <div className="form">
            <div className="guitar">
                <img className="images" src="./landingpics/guitar.svg" alt="guitar photo" />
                <h5 className="form-text">The only place to get the exclusive Jimi Hendrix "Experience 27" collection</h5>
            </div>
            <div className="wallet">
                <img className="images" src="./landingpics/wallet.svg" alt="wallet photo" />
                <h5 className="form-text">Make payments easier to afford. Now accepting AfterPay and Klarna payment installments.</h5>
            </div>
            <div className="checkmark">
                <img className="images" src="./landingpics/authenticity-seal.svg" alt="authenticity photo" />
                <h5 className="form-text">Know your products are authentic Jimi Hendrix items with our Authenticity Seals.</h5>
            </div>
        </div>
    );
};

export default Form;