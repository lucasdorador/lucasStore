import React from "react";
import "./styleScreensHome.css";

import Header from "../../components/Header/componentHeader.index";
import ListProducts from "./ListProducts/homeListProducts.index";

const Home: React.FC = () => {
  return (
    <div className="m-containerHome">
      <Header />
      <div className="m-gridProducts">
        <ListProducts />
      </div>
    </div>
  );
};

export default Home;
