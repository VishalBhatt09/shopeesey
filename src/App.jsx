// App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navebar from "./component/Navebar";
// import Slider from "./component/slider";
import Home from "./component/Home"; // Create a new Home component
import About from "./component/About";
import Category from "./component/Category";
import Products from "./component/Products";
import Contact from "./component/Contact";
import Login from "./component/component-login/Login";
import Cart from "./component/Cart";
import Footer from "./component/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navebar />
        {/* <slider /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
