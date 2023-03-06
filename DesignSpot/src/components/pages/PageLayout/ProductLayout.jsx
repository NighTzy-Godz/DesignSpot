import { Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <div className="product_layout">
      <div className="container">
        <div className="product_layout_container">
          {/* Filtering */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
