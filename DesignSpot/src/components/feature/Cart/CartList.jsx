import React from "react";
import "../../../assets/css/cart_list.css";
import { getCart } from "../../../services/storage";
import CartBody from "./CartBody";
import CartHeaders from "./CartHeaders";

const CartList = () => {
  // const cart_header = ["Item", "Price", "Quantity", "Subtotal"];
  const cart_header = [
    { name: "Item", class: "table-width-100" },
    { name: "Price", class: "table-width-80" },
    { name: "Quantity", class: "table-width-80" },
    { name: "SubTotal", class: "table-width-80" },
  ];
  const cart = getCart();

  const renderCartBody = () => {
    return cart.map((item) => {
      return (
        <React.Fragment key={item.id}>
          <CartBody data={item} />
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
        </div>
      </div>
    );
  };

  return <>{renderContent()}</>;
};

export default CartList;
