import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  const renderContent = products.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <ProductCard data={item} />
      </React.Fragment>
    );
  });
  return <div className="">{renderContent}</div>;
};

export default ProductList;
