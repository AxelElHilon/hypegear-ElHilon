import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const productos = [
  { id: 1, name: "Remera Negra", category: "remeras", price: 5000, img: "/images/remera.png", description: "Remera negra de algodón" },
  { id: 2, name: "Gorra Negra", category: "gorras", price: 3000, img: "/images/gorra2.png", description: "Gorra negra ajustable" },
  { id: 3, name: "Zapatillas Blancas", category: "zapatillas", price: 10000, img: "/images/zapatillas2.png", description: "Zapatillas blancas deportivas" },
  { id: 4, name: "Remera Blanca", category: "remeras", price: 5000, img:"/images/remera2.png", description: "Remera blanca básica" },
  { id: 5, name: "Gorra Beige", category: "gorras", price: 3000, img: "/images/gorra.png", description: "Gorra beige clásica" },
  { id: 6, name: "Zapatillas Negras", category: "zapatillas", price: 12000, img: "/images/zapatillas.png", description: "Zapatillas negras urbanas" },
];

const ItemListContainer = ({ greeting = "¡Bienvenido a nuestra tienda!" }) => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      setFilteredProducts(productos.filter((prod) => prod.category === categoryId));
    } else {
      setFilteredProducts(productos);
    }
  }, [categoryId]);

  return (
    <div className="container mt-4 text-center">
      <h2>{greeting}</h2>
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;
