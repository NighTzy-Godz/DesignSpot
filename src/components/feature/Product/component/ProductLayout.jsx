import Filter from "../../../common/Filter";
import { useProduct } from "../hooks/useProduct";
import ProductList from "./ProductList";
import "../../../../assets/css/product_layout.css";
import React, { useEffect, useState } from "react";
import useFilterDesign from "../hooks/useFilterDesign";
import categories from "../../../../data/category";
import brands from "../../../../data/brand";
import filterData from "../../../../utils/filterData";
import SearchBar from "../../../common/SearchBar";

const ProductLayout = () => {
  const { products } = useProduct();
  const { filterMaxScroll } = useFilterDesign();
  const [state, setState] = useState({
    data: [],
    brands: [],
    currentBrand: "All Brand",
    category: [],
    currentCategory: "All Categories",
    search: "",
    range: 10000,
  });

  useEffect(() => {
    document.title = "Products";
    setState({
      ...state,
      data: products,
      category: [{ name: "All Categories" }, ...categories],

      brands: [{ name: "All Brand" }, ...brands],
    });
  }, [products]);

  const handleSearch = (search) => {
    setState({
      ...state,
      search,
      currentBrand: "All Brand",
      currentCategory: "All Categories",
    });
  };

  const handleCategoryChange = (category) => {
    setState({ ...state, currentCategory: category, search: "" });
  };

  const handleBrandChange = (e) => {
    setState({ ...state, currentBrand: e.target.value, search: "" });
  };

  const handleClearFilter = () => {
    setState({
      ...state,

      currentBrand: "All Brand",
      currentCategory: "All Categories",
    });
  };

  const renderContent = () => {
    const { data, currentCategory, currentBrand, range, search } = state;

    let filteredData = filterData(currentCategory, currentBrand, data, search);

    return (
      <div className="product_layout">
        <div className="product_layout_container">
          <div className="product_layout_left">
            <SearchBar search={search} onSearchChange={handleSearch} />
            <Filter
              filters={state}
              maxScroll={filterMaxScroll}
              onCategoryChange={handleCategoryChange}
              onBrandChange={handleBrandChange}
              onClearFilter={handleClearFilter}
            />
          </div>

          <div className="product_layout_right">
            <ProductList products={filteredData} />
          </div>
        </div>
      </div>
    );
  };

  return <React.Fragment>{renderContent()}</React.Fragment>;
};

export default ProductLayout;
