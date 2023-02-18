import React from "react";
import { addToCart } from "./redux/actions/action";
import { useDispatch } from "react-redux";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
const App = () => {
  const dispatch = useDispatch();

  const cartItem = {
    itemName: "New Gucci Bag",
    itemPrice: 5000,
    discount: 600,
    brand: "Gucci",
  };

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default App;
