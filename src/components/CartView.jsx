import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CartView = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  return (
    <div className="container mt-4">
      <h2>Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío. <Link to="/">Volver a la tienda</Link></p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.name}</h5>
                  <p>Cantidad: {item.quantity} - Precio: ${item.price.toFixed(2)} - Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <h4>Total: ${totalPrice.toFixed(2)}</h4>
          <div className="d-flex gap-2">
            <button className="btn btn-secondary" onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/checkout" className="btn btn-primary">Ir a Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartView;
