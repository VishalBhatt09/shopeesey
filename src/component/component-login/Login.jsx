import React from "react";
import "./style.css";
// import shopimg from "./img/shopimg.png";

function App() {
  return (
    <div className="container">
      <div className="form-section">
        <span className="logo">
          <i className="bi bi-book"></i>
        </span>
        <h2>shop Now</h2>
        <span className="sub-heading">
          Join over 1000 people learning with us.
        </span>
        <div className="btns">
          <button className="btn-secondary">
            <i className="bi bi-google"></i> Sign up with Google
          </button>
          <button className="btn-secondary">
            <i className="bi bi-facebook"></i> Sign up with Facebook
          </button>
        </div>
        <form>
          <label htmlFor="name">Username</label>
          <input className="form-control" type="text" name="name" required />
          <label htmlFor="email">Email</label>
          <input className="form-control" type="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            required
          />
          <div className="input-group">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the <a href="/">terms and conditions</a>
            </label>
          </div>
          <button type="submit" className="btn-primary mt">
            Sign Up
          </button>
        </form>
        <div className="footer-group">
          <span>
            Already Registered? <a href="/">Sign In</a>
          </span>
          <a href="/">Forgot password?</a>
        </div>
      </div>
      <div className="hero-section">
        {/* <img src={shopimg} alt="Dashboard" /> */}
      </div>
    </div>
  );
}

export default App;
