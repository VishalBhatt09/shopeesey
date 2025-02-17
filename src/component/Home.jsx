import React, { useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import Slider from "./slider";
// import all_product from "../Assets/Frontend_Assets/all_product";

function HomePage() {
  const [menu, setMenu] = useState("home");

  const handleMenuChange = () => {
    setMenu("Products");
  };

  return (
    <div className="home-page">
      <header />
      <main>
        <section className="hero">
          <h1>Welcome to ShopEasy</h1>
          <p>Easy shopping, every day!</p>
          <div onClick={handleMenuChange}>
            <NavLink
              className="nav-link"
              to="/products"
              activeClassName="active"
            >
              <button>Start Shopping</button>
              {menu === "Products" && <hr />}
            </NavLink>
          </div>
        </section>

        <Slider />

        <section className="featured-categories">
          <h2>Shop by Category</h2>
          <div className="category-cards">
            {[
              {
                image: "electronics.jpg",
                alt: "Electronics",
                title: "Electronics",
                description: "Discover the latest gadgets and tech"
              },
              {
                image: "fashion.jpg",
                alt: "Fashion",
                title: "Fashion",
                description: "Trendy clothes and accessories"
              },
              {
                image: "home-decor.jpg",
                alt: "Home Decor",
                title: "Home Decor",
                description: "Beautify your living space"
              }
            ].map((category, index) => (
              <div key={index} className="category-card">
                <img src={category.image} alt={category.alt} />
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <button>Shop Now</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;

