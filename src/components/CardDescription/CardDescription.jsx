import React from "react";
import CartButtons from "../CartButtons/CartButtons";
import Card from "react-bootstrap/Card";
import "./CardDescription.css"


const CardDescription = ({ productData }) => {

  return (
    <Card className="cardDescription">
      <div className="Images">
        <Card.Img src={productData.images}/>
      </div>
      
      <Card.Title className="Title">{productData.title}</Card.Title>
      <Card.Body>
        <div className="Description">{productData.description}</div>
        <div className="Stock">
          {productData.stock}
        </div>
        <div className="Price"> $ {productData.price}</div>
          <CartButtons  productId={productData.id}/>
        <div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardDescription;
