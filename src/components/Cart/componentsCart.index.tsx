import React from "react";
import { IconCart } from "../Icons/Cart/iconCart";
import "./componentsCart.css";
import { useSelector } from "react-redux";
import { InterfaceSelectorRedux } from "../../Store/reduxInterface.types";
import { maskValue } from "../../utils/masks";

const Cart: React.FC = () => {
  const totalCart = useSelector(
    (state: InterfaceSelectorRedux) => state.shoppingCart.totalCart
  );

  return (
    <div className="c-containerCart">
      <div className="c-containerCart--text">Carrinho de compra</div>
      <IconCart width="4rem" height="4rem" />
      <div className="c-displayValue">
        <span>R$&nbsp;</span>
        {maskValue(totalCart)}
      </div>
    </div>
  );
};

export default Cart;
