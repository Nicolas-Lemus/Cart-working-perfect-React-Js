import React from "react";
import CartButtons from "../CartButtons/CartButtons";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const ProductCard = ({ productData }) => {

  return (
    <Card>
      <div>
        <Link to={`/products/${productData.id}`}><img src={productData.images} alt={productData.title}/></Link>
      </div>
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        {productData.stock}
          <CartButtons productId={productData.id}/>
        <div>
        <Link to={`/products/${productData.id}`}>
              Descripcion
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
