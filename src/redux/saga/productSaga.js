// import axios from "axios";
import { takeEvery } from "redux-saga/effects";
import { PRODUCTS_LIST } from "../constants";

function* getProductsList() {
  let data = yield fetch("http://localhost:3000/products");
  data = yield data.json();
  console.log("PRODUCTS", data);
}
function* productSaga() {
  yield takeEvery(PRODUCTS_LIST, getProductsList);
}

export default productSaga;
