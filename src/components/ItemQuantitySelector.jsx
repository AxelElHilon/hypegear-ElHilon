import React, { useState } from "react";

const ItemQuantitySelector = ({ stock, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="d-flex align-items-center">
      <button className="btn btn-outline-secondary" onClick={handleDecrease}>-</button>
      <span className="mx-2">{quantity}</span>
      <button className="btn btn-outline-secondary" onClick={handleIncrease}>+</button>
    </div>
  );
};

export default ItemQuantitySelector;
