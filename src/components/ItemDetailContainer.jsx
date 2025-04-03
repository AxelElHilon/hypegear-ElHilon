import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ItemDetail from "./ItemDetail"; // Importamos ItemDetail

const productos = [
  { id: 1, name: "Remera Negra", category: "remeras", price: 5000, img: "/images/remera.png", description: "Remera negra de algodón" },
  { id: 2, name: "Gorra Negra", category: "gorras", price: 3000, img: "/images/gorra2.png", description: "Gorra negra ajustable" },
  { id: 3, name: "Zapatillas Blancas", category: "zapatillas", price: 10000, img: "/images/zapatillas2.png", description: "Zapatillas blancas deportivas" },
  { id: 4, name: "Remera Blanca", category: "remeras", price: 5000, img:"/images/remera2.png", description: "Remera blanca básica" },
  { id: 5, name: "Gorra Beige", category: "gorras", price: 3000, img: "/images/gorra.png", description: "Gorra beige clásica" },
  { id: 6, name: "Zapatillas Negras", category: "zapatillas", price: 12000, img: "/images/zapatillas.png", description: "Zapatillas negras urbanas" },
];


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productos.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="container text-center mt-4">
        <h2>Producto no encontrado</h2>
        <Link to="/" className="btn btn-primary mt-3">Volver al catálogo</Link>
      </div>
    );
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
