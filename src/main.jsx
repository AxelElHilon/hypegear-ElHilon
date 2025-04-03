import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/CartContext"; // Importamos el contexto del carrito

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider> {/* Envolvemos la app en el contexto del carrito */}
      <App />
    </CartProvider>
  </StrictMode>
);
