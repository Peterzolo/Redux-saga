import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

export const cartItem = {
  itemName: "New Gucci Bag",
  itemPrice: 5000,
  discount: 600,
  brand: "Gucci",
};

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default App;
