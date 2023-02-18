import { PRODUCT_LIST } from "../constants";

export const productList = () => {
  const data = "Hello";
  console.log("product list action called", data);
  return { type: PRODUCT_LIST, data };
};
