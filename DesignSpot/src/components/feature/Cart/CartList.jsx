import React, { useEffect, useState } from "react";
import "../../../assets/css/cart_list.css";
import { getCart } from "../../../services/storage";
import Button from "../../ui/button/Button";
import LinkButton from "../../ui/button/LinkButton";

import CartBody from "./CartBody";
import CartHeaders from "./CartHeaders";
import CheckOutBox from "./CheckoutBox";
import useTotalPrice from "./useTotalPrice";
import cart_header from "./utils/cartHeader";

const CartList = () => {
  const cart = getCart();
  const { total } = useTotalPrice(cart);
  const [currCart, setCurrCart] = useState(cart);
  const [allTotal, setAllTotal] = useState(total);

  useEffect(() => {
    setAllTotal(total);
    setCurrCart(cart);
  }, [total]);

  const handleCartChange = (cart) => {
    setCurrCart(cart);
  };

  const handleAllPrice = (price) => {
    setAllTotal(price);
  };

  const renderCartBody = () => {
    return currCart.map((item) => {
      return (
        <React.Fragment key={item.id}>
          <CartBody
            data={item}
            onCartChange={handleCartChange}
            onAllPriceChange={handleAllPrice}
          />
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

          <CheckOutBox cart={currCart} allPrice={allTotal} />
          <div className="checkout_btn">
            <LinkButton label="Checkout" path="/" />
          </div>
        </div>
      </div>
    );
  };

  return <>{renderContent()}</>;
};

export default CartList;
