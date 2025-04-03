import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Hype Gear</Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item dropdown">
            <Link 
              className="nav-link dropdown-toggle" 
              to="#" 
              id="productosDropdown" 
              role="button"
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              Productos
            </Link>
            <ul className="dropdown-menu" aria-labelledby="productosDropdown">
              <li><Link className="dropdown-item" to="/category/remeras">Remeras</Link></li>
              <li><Link className="dropdown-item" to="/category/gorras">Gorras</Link></li>
              <li><Link className="dropdown-item" to="/category/zapatillas">Zapatillas</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/wishlist">Wishlist</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Carrito</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
