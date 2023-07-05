import React from "react";
import CardDescription from "../CardDescription/CardDescription";
import Headers from "../Headers/Headers";

const ItemDetailContainer = ({ productsData }) => {
  return (
    <div>
      <Headers HeadersH1 ="Descripcion"/>
      {productsData.map((product) => {
        return <CardDescription key={product.id} productData={product}/>;
      })}
    </div>
  );
};

export default ItemDetailContainer;
