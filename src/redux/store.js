// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rotReducer";

export const store = configureStore({ reducer: rootReducer });

// export const store = createStore(rootReducer);
