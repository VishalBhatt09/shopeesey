import React from "react";
// import "./App.css"
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
// import { instagram_icon } from "../assets/instagram_icon.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h5>Get Help</h5>
          <ul>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/track">Track Order</a></li>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/returns">Returns</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Company</h5>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/stores">Stores</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Connect</h5>
          <ul className="social-icons">
            <li><a href="/" className="instagram_icon"><FaInstagram /></a></li>
            <li><a href="/" className="icon-facebook"><FaFacebook /></a></li>
            <li><a href="/" className="icon-twitter"><FaTwitter /></a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Sign Up for Updates</h5>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="copyright">
        © 2024 ShopEasy. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
