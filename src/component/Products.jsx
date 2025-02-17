import React from "react";
// import { Products } from "./data2.json";
// import { data } from "./data2";
import { all_product } from "../Assets/Frontend_Assets/all_product.js";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/cartSlice";
// import Navebar from './Navebar';

function Products() {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  return (
    <>
      <section className="class-products">
        {/* <Navebar /> */}
        <h2>Products</h2>
        <div className="product-list">
          {all_product.map((item) => (
            <div key={item.id} className="item">
              <div className="img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="name">{item.name}</div>
              <div className="price">
                <span className="new-price">${item.new_price}</span>
                {item.old_price && <span className="old-price">${item.old_price}</span>}
              </div>
              {item.description && <div className="des">{item.description}</div>}
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Products;
