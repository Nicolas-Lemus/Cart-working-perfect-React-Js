import React from "react";
import ProductCard from "../ProductCard/ProductCard";
const ItemListContainer = ({ productsData }) => {
  return (
    <div>
      {productsData.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
    </div>
  );
};

export default ItemListContainer;
