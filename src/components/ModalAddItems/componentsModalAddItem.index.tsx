import { createPortal } from "react-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import ButtonBuy from "../../screens/Home/ListProducts/ButtonBuy/listProductsButtonBuy.index";
import { InterfaceSelectorRedux } from "../../Store/reduxInterface.types";
import { functionValidProductInCart } from "../../utils/functions";
import imageNotFound from "../../assets/imageNotFound.jpg";
import "./componentsModalAddItem.css";
import { IconClose } from "../Icons/Close/IconClose";
import { ItemSelected } from "../../Store/modules/ShoppingCart/shoppingCart.action";

const ModalAddItems: React.FC = () => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector(
    (state: InterfaceSelectorRedux) => state.shoppingCart.itemsCart
  );

  const itemSelected = useSelector(
    (state: InterfaceSelectorRedux) => state.shoppingCart.itemSelected
  );

  return createPortal(
    <div className="c-backdropModalAddItems">
      <div className="c-containerModalItems">
        <div className="c-continerModalItems__closed">
          <IconClose
            onClick={() => {
              dispatch(ItemSelected(null));
            }}
            width="3rem"
            height="3rem"
          />
        </div>
        <div className="c-ModalItemsImageDescription">
          <div className="c-ModalItems__Image">
            <LazyLoadImage srcSet={imageNotFound} src={itemSelected.image} />
          </div>
          <div className="c-ModalItems__NamePrice">
            <p className="m-ModalItems__name">{itemSelected.name}</p>
            <p className="m-ModalItems__price">
              <span>R$ </span>
              {itemSelected.price}
            </p>
          </div>
        </div>
        <ButtonBuy
          productInCart={functionValidProductInCart(itemSelected, itemsInCart)}
          productSelected={itemSelected}
        />
        <button
          onClick={() => {
            dispatch(ItemSelected(null));
          }}
          className="c-ModalItemsButtonConfirm"
        >
          Confirmar produto
        </button>
      </div>
    </div>,
    document.querySelector("#root-portal")!
  );
};

export default ModalAddItems;
