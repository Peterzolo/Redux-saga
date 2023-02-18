import React from "react";
import { useDispatch } from "react-redux";
import { cartItem } from "../../App";
import { addToCart } from "../../redux/actions/action";

const Main = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="title">Redux Saga</div>
      <button onClick={() => dispatch(addToCart(cartItem))}>Add to cart</button>
      <button onClick={() => dispatch(addToCart(cartItem))}>
        Remove from cart
      </button>
      <button onClick={() => dispatch(addToCart(cartItem))}>Empty cart</button>
    </div>
  );
};

export default Main;
