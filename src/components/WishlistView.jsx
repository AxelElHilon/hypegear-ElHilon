import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";

const WishlistView = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="container mt-4">
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No tienes productos en tu wishlist.</p>
      ) : (
        <ul className="list-group">
          {wishlist.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{item.name}</span>
              <div>
                <Link to={`/item/${item.id}`} className="btn btn-info btn-sm me-2">
                  Ver Producto
                </Link>
                <button 
                  className="btn btn-danger btn-sm" 
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Quitar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistView;
