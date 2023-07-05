import React from "react";
import CartButtons from "../CartButtons/CartButtons";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./ProductCard.css"

const ProductCard = ({ productData }) => {

  return (
    <Card className="Card">
        <div>
          <Card.Title className='Title'>{productData.title}</Card.Title>
          <div className='Images'>
            <Link to={`/products/${productData.id}`}><img src={productData.images} alt={productData.title}/></Link>
          </div>
      </div>
      <div className='Previous'>$ {productData.previous_price}</div>
      <div> $ {productData.price}</div>
      <Card.Body>
        <div className='Stock'>Stock: {productData.stock}</div>
      <CartButtons productId={productData.id}/>
      <div className="Detail">
        <Link to={`/products/${productData.id}`}>
          ir a descripcion
        </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
