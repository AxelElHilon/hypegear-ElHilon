import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartView from "./components/CartView";
import Checkout from "./components/Checkout"; // ✅ Importado
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout" element={<Checkout />} /> {/* ✅ Agregado */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
