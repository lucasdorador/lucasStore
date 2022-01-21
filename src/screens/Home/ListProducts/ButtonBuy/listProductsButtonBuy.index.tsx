import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IconAdd } from "../../../../components/Icons/Add/IconAdd";
import { IconCart } from "../../../../components/Icons/Cart/iconCart";
import { IconRemove } from "../../../../components/Icons/Remove/IconRemove";
import { IconTrashWithBorder } from "../../../../components/Icons/Trash/IconTrashWithBorder";
import {
  AddNewItemCart,
  AlterQuantityItemCart,
  RemoveItemCart,
} from "../../../../Store/modules/ShoppingCart/shoppingCart.action";
import { InterfaceListProducts } from "../homeListProducts.types";
import "./listProductsButtonBuy.css";

interface InterfaceButtonBuy {
  productSelected: InterfaceListProducts;
  productInCart: {
    isProductInCart: boolean;
    quantityProduct: number;
  };
}

const ButtonBuy: React.FC<InterfaceButtonBuy> = (props) => {
  const dispatch = useDispatch();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [quantityLocal, setQuantityLocal] = useState(0);
  const [quantityLargerOne, setQuantityLargerOne] = useState(false);

  const functionAddItemCart = useCallback(() => {
    setButtonClicked(true);
    setQuantityLocal(1);

    dispatch(
      AddNewItemCart({
        ...props.productSelected,
        quantity: 1,
      })
    );
  }, []);

  const functionIncrementQuantity = useCallback(() => {
    setQuantityLocal((prev: number) => {
      return prev + 1;
    });
  }, []);

  const functionDecrementQuantity = useCallback(() => {
    setQuantityLocal((prev: number) => {
      return prev - 1;
    });
  }, []);

  const functionRemoveItemCart = useCallback(() => {
    setButtonClicked(false);
    dispatch(RemoveItemCart(props.productSelected.id));
  }, []);

  useEffect(() => {
    setQuantityLargerOne(quantityLocal > 1 ? true : false);
    dispatch(AlterQuantityItemCart(props.productSelected.id, quantityLocal));
  }, [quantityLocal]);

  useEffect(() => {
    if (props.productInCart.isProductInCart) {
      setButtonClicked(true);
      setQuantityLocal(props.productInCart.quantityProduct);
    }
  }, []);

  return (
    <div className="m-containerListProducts__buttonBuy">
      {buttonClicked ? (
        <button className="m-containerListProducts__buttonIconText">
          <div className="m-containerListProducts__buttonIconText--spaceBetween">
            {quantityLargerOne ? (
              <div onClick={functionDecrementQuantity}>
                <IconRemove width="3.5rem" height="3.5rem" fill={"white"} />
              </div>
            ) : (
              <div
                onClick={() => {
                  functionRemoveItemCart();
                }}
              >
                <IconTrashWithBorder
                  width="3.5rem"
                  height="3.5rem"
                  fill={"white"}
                />
              </div>
            )}
            <p>{quantityLocal} un</p>
            <div onClick={functionIncrementQuantity}>
              <IconAdd width="3.5rem" height="3.5rem" fill={"white"} />
            </div>
          </div>
        </button>
      ) : (
        <button
          onClick={() => {
            functionAddItemCart();
          }}
        >
          <div className="m-containerListProducts__buttonIconText--center">
            <IconCart width="3.5rem" height="3.5rem" fill={"white"} />
            <p className="m-containerListProducts__buttonText">COMPRAR</p>
          </div>
        </button>
      )}
    </div>
  );
};

export default ButtonBuy;
