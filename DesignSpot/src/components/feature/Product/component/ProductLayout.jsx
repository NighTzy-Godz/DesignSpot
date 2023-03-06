import Filter from "../../../common/Filter";
import { useProduct } from "../hooks/useProduct";
import ProductList from "./ProductList";

const ProductLayout = () => {
  const { products } = useProduct();

  return (
    <div className="product_layout">
      <div className="container">
        <div className="product_layout_container">
          {/* FILTERING HERE */}
          <Filter />
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
