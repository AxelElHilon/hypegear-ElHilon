import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setBuyer({ ...buyer, email: currentUser.email });
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setBuyer({ ...buyer, email: result.user.email });
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      alert("Debes iniciar sesión antes de continuar.");
      return;
    }

    if (cart.length === 0) {
      alert("El carrito está vacío. Agrega productos antes de finalizar la compra.");
      return;
    }

    const order = {
      buyer: { name: buyer.name, email: buyer.email, phone: buyer.phone },
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: totalPrice, 
      date: Timestamp.fromDate(new Date()), 
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
    <div className="container mt-5 p-4 shadow rounded bg-light">
      <h2 className="text-center text-primary mb-4">Finalizar Compra</h2>
      {orderId ? (
        <div className="alert alert-success text-center p-5 shadow-lg rounded">
          <h3 className="fw-bold text-success">🎉 ¡Compra Exitosa! 🎉</h3>
          <p className="fs-5">Gracias por tu compra, <strong>{buyer.name}</strong>. Tu pedido ha sido registrado con éxito.</p>
          <p className="fs-5"><strong>ID de compra:</strong> <span className="text-primary fw-bold">{orderId}</span></p>
          <p className="text-muted">En breve recibirás un correo con los detalles de tu compra.</p>
          <Link to="/" className="btn btn-lg btn-primary mt-4 px-5">Volver al Inicio</Link>
        </div>
      ) : (
        <>
          {!user ? (
            <div className="text-center mb-4">
              <p>Para continuar con la compra, inicia sesión:</p>
              <button onClick={handleLogin} className="btn btn-primary">Iniciar sesión con Google</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mb-3 p-4 border rounded bg-white shadow-sm">
              <div className="mb-3">
                <label className="form-label fw-bold">Nombre</label>
                <input type="text" name="name" className="form-control" value={buyer.name} onChange={handleChange} required placeholder="Ingrese su nombre" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input type="email" className="form-control" value={buyer.email} disabled />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Teléfono</label>
                <input type="tel" name="phone" className="form-control" value={buyer.phone} onChange={handleChange} required placeholder="Ingrese su número de teléfono" />
              </div>
              <button type="submit" className="btn btn-success w-100 py-2 fs-5">🛒 Confirmar Compra</button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default Checkout;
