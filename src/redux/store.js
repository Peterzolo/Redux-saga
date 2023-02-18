// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rotReducer";
import createSagaMiddleWare from "redux-saga";
import productSaga from "./saga/productSaga";

const sagaMiddleware = createSagaMiddleWare();

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(productSaga);

// export const store = createStore(rootReducer);
