import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InterfaceSelectorRedux } from "../../Store/reduxInterface.types";
import Cart from "../Cart/componentsCart.index";
import "./componentFooter.css";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const _itemsCart = useSelector(
    (state: InterfaceSelectorRedux) => state.shoppingCart.itemsCart
  );

  const functionGoToCart = () => {
    if (_itemsCart.length > 0) {
      navigate("/cart");
    } else {
      alert("Sem itens no carrinho");
    }
  };

  return (
    <div className="c-containerHeader__cart--mobile" onClick={functionGoToCart}>
      <Cart />
    </div>
  );
};

export default Footer;
