import React from "react";
import ProductDescription from "../CardDescription/CardDescription";
const ItemDetailContainer = ({ productsData }) => {
  return (
    <div>
      {productsData.map((product) => {
        return <ProductDescription key={product.id} productData={product}/>;
      })}
    </div>
  );
};

export default ItemDetailContainer;
