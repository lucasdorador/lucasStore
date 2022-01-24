// import ListProducts from "./homeListProducts.index";
import ScreenHome from "./screensHome";
import { Provider } from "react-redux";
import initialStateWithoutItemsCart from "../../tests/initialStateWithoutItemsCart.json";
import initialStateWithItemsCart from "../../tests/initialStateWithItemsCart.json";
import initialStateWithMoreItemsCart from "../../tests/initialStateWithMoreItemsCart.json";
import { screen, render, userEvent } from "../../tests/index";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

const title = "COMPRAR";

describe("Screens Home", () => {
  const initialState_withoutItems = initialStateWithoutItemsCart;
  const initialState_withItems = initialStateWithItemsCart;
  const initialState_withMoreItems = initialStateWithMoreItemsCart;
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;

  it("deverá conter o botão 'COMPRAR' no produto, se não houver nenhum produto no carrinho", () => {
    store = mockStore(initialState_withoutItems);
    render(
      <Provider store={store}>
        <Router>
          <ScreenHome />
        </Router>
      </Provider>
    );

    const buyButton = screen.getByRole("button", { name: title });

    expect(buyButton).toBeInTheDocument();
  });

  it("deverá conter o botão de 'LIXEIRA' no produto, se houver somente um item no carrinho.", () => {
    store = mockStore(initialState_withItems);

    render(
      <Provider store={store}>
        <Router>
          <ScreenHome />
        </Router>
      </Provider>
    );

    const buttonTrash = screen.getByRole("trashIcon");
    expect(buttonTrash).toBeInTheDocument();
  });

  it("deverá conter o botão de 'DECREMENTO' no produto, se houver mais do que um item no carrinho", () => {
    store = mockStore(initialState_withMoreItems);

    render(
      <Provider store={store}>
        <Router>
          <ScreenHome />
        </Router>
      </Provider>
    );

    const buttonDecrement = screen.getByRole("decrementIcon");
    expect(buttonDecrement).toBeInTheDocument();
  });
});
