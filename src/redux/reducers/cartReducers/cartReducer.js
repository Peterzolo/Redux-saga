import { ADD_TO_CART_SUCCESS } from "../../constants/cart-constant";

export const cartReducer = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      console.log("Reducer loaded");
      return [...data, action.data];

    default:
      return data;
  }
};
