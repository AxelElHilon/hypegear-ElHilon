import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {products.map((product) => (
        <Item 
          key={product.id} 
          id={product.id} 
          name={product.name} 
          price={product.price} 
          img={product.img} 
        />
      ))}
    </div>
  );
};

export default ItemList;
