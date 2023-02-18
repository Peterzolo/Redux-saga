import { PRODUCT_LIST } from "../../constants";

export const productsReducer = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      console.log("Product reducer loaded", action);
      return [action.data];
    default:
      return data;
  }
};
