import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartItem } from "../../App";
import { addToCart } from "../../redux/actions/action";

const Main = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state);
  console.log("CART ITEMS", cartItems);
  return (
    <div>
      <div className="title">Redux Saga</div>
      <button onClick={() => dispatch(addToCart(cartItem))}>Add to cart</button>
    </div>
  );
};

export default Main;
