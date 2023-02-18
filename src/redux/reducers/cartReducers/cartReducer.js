import {
  ADD_TO_CART_SUCCESS,
  EMPTY_CART,
  REMOVE_FROM_CART,
} from "../../constants";

export const cartReducer = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      console.log("Reducer loaded", action);
      return [...data, action.data];

    case REMOVE_FROM_CART:
      console.log("Reducer loaded", action);
      data.length = data.length ? data.length - 1 : [];
      return [...data];

    case EMPTY_CART:
      console.log("Empty Cart", action);
      data = [];
      return [...data];

    default:
      return data;
  }
};
