import React, { useState } from "react";
import { getCart, setCart } from "../../../services/storage";
import Button from "../../ui/button/Button";
import CartCounter from "../Product/component/CartCounter";

const CartBody = ({ data }) => {
  const { id, img, name, color, price, quantity, subTotal } = data;
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const cart = getCart();

  const handleQuantityChange = (quantity) => {
    updateCartQty(quantity);
    setItemQuantity(quantity);
  };

  const updateCartQty = (qty) => {
    const newArr = [...cart];
    const index = newArr.findIndex((i) => i.id === id);
    newArr[index].quantity = qty;
    newArr[index].subTotal =
      parseInt(newArr[index].price) * newArr[index].quantity;
    setCart("cart", newArr);
  };
  return (
    <React.Fragment>
      <tr className="cart_body">
        <td className="table-width-100">
          <div className="cart_item">
            <div className="img">
              <img src={img} alt="" />
            </div>
            <div className="details">
              <h4>{name}</h4>
              <p>Color: {color}</p>
            </div>
          </div>
        </td>
        <td className="table-width-80">
          <div className="cart_price">
            <h4>P{price}</h4>
          </div>
        </td>
        <td className="table-width-80">
          <div className="cart_quantity">
            <CartCounter
              itemQuantity={itemQuantity}
              onQuantityChange={handleQuantityChange}
            />
          </div>
        </td>
        <td className="table-width-80">
          <div className="cart_subtotal">
            <h4>P{subTotal}</h4>
          </div>
        </td>

        <td className="table-width-80">
          <div className="cart_del_btn">
            <Button text="Delete" />
          </div>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default CartBody;
