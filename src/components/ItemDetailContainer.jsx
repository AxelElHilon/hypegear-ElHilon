import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "items", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          let productData = docSnap.data();

          // Unificar `image` y `img` para evitar errores de carga de imágenes
          if (productData.image && !productData.img) {
            productData.img = productData.image;
          }

          console.log("Producto encontrado:", productData);
          setProduct({ id: docSnap.id, ...productData });
        } else {
          console.warn("Producto no encontrado en Firebase.");
          setProduct(null);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;

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
