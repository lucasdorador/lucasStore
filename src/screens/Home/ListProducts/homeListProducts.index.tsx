import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IconCart } from "../../../components/Icons/Cart/iconCart";
import "./homeListProducts.css";
import { products } from "./mockJson";

const ListProducts: React.FC = () => {
  console.log(products);
  return (
    <div className="m-containerListProducts">
      {products.map((prod: any) => (
        <div key={prod.id} className="m-containerListProducts__cardProduct">
          <div className="m-containerListProducts__image">
            <LazyLoadImage src={prod.image} alt="errou" />
          </div>
          <div className="m-containerListProducts__namePrice">
            <p className="m-containerListProducts__name">{prod.name}</p>
            <p className="m-containerListProducts__price">
              <span>R$ </span>
              {prod.price}
            </p>
          </div>
          <div className="m-containerListProducts__buttonBuy">
            <button>
              <div className="m-containerListProducts__buttonIconText">
                <IconCart width="3.5rem" height="3.5rem" fill={"white"} />
                <p>COMPRAR</p>
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
