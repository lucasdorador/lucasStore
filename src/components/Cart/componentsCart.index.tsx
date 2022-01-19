import React from "react";
import { IconCart } from "../Icons/Cart/iconCart";
import "./componentsCart.css";
// import { Container } from './styles';

const Cart: React.FC = () => {
  return (
    <div className="c-containerCart">
      <IconCart width="4rem" height="4rem" />
      <div className="c-displayValue">0,00</div>
    </div>
  );
};

export default Cart;
