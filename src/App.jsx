import React from "react";
import { addToCart } from "./redux/actions/action";

const App = () => {
  addToCart();
  return <h1>Instruction</h1>;
};

export default App;
