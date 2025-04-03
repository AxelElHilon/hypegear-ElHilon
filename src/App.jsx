import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartView from "./components/CartView";
import Checkout from "./components/Checkout";
import WishlistView from "./components/WishlistView"; // ✅ Importar el componente de la Wishlist
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext"; // ✅ Asegurar que está importado correctamente

function App() {
  return (
    <CartProvider>
      <WishlistProvider> {/* ✅ Envolver la app con el WishlistProvider */}
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<WishlistView />} /> {/* ✅ Agregada la ruta */}
          </Routes>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
