import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ItemQuantitySelector from "./ItemQuantitySelector";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
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

        <ItemQuantitySelector stock={10} onQuantityChange={setQuantity} />

        <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
          Agregar {quantity} al carrito
        </button>
        
        <button 
          className={`btn mt-3 ${isInWishlist ? 'btn-danger' : 'btn-outline-secondary'}`} 
          onClick={() => isInWishlist ? removeFromWishlist(product.id) : addToWishlist(product)}
        >
          {isInWishlist ? "Quitar de Wishlist" : "Agregar a Wishlist"}
        </button>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-success shadow">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">🛒 ¡Producto agregado!</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body text-center">
                <h5 className="mb-3">🎉 Agregaste <strong>{quantity}</strong> unidad{quantity > 1 && 'es'} de <strong>{product.name}</strong> al carrito.</h5>
                <span className="fs-2">🔥🙌✨</span>
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <Link to="/cart" className="btn btn-outline-primary" onClick={() => setShowModal(false)}>
                  Ver carrito
                </Link>
                <button className="btn btn-success" onClick={() => setShowModal(false)}>
                  Seguir comprando
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
