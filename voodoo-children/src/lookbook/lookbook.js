import React from "react";
import NavBar from "../nav/nav.js";
import "./lookbook.css";
import Footer from "../footer/footer.js";
import { link } from "react-router-dom";

const Lookbook = () => {
  return (
    <div>
      <NavBar />
      <div className="lookbook">
        <h3>Get Groovy</h3>
        <div className="about">
          <img src="./componentsLB/Hendrix-photo.png" alt="Hendrix Picture" />
          <div className="ctainfo">
            <h5>
              Experience 27<br></br> Lookbook
            </h5>
            <p>
              Exclusive to the official website, authentic Jimi Hendrix inspired
              looks.
            </p>
            <br></br>
            <p>Limited quantity, get yours today!</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="lookbookImgs1strow">
          <img
            className="imgrowsizeing"
            src="./componentsLB/LB-1.png"
            alt="LB IMG 1"
          />
          <img
            className="imgrowsizeing"
            src="./componentsLB/LB-2.png"
            alt="LB IMG 2"
          />
          <img
            className="imgrowsizeing"
            src="./componentsLB/LB-3.png"
            alt="LB IMG 3"
          />
          <img
            className="imgrowsizeing"
            src="./componentsLB/LB-4.png"
            alt="LB IMG 4"
          />
        </div>
        <div className="lookbookImg2ndrow">
          <img src="./componentsLB/LB-5.png" alt="LB IMG 5" />
          <img src="./componentsLB/LB-6.png" alt="LB IMG 6" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Lookbook;
