import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Header from "../../components/Header/componentHeader.index";
import "./screensCart.css";
import imageNotFound from "../../assets/imageNotFound.jpg";
import { useDispatch, useSelector } from "react-redux";
import { InterfaceSelectorRedux } from "../../Store/reduxInterface.types";
import { InterfaceItemsCart } from "../../Store/modules/ShoppingCart/shoppingCart.types";
import { IconRemove } from "../../components/Icons/Remove/IconRemove";
import { IconAdd } from "../../components/Icons/Add/IconAdd";
import { maskValue } from "../../utils/masks";
import { IconTrashWithoutBorder } from "../../components/Icons/Trash/IconTrashWithoutBorder";
import {
  AlterQuantityItemCart,
  RemoveItemCart,
} from "../../Store/modules/ShoppingCart/shoppingCart.action";
import { useNavigate } from "react-router-dom";
import { IconCaution } from "../../components/Icons/Caution/IconCaution";
import { IconCelebration } from "../../components/Icons/Celebration/IconCelebration";

const Cart: React.FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const _itemsCart = useSelector(
    (state: InterfaceSelectorRedux) => state.shoppingCart.itemsCart
  );
  const _totalCart = useSelector(
    (state: InterfaceSelectorRedux) => state.shoppingCart.totalCart
  );

  const functionIncrementQuantity = (item: InterfaceItemsCart) => {
    dispatch(AlterQuantityItemCart(item.id, item.quantity + 1));
  };

  const functionDecrementQuantity = (item: InterfaceItemsCart) => {
    if (item.quantity - 1 > 0) {
      dispatch(AlterQuantityItemCart(item.id, item.quantity - 1));
    }
  };

  const functionRemoveItemCart = (item: InterfaceItemsCart) => {
    dispatch(RemoveItemCart(item.id));

    if (_itemsCart.length === 1) {
      navigate("/");
    }
  };

  return (
    <div>
      <Header />
      <div className="m-headerGridItemsCart">
        <div className="m-headerTableCart">
          <p className="m-headerProducts">Produtos</p>
          <p className="m-headerQuantity">Quantidade</p>
          <p className="m-headerPrices">Preço</p>
          <p className="m-headerPrices--spaceButton" />
        </div>
        {_itemsCart &&
          _itemsCart.length > 0 &&
          _itemsCart.map((item: InterfaceItemsCart, idx: number) => (
            <div key={idx} className="m-dataGridItemsCart">
              <div className="m-ProductsImage">
                <LazyLoadImage srcSet={imageNotFound} src={item.image} />
              </div>
              <div className="m-ProductsNameObs">
                <div className="m-ProductsName">{item.name}</div>
                <div className="m-ProductsObs">
                  <input
                    type="text"
                    name="observationProducts"
                    placeholder="Digite a observação para esse produto."
                  />
                </div>
              </div>
              <div className="m-dataQuantity">
                <div className="m-dataQuantity_ButtonAlter">
                  <div
                    className="m-dataQuantity--center"
                    onClick={() => functionDecrementQuantity(item)}
                  >
                    <IconRemove width="3rem" height="3rem" />
                  </div>
                  <p>{item.quantity} un</p>
                  <div
                    className="m-dataQuantity--center"
                    onClick={() => functionIncrementQuantity(item)}
                  >
                    <IconAdd width="3rem" height="3rem" />
                  </div>
                </div>
              </div>
              <div className="m-dataPrices">
                <div className="m-dataPrices__unitValue">
                  <span>R$&nbsp;</span> {maskValue(parseFloat(item.price))}
                </div>
                <div className="m-dataPrices__totalValue">
                  <span>R$&nbsp;</span>{" "}
                  {maskValue(parseFloat(item.price) * item.quantity)}
                </div>
              </div>
              <div className="m-dataButtonTrashItem">
                <IconTrashWithoutBorder
                  width="5rem"
                  height="5rem"
                  fill="#000000ac"
                  onClick={() => functionRemoveItemCart(item)}
                />
              </div>
            </div>
          ))}
        <div className="m-footer">
          <div className="m-footer--keepBuying">
            <button
              className="m-footer__ButtonkeepBuying"
              onClick={() => {
                navigate("/");
              }}
            >
              Continuar Comprando
            </button>
            {_totalCart < 350 ? (
              <div className="m-footer--infoShipping">
                <IconCaution fill={"white"} />
                Falta apenas R$ {maskValue(350 - _totalCart)} para você
                conseguir o frete grátis.
              </div>
            ) : (
              <div className="m-footer--ShippingFree">
                <IconCelebration width="3rem" height="3rem" fill={"white"} />
                Parabéns você conseguiu frete grátis nessa compra.
              </div>
            )}
          </div>
          <div className="m-footer--valueTotal">
            <span>Valor Total:&nbsp;</span> {maskValue(_totalCart)}
          </div>
          <div className="m-footer--finish">
            <button
              onClick={() => {
                dispatch({ type: "RESET_REDUX" });
                navigate("/");
              }}
            >
              Finalizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
