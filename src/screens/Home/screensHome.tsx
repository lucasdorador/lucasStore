import React from "react";
import Styles from "./styleScreensHome.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import coverImage from "../../assets/coverImage.jpg";

const Home: React.FC = () => {
  return (
    <div className={Styles.container}>
      <header className={Styles.header}>
        Fretes grátis nas compras acima de R$ 150,00
      </header>
      <div className={Styles.coverImage}>
        <LazyLoadImage src={coverImage} />
      </div>
      <div className={Styles.tagSearch}>
        TARGA PARA PESQUISA, LOGO E NOME DA LOJA
      </div>
      <div className={Styles.products}></div>
    </div>
  );
};

export default Home;
