import Button from "../../../ui/button/Button";
import "../../../../assets/css/cart_counter.css";
import { useState } from "react";
const CartCounter = () => {
  const [items, setItem] = useState(1);

  const handleAddItem = () => {
    setItem(items + 1);
  };

  const hanndleRemoveItem = () => {
    if (items === 1) return setItem(1);
    setItem(items - 1);
  };

  return (
    <div className="counter_container">
      <Button text="+" btnEvent={handleAddItem} />
      <h3>{items}</h3>
      <Button text="-" btnEvent={hanndleRemoveItem} />
    </div>
  );
};

export default CartCounter;
