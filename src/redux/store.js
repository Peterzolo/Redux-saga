import { createStore } from "redux";
import { rootReducer } from "./reducers/rotReducer";

export const store = createStore(rootReducer);
