import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ItemQuantitySelector from "./ItemQuantitySelector";

const ItemDetail = ({ product }) => {
  console.log("Renderizando ItemDetail con producto:", product);
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowModal(true);
  };

  const isInWishlist = wishlist.some(item => item.id === product.id);

  return (
    <div className="container mt-4 text-center">
      <div className="card p-4">
        <h2>{product.name}</h2>
        <img src={product.img} alt={product.name} className="img-fluid" /> 
        <p className="mt-3">{product.description}</p>
        <h4 className="text-success">${product.price}</h4>

        {/* Selector de cantidad */}
        <ItemQuantitySelector stock={10} onQuantityChange={setQuantity} />

        {/* Botón para agregar al carrito */}
        <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
          Agregar {quantity} al carrito
        </button>
        
        {/* Botón para agregar o quitar de la wishlist */}
        <button 
          className={`btn mt-3 ${isInWishlist ? 'btn-danger' : 'btn-outline-secondary'}`} 
          onClick={() => isInWishlist ? removeFromWishlist(product.id) : addToWishlist(product)}
        >
          {isInWishlist ? "Quitar de Wishlist" : "Agregar a Wishlist"}
        </button>
      </div>

      {/* Modal de compra exitosa */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">🎉 ¡Compra Exitosa! 🎉</h5>
                <button type="button" className="close" onClick={() => setShowModal(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p> ¡Producto agregado al carrito con éxito! 🎉🛒 </p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-success" onClick={() => setShowModal(false)}>Aceptar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
