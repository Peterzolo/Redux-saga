import { ADD_TO_CART_REQUEST } from "../constants/cart-constant";

export const addToCart = (data) => {
  console.log("action is called", data);
  return { type: ADD_TO_CART_REQUEST, data };
};
