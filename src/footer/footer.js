import React from "react";
import "./footer.css";
import bg from './../assets/footer/wavyblue.png';
import arrow from './../assets/LandingPics/arrow.png'


const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>

      <h4 className="footer-text">
        Sign Up for Emails on
        <br>
        </br>Exclusive Merch!
      </h4>

      <div className="email-input">
        <input className="formEmail" type="email" placeholder="Email Address"></input>

        <button className="arrow-button"><img className="arrow" src={arrow} alt="arrow photo" /></button>
      </div>
      <div className="policyLinks">
        <a href="#">Return Policy</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Track Order</a>
      </div>
      <p className="footer-copyright">
        Copyright © 1996-2020 Authentic Hendrix, LLC. All Rights Reserved. "Jimi
        Hendrix", "The Jimi Hendrix Experience", "Authentic Hendrix", "Experience Hendrix", "Dagger Records",
        "I Am Experienced" and the
        respective insignias and logos are trademarks of Experience Hendrix, LLC, and are used under
        license by The Thread Shop and Musictoday II,
        LLC.
      </p>
    </div>
  );
};
export default Footer;
