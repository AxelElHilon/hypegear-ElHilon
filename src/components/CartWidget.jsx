import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="position-relative text-white">
      <FaShoppingCart size={24} />
      {totalItems > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
