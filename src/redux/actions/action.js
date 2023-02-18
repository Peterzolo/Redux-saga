import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  EMPTY_CART,
  REMOVE_FROM_CART,
} from "../constants";

export const addToCart = (data) => {
  console.log("action is called", data);
  return { type: ADD_TO_CART_SUCCESS, data };
};

export const removeItemFromCart = (data) => {
  console.log("Remove from cart", data);
  return { type: REMOVE_FROM_CART, data };
};

export const emptyCart = () => {
  console.log("Empty cart");
  return { type: EMPTY_CART };
};
