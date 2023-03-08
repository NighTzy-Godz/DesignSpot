import { useNavigate, useParams } from "react-router-dom";
import "../../../../assets/css/single_product.css";

import useSingleProduct from "../hooks/useSingleProduct";
import LinkButton from "../../../ui/button/LinkButton";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import CartCounter from "./CartCounter";

const SingleProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { product } = useSingleProduct(productId);

  useEffect(() => {
    if (!product) {
      toast.error("Cannot find the item that you are looking for.");
      return navigate("/products");
    }
  });

  const renderContent = () => {
    if (!product) return;
    const {
      brand,
      color,
      category,
      desc,
      id,
      img,
      name,
      price,
      size,
      stock,
      sku,
    } = product;
    if (brand)
      return (
        <div className="container">
          <div className="single_product_container">
            <div className="single_product_left">
              <LinkButton path="/products" label="Go Back to Products" />
              <div className="img">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="single_product_right">
              <h1 className="product_name">{name}</h1>
              <p className="product_price">{price}</p>
              <p className="product_desc">{desc}</p>

              <div className="product_section">
                <p className="product_section_title">Availabilty: </p>
                <p className="product_section_data">{stock}</p>
              </div>

              <div className="product_section">
                <p className="product_section_title">SKU: </p>
                <p className="product_section_data">{sku}</p>
              </div>

              <div className="product_section">
                <p className="product_section_title">Brand: </p>
                <p className="product_section_data">{brand.name}</p>
              </div>

              <div className="product_section">
                <p className="product_section_title">Size: </p>
                <p className="product_section_data">{size}</p>
              </div>

              <div className="product_section">
                <p className="product_section_title">Color: </p>
                <p className="product_section_data">{color}</p>
              </div>
              <CartCounter />
            </div>
          </div>
        </div>
      );
  };

  return <React.Fragment>{renderContent()}</React.Fragment>;
};

export default SingleProduct;
