import Filter from "../../../common/Filter";
import { useProduct } from "../hooks/useProduct";
import ProductList from "./ProductList";
import "../../../../assets/css/product_layout.css";
import { useEffect } from "react";
import useFilterDesign from "../hooks/useFilterDesign";

const ProductLayout = () => {
  const { products } = useProduct();
  console.log(products);
  const { filterMaxScroll } = useFilterDesign();

  useEffect(() => {
    document.title = "Products";
  }, []);

  return (
    <div className="product_layout">
      <div className="product_layout_container">
        {/* FILTERING HERE */}
        <div className="product_layout_left">
          <Filter maxScroll={filterMaxScroll} />
        </div>
        {/* Product List and Card here */}
        <div className="product_layout_right">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
