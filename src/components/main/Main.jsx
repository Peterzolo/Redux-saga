import React from "react";
import { useDispatch } from "react-redux";
import { cartItem } from "../../App";
import { addToCart, removeItemFromCart } from "../../redux/actions/action";

const Main = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="title">Redux Saga</div>
      <button onClick={() => dispatch(addToCart(cartItem))}>Add to cart</button>
      <button onClick={() => dispatch(removeItemFromCart(cartItem.itemName))}>
        Remove from cart
      </button>
      <button onClick={() => dispatch(addToCart())}>Empty cart</button>
    </div>
  );
};

export default Main;
