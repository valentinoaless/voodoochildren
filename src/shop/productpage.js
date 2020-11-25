import React, { useEffect, useState } from "react";
import "./productpage.css";
import NavBar from "./../nav/nav.js";
import Footer from "./../footer/footer.js";
import { productlist } from "./product-details/product/productlist.js";
import CartIcon from "./cart/carticon.js";
import { Link, useHistory } from "react-router-dom";
import { userCart } from "./cart/usercart.js";
import { updateDBCart } from "./../userData/userData.js";

const ProductPage = (props) => {
  const history = useHistory();

  let product = productlist.find(
    (productItem) => productItem.name === props.match.params.productName
  );

  const Options = () => {
    return product.size.map((size) => {
      return <option>{size}</option>;
    });
  };

  const goToCart = (e) => {
    userCart.push({
      name: product.name,
      price: product.price,
      size: e.target.parentNode.elements["size"].value,
      quantity: Number(e.target.parentNode.elements["qty"].value),
    });
    updateDBCart(userCart).then(() => {
        history.push("/cart");
    });
    
  };

  return (
    <div>
      <NavBar />
      <CartIcon />
      <div className="product-page">
        <div className="product-details">
          <img
            className="productImg"
            src={product.image}
            alt={product.name}
          ></img>
          <div className="product-text">
            <h2>{product.name}</h2>
            <h3>USD ${product.price}</h3>
            <form>
              <div>
                <label htmlFor="size">Size</label>
                <br></br>
                <select id="size" name="size">
                  <Options />
                </select>
              </div>
              <div>
                <label htmlFor="qty">Qty</label>
                <br></br>
                <select id="qty" name="qty">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <br></br>
              <div id="add-cart" onClick={goToCart}>
                Add to cart
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
