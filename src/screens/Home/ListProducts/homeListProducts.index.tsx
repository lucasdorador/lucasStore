import React, { useCallback } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ButtonBuy from "./ButtonBuy/listProductsButtonBuy.index";
import "./homeListProducts.css";
import { InterfaceListProducts } from "./homeListProducts.types";
import { products } from "./mockJson";
import imageNotFound from "../../../assets/imageNotFound.jpg";
import { useSelector } from "react-redux";
import { InterfaceSelectorRedux } from "../../../Store/reduxInterface.types";
import { InterfaceItemsCart } from "../../../Store/modules/ShoppingCart/shoppingCart.types";

const ListProducts: React.FC = () => {
  const itemsInCart = useSelector(
    (state: InterfaceSelectorRedux) => state.shoppingCart.itemsCart
  );

  const functionValidProductInCart = (prod: InterfaceListProducts) => {
    let result = {
      isProductInCart: false,
      quantityProduct: 0,
    };

    if (itemsInCart.length > 0) {
      const _filter = itemsInCart.filter(
        (item: InterfaceItemsCart) => item.id === prod.id
      );

      if (_filter.length > 0) {
        result = {
          isProductInCart: true,
          quantityProduct: _filter[0].quantity,
        };
      }
    } else {
      result = {
        isProductInCart: false,
        quantityProduct: 0,
      };
    }

    return result;
  };

  return (
    <div className="m-containerListProducts">
      {products.map((prod: InterfaceListProducts) => (
        <div key={prod.id} className="m-containerListProducts__cardProduct">
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
          <ButtonBuy
            productSelected={prod}
            productInCart={functionValidProductInCart(prod)}
          />
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
