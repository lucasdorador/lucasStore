import React, { useCallback } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ButtonBuy from "./ButtonBuy/listProductsButtonBuy.index";
import "./homeListProducts.css";
import { InterfaceListProducts } from "./homeListProducts.types";
import { products } from "./mockJson";

const ListProducts: React.FC = () => {
  return (
    <div className="m-containerListProducts">
      {products.map((prod: InterfaceListProducts) => (
        <div key={prod.id} className="m-containerListProducts__cardProduct">
          <div className="m-containerListProducts__image">
            {/* <LazyLoadImage src={prod.image} alt="errou" /> */}
          </div>
          <div className="m-containerListProducts__namePrice">
            <p className="m-containerListProducts__name">{prod.name}</p>
            <p className="m-containerListProducts__price">
              <span>R$ </span>
              {prod.price}
            </p>
          </div>
          <ButtonBuy productSelected={prod} />
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
