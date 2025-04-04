import React from "react";

const CartToast = ({ product, quantity, onClose }) => {
  return (
    <div className="toast show align-items-center text-white bg-success border-0 position-fixed bottom-0 end-0 m-4" role="alert">
      <div className="d-flex">
        <div className="toast-body">
          <strong>{product.name}</strong> x{quantity} agregado al carrito 🛒🎉
        </div>
        <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={onClose}></button>
      </div>
      <div className="mt-2 px-3 pb-2 d-flex justify-content-between">
        <a href="/cart" className="btn btn-light btn-sm me-2">Ver carrito</a>
        <button className="btn btn-outline-light btn-sm" onClick={onClose}>Seguir comprando</button>
      </div>
    </div>
  );
};

export default CartToast;
