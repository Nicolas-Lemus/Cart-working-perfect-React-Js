import React from "react";
import "./CartDetailCard.css"
const CartDetailCard = ({ product, qty }) => {

  return (
        <div>
          <div>
            <img src={product.images} alt={product.title} />
          </div>
          <div>
            <h2>{product.title}</h2>
            <p>Cantidad: {qty.qty}</p>
          </div>
        </div>
  );
};

export default CartDetailCard;