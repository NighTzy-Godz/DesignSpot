import Filter from "../../../common/Filter";
import { useProduct } from "../hooks/useProduct";
import ProductList from "./ProductList";
import "../../../../assets/css/product_layout.css";
import React, { useEffect, useState } from "react";
import useFilterDesign from "../hooks/useFilterDesign";
import categories from "../../../../data/category";
import brands from "../../../../data/brand";
import filterData from "../../../../utils/filterData";

const ProductLayout = () => {
  const { products } = useProduct();
  const { filterMaxScroll } = useFilterDesign();
  const [state, setState] = useState({
    data: [],
    brands: [],
    currentBrand: "All Brand",
    category: [],
    currentCategory: "All Categories",
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

  const handleCategoryChange = (category) => {
    setState({ ...state, currentCategory: category });
  };

  const handleRange = (range) => {
    setState({ ...state, range });
  };

  const handleBrandChange = (e) => {
    setState({ ...state, currentBrand: e.target.value });
  };

  const handleClearFilter = () => {
    setState({
      ...state,

      currentBrand: "All Brand",
      currentCategory: "All Categories",
    });
  };

  const renderContent = () => {
    const { data, currentCategory, currentBrand, range } = state;

    let filteredData = filterData(currentCategory, currentBrand, range, data);
    console.log(state);

    return (
      <div className="product_layout">
        <div className="product_layout_container">
          <div className="product_layout_left">
            <Filter
              filters={state}
              maxScroll={filterMaxScroll}
              onRangeChange={handleRange}
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
