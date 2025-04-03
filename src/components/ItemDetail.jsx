import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import ItemQuantitySelector from "./ItemQuantitySelector";

const ItemDetail = ({ product }) => {
  console.log("Renderizando ItemDetail con producto:", product);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="container mt-4 text-center">
      <div className="card p-4">
        <h2>{product.name}</h2>
        <img src={product.img} alt={product.name} className="img-fluid" /> {/* Aquí cambié image por img */}
        <p className="mt-3">{product.description}</p>
        <h4 className="text-success">${product.price}</h4>

        {/* Selector de cantidad */}
        <ItemQuantitySelector stock={10} onQuantityChange={setQuantity} />

        {/* Botón para agregar al carrito */}
        <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
          Agregar {quantity} al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
