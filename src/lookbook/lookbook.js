import React from "react";
import NavBar from "../nav/nav.js";
import "./lookbook.css";
import Footer from "../footer/footer.js";
import { Link } from "react-router-dom";
import hendrix from "./../assets/componentsLB/Hendrix-photo.png";
import img1 from "./../assets/componentsLB/LB-1.png";
import img2 from "./../assets/componentsLB/LB-2.png";
import img3 from "./../assets/componentsLB/LB-3.png";
import img4 from "./../assets/componentsLB/LB-4.png";
import img5 from "./../assets/componentsLB/LB-5.png";
import img6 from "./../assets/componentsLB/LB-6.png";

const Lookbook = () => {
  return (
    <div>
      <NavBar />
      <div className="lookbook">
        <h3 className="get-groovy">Get Groovy</h3>
        <div className="about">
          <img className="lbImg" src={hendrix} alt="Hendrix" />
          <div className="ctainfo">
            <h5 className="experience-27">
              Experience 27<br></br> Lookbook
            </h5>
            <p className="paragraphP">
              Exclusive to the official website, authentic Jimi Hendrix inspired
              looks.
            </p>
            <br></br>
            <p className="paragraphP">Limited quantity, get yours today!</p>
            <Link to="/products">
              <button className="lbButton">Shop Now</button>
            </Link>
          </div>
        </div>

        <div className="gallery">
          <div className="img1 img-container">
            <img className="gallery-image" src={img1} alt="LB IMG 1" />
          </div>
          <div className="img2 img-container">
            <img className="gallery-image" src={img2} alt="LB IMG 2" />
          </div>
          <div className="img3 img-container">
            <img className="gallery-image" src={img3} alt="LB IMG 3" />
          </div>
          <div className="img4 img-container">
            <img className="gallery-image" src={img4} alt="LB IMG 4" />
          </div>
          <div className="img5 img-container">
            <img className="gallery-image" src={img5} alt="LB IMG 5" />
          </div>
          <div className="img6 img-container">
            <img className="gallery-image" src={img6} alt="LB IMG 6" />
          </div>
        </div>
        <Footer />

      </div>

    </div>
  );
};

export default Lookbook;
