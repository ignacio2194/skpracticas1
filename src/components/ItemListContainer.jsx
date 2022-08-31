import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
const ItemListContainer = ({ nameEcommerce }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const url = await fetch("https://fakestoreapi.com/products/");
    const data = await url.json();
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  });

  return (
    <div>
      <h1>{nameEcommerce}</h1>
      <ItemCount />
      {products.map((item) => (
        <div key={item.id} className="products">
          <div className="products_container">
            <div className="products__image">
              <img src={item.image} alt="imagen del producto" />
              <h1>{item.title}</h1>
              <h3> ${item.price}</h3>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
