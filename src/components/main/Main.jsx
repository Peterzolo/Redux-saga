import React from "react";

const Main = () => {
  return (
    <div>
      <div className="title">Redux Saga</div>
      <button onClick={() => dispatch(addToCart(cartItem))}>Add to cart</button>
    </div>
  );
};

export default Main;
