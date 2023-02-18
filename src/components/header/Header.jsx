import React from "react";
import { useSelector } from "react-redux";
import { BsFillCartFill } from "react-icons/bs";
import "../header/Header.scss";

const Header = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <div className="header-wrap">
      <div className="header-content">
        <div className="left-item-wrap">1</div>
        <div className="middle-item-wrap">2</div>
        <div className="right-item-wrap">3</div>
        <div className="extre-right-item-wrap">
          <div className="cart">
            <BsFillCartFill />{" "}
          </div>
          <div className="item-count">0</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
