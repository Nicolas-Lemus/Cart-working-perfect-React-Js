import React from "react";
import CartButtons from "../CartButtons/CartButtons";
import Card from "react-bootstrap/Card";


const CardDescription = ({ productData }) => {

  return (
    <Card>
      <Card.Img variant="top" src={productData.images} />
      <Card.Body>
        <div>{productData.description}</div>
        <Card.Title>{productData.title}</Card.Title>
        {productData.stock}
          <CartButtons  productId={productData.id}/>
        <div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardDescription;
