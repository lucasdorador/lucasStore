import React, { useCallback, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ButtonBuy from "./ButtonBuy/listProductsButtonBuy.index";
import "./homeListProducts.css";
import { InterfaceListProducts } from "./homeListProducts.types";
import imageNotFound from "../../../assets/imageNotFound.jpg";
import { useDispatch, useSelector } from "react-redux";
import { InterfaceSelectorRedux } from "../../../Store/reduxInterface.types";
import { InterfaceItemsCart } from "../../../Store/modules/ShoppingCart/shoppingCart.types";
import ModalAddItems from "../../../components/ModalAddItems/componentsModalAddItem.index";
import { functionValidProductInCart } from "../../../utils/functions";
import { ItemSelected } from "../../../Store/modules/ShoppingCart/shoppingCart.action";
import { getAllProducts } from "../../../Store/modules/Products/products.action";

const ListProducts: React.FC = () => {
  const dispatch = useDispatch();
  const itemsSelected = useSelector(
    (state: InterfaceSelectorRedux) => state.shoppingCart.itemSelected
  );

  const itemsInCart = useSelector(
    (state: InterfaceSelectorRedux) => state.shoppingCart.itemsCart
  );

  const products = useSelector(
    (state: InterfaceSelectorRedux) => state.products.items
  );

  const functionAddItemCartMobile = useCallback(
    (prod: InterfaceListProducts) => {
      if (window.innerWidth < 550) {
        dispatch(ItemSelected(prod));
      }
    },
    []
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="m-containerListProducts">
      {products.map((prod: InterfaceListProducts) => (
        <div
          key={prod.id}
          onClick={() => {
            functionAddItemCartMobile(prod);
          }}
          className="m-containerListProducts__cardProduct"
        >
          <div className="m-containerListProducts__image">
            <LazyLoadImage srcSet={imageNotFound} src={prod.image} />
          </div>
          <div className="m-containerListProducts__namePrice">
            <p className="m-containerListProducts__name">{prod.name}</p>
            <p className="m-containerListProducts__price">
              <span>R$ </span>
              {prod.price}
            </p>
          </div>
          <div className="m-containerListProductsButtonBuy">
            <ButtonBuy
              productSelected={prod}
              productInCart={functionValidProductInCart(prod, itemsInCart)}
            />
          </div>
        </div>
      ))}
      {itemsSelected.id !== "" && <ModalAddItems />}
    </div>
  );
};

export default ListProducts;
