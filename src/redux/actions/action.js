import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
} from "../constants/cart-constant";

export const addToCart = (data) => {
  console.log("action is called", data);
  return { type: ADD_TO_CART_SUCCESS, data };
};
