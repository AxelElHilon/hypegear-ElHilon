import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("El carrito está vacío. Agrega productos antes de finalizar la compra.");
      return;
    }

    const order = {
      buyer,
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: totalPrice, // ✅ Sin paréntesis
      date: Timestamp.fromDate(new Date()), // ✅ Formato recomendado por Firebase
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al crear la orden", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Finalizar Compra</h2>
      {orderId ? (
        <div>
          <h4>¡Gracias por tu compra!</h4>
          <p>Tu ID de compra es: <strong>{orderId}</strong></p>
          <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" name="name" className="form-control" value={buyer.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={buyer.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input type="tel" name="phone" className="form-control" value={buyer.phone} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-success">Confirmar Compra</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
