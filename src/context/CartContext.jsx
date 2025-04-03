import { createContext, useContext, useState } from "react";

// Creamos el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar un producto al carrito
  const addToCart = (item, quantity) => {
    const existingItem = cart.find((product) => product.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Obtener la cantidad total de productos en el carrito
  const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);

  // Obtener el total del precio
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
