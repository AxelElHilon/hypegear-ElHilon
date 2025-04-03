import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting = "¡Bienvenido a nuestra tienda!" }) => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let itemsCollection = collection(db, "items");
        let q = categoryId
          ? query(itemsCollection, where("category", "==", categoryId))
          : itemsCollection;
        
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map(doc => {
          let data = doc.data();

          // Asegurar que todas las imágenes usen "img"
          if (data.image && !data.img) {
            data.img = data.image;
          }

          return { id: doc.id, ...data };
        });

        console.log("Productos obtenidos de Firebase:", products);
        setFilteredProducts(products);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="container mt-4 text-center">
      <h2>{greeting}</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList products={filteredProducts} />}
    </div>
  );
};

export default ItemListContainer;
