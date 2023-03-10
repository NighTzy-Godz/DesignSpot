import React, { useState } from "react";
import "../../../assets/css/cart_list.css";
import { getCart } from "../../../services/storage";
import Button from "../../ui/button/Button";
import LinkButton from "../../ui/button/LinkButton";

import CartBody from "./CartBody";
import CartHeaders from "./CartHeaders";
import cart_header from "./utils/cartHeader";

const CartList = () => {
  const cart = getCart();

  const [currCart, setCurrCart] = useState(cart);

  const handleCartChange = (cart) => {
    setCurrCart(cart);
  };

  const renderCartBody = () => {
    return currCart.map((item) => {
      return (
        <React.Fragment key={item.id}>
          <CartBody data={item} onCartChange={handleCartChange} />
        </React.Fragment>
      );
    });
  };

  const renderContent = () => {
    if (cart.length === 0) {
      return <h1>No Items In THe Cart</h1>;
    }
    return (
      <div className="cart">
        <div className="container">
          <table>
            <thead>
              <CartHeaders headers={cart_header} />
            </thead>

            <tbody>{renderCartBody()}</tbody>
          </table>

          <hr />
          <div className="cart_util_btn">
            <LinkButton path="/products" label="Go Back to All Products" />
            <Button text="Clear Shopping Cart" />
          </div>
        </div>
      </div>
    );
  };

  return <>{renderContent()}</>;
};

export default CartList;
