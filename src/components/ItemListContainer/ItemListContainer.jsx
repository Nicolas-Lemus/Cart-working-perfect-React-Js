import React from "react";
import ProductCard from "../ProductCard/ProductCard";
const ItemListContainer = ({ productsData }) => {
  return (
    <div className="divPadre">
      {productsData.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
    </div>
  );
};

export default ItemListContainer;
