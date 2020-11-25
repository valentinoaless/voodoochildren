import React from "react";
import "./footer.css";


const Footer = () => {
    return (
        <div
            className="footer"
            style={{ backgroundImage: "url(./componentsLB/wavyblue.png)" }}
        >
            <div className="footer-text">
                <h4>Sign Up for Email on Exclusive Merch!</h4>
                <div className="formEmail">
                    <input type="email" placeholder="Email Address"></input>
                </div>
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