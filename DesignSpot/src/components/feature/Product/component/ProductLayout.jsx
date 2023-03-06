import Filter from "../../../common/Filter";
import { useProduct } from "../hooks/useProduct";
import ProductList from "./ProductList";
import "../../../../assets/css/product_layout.css";

const ProductLayout = () => {
  const { products } = useProduct();

  return (
    <div className="product_layout">
      <div className="product_layout_container">
        {/* FILTERING HERE */}
        <div className="product_layout_left">
          <Filter />
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
