import React from "react";
import "./CartDetailCard.css"
const CartDetailCard = ({ product, quantity}) => {

  return (
    <div className="Card">
      <div className="Images">
        <img src={product.images} alt={product.title} />
      </div>
      <div>
        <div className="Title">{product.title}</div>
        <div className="qty">
          Cantidad:{quantity.quantity}
        </div>
      </div>
    </div>
  );
};

export default CartDetailCard;