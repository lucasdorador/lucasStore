import "./componentsHeader.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logoStore from "../../assets/logoStore.png";
import InputSearch from "../InputSearch/componentsInputSearch.index";
import { IconUser } from "../Icons/User/iconUser";
import Cart from "../Cart/componentsCart.index";

function Header() {
  return (
    <div className="c-containerHeader">
      <header className="c-containerHeader__header">
        Fretes grátis nas compras acima de R$ 350,00
      </header>
      <div className="c-containerHeader__headerSecundary">
        <div className="c-containerHeader__logo">
          <LazyLoadImage src={logoStore} />
        </div>
        <div className="c-containerHeader__inputSearch">
          <InputSearch />
        </div>
        <div className="c-containerHeader__login">
          <IconUser width="4rem" height="4rem" />
          <div className="c-containerHeader__textLogin">
            Entre ou <b>{">"}</b> <p>cadastre-se</p>
          </div>
        </div>
        <div className="c-containerHeader__cart">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default Header;
