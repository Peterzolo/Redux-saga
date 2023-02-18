import {
  ADD_TO_CART_FAIL,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
} from "../../constants/cart-constant";

const initialState = {
  cart: [],
  loading: false,
  error: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      console.log("Reducer works", action.data);
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ADD_TO_CART_SUCCESS:
      console.log("Reducer loaded");
      return [...state, action.data];
    case ADD_TO_CART_FAIL:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
