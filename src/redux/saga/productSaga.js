import { takeEvery } from "redux-saga/effects";
import { PRODUCTS_LIST } from "../constants";

function* getProductsList() {
  console.log("PRODUCT LIST SAGA");
}
function* productSaga() {
  yield takeEvery(PRODUCTS_LIST, getProductsList);
}

export default productSaga;
