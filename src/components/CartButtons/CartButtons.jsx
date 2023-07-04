import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import "./CartButtons.css"

const CartButtons = ({productId}) => {
  const [state, setState] = useState(1);
  const { count, setCount } = useContext(CartContext);

  const handleClickSuma = () => {
    setState(state + 1);
  };

  const handleClickRes = () => {
    setState(state - 1);
  };

  const addToCart = () => { 
    const existingProduct = count.tecnologia.find(
      (p) => p.productId === productId
    );
    if (existingProduct) {
      existingProduct.quantity += state;
    } else {
      const newProduct = {
        productId,
        quantity: state,
      };
      setCount((prevState) => ({
        
        quantityItems: prevState.quantityItems + state,
        tecnologia: [...prevState.tecnologia, newProduct],
      }));
    }
  };

  return (
    <div>
      <div>
        <Button
          variant="outline-secondary"
          className="rounded-0"
          onClick={handleClickRes}
        >
          -
        </Button>
        <span>{state}</span>
        <Button
          variant="outline-secondary"
          className="rounded-0"
          onClick={handleClickSuma}
        >
          +
        </Button>
      </div>
      <Button
        className="ml-2"
        onClick={addToCart}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default CartButtons;
