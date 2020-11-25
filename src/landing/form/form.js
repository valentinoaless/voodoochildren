import React from 'react';
import './form.css'
import guitar from './../../assets/LandingPics/guitar.svg'
import wallet from './../../assets/LandingPics/wallet.svg'
import checkmark from './../../assets/LandingPics/authenticity-seal.svg'

const Form = () => {
    return (
        <div className="form">
            <div className="guitar">
                <img className="images" src={guitar} alt="guitar photo" />
                <h5 className="form-text">The only place to get the exclusive Jimi Hendrix "Experience 27" collection</h5>
            </div>
            <div className="wallet">
                <img className="images" src={wallet} alt="wallet photo" />
                <h5 className="form-text">Make payments easier to afford. Now accepting AfterPay and Klarna payment installments.</h5>
            </div>
            <div className="checkmark">
                <img className="images" src={checkmark} alt="authenticity photo" />
                <h5 className="form-text">Know your products are authentic Jimi Hendrix items with our Authenticity Seals.</h5>
            </div>
        </div>
    );
};

export default Form;