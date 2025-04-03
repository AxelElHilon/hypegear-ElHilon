import React from "react";
import { Link } from "react-router-dom";
import './Item.css';

const Item = ({ id, name, price, img }) => {
  return (
    <div 
      className="card m-3 card-hover" 
      style={{ width: "18rem", transition: "transform 0.3s ease-in-out" }}
    >
      <img src={img} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Precio: ${price}</p>
        <Link to={`/item/${id}`} className="btn btn-primary">Ver más</Link>
      </div>
    </div>
  );
};

export default Item;
