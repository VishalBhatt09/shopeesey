import React, { useState } from "react";
import logo from "../img/logo.png";
import cart from "../img/cart_icon.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navebar() {
  const [menu, setMenu] = useState("home");
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);    
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="..." />
        <p>ShopEasy</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <NavLink className="nav-link" to="/">
            Home
            {menu === "home" ? <hr /> : <></>}
          </NavLink>
        </li>
        <li
          onClick={() => {
            setMenu("About");
          }}
        >
          <NavLink className="nav-link" to="/About">
            About
            {menu === "About" ? <hr /> : <></>}
          </NavLink>
        </li>
        <li
          onClick={() => {
            setMenu("category");
          }}
        >
          <NavLink className="nav-link" to="/category">
            category
            {menu === "category" ? <hr /> : <></>}
          </NavLink>
        </li>
        <li
          onClick={() => {
            setMenu("Products");
          }}
        >
          <NavLink className="nav-link" to="/Products">
            Products
            {menu === "Products" ? <hr /> : <></>}
          </NavLink>
        </li>
        <li
          onClick={() => {
            setMenu("contact us");
          }}
        >
          <NavLink className="nav-link" to="/contact us">
            contact us
            {menu === "contact us" ? <hr /> : <></>}
          </NavLink>
        </li>
      </ul>
      <div className="nav-login-cart">
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
        <NavLink to="/cart">
          <img src={cart} alt="" />
          {cartQuantity > 0 && (
            <div className="nav-cart-count">{cartQuantity}</div>
          )}
        </NavLink>

        
      </div>
    </div>
  );
}
