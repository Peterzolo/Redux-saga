import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers/cartReducer";
import { productsReducer } from "./product/productReducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});
