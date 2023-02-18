import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItem } from "../../App";
import {
  addToCart,
  emptyCart,
  removeItemFromCart,
} from "../../redux/actions/action";
import { productList } from "../../redux/actions/product";

const Main = () => {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="title">Redux Saga</div>
      <button onClick={() => dispatch(addToCart(cartItem))}>Add to cart</button>
      <button onClick={() => dispatch(removeItemFromCart(cartItem.itemName))}>
        Remove from cart
      </button>
      <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      <div>
        {" "}
        <button onClick={() => dispatch(productList())}>
          Load Prodict List
        </button>
      </div>
    </div>
  );
};

export default Main;
