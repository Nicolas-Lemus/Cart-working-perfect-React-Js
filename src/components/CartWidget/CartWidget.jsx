import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const [quantity,setQuantity] = useState(0);
  const {count} = useContext(CartContext);

  useEffect(() => {
    
    setQuantity(count.tecnologia.reduce((total, product) => total + product.quantity, 0));
  }, [count]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        to="/cart"
        style={{
          display: "flex",
          width: "35px",
          justifyContent: "space-between",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <FontAwesomeIcon icon={faCartShopping} />
        <span>{quantity}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
