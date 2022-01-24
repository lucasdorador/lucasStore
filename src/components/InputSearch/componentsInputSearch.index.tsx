import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllProducts,
  searchProducts,
} from "../../Store/modules/Products/products.action";
import { IconSearch } from "../Icons/Search/iconSearch";
import "./componentsInputSearch.css";

const InputSearch: React.FC = () => {
  const dispatch = useDispatch();
  const [searchedText, setSearchedText] = useState("");

  useEffect(() => {
    if (searchedText.length === 0) {
      dispatch(getAllProducts());
    }
  }, [searchedText]);

  return (
    <div className="c-containerInputSearch">
      <input
        type="search"
        placeholder="Digite o produto para pesquisar"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchedText(e.target.value);
        }}
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            e.preventDefault();
            dispatch(searchProducts(searchedText));
          }
        }}
      />
    </div>
  );
};

export default InputSearch;
