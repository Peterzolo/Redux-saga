import React from "react";
import { addToCart } from "./redux/actions/action";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();

  const cartItem = {
    itemName: "New Gucci Bag",
    itemPrice: 5000,
    discount: 600,
    brand: "Gucci",
  };

  return (
    <div>
      <div className="title">Redux Saga</div>
      <button onClick={() => dispatch(addToCart(cartItem))}>Add to cart</button>
    </div>
  );
};

export default App;
