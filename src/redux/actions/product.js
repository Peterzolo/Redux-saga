import { PRODUCTS_LIST } from "../constants";

export const productList = () => {
  // const data = "Hello";
  // console.log("product list action called";
  return { type: PRODUCTS_LIST, data: "Hello Sage" };
};
