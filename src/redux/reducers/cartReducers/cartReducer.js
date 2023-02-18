import {
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART,
} from "../../constants/cart-constant";

export const cartReducer = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      console.log("Reducer loaded", action);
      return [...data, action.data];

    case REMOVE_FROM_CART:
      console.log("Reducer loaded", action);
      data.length = data.length - 1;
      return [...data];

    default:
      return data;
  }
};
