import React, { useContext } from "react";
import { collection, getDoc, doc, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import CartDetailCard from "../components/CartDetailCard/CartDetailCard";
import Headers from "../components/Headers/Headers";
import DotSpinner from "../animations/DotSpinner ";


const fetchProductsByIds = async (ids) => {
  const db = getFirestore();
  const productRefs = ids.map((id) => doc(collection(db, "products"), id));
  const productSnapshots = await Promise.all(
    productRefs.map((productRef) => getDoc(productRef))
  );

  const products = productSnapshots.map((productSnapshot) => {
    if (productSnapshot.exists()) {
      return { id: productSnapshot.id, ...productSnapshot.data() };
    } else {
      return null;
    }
  });
  return products.filter((product) => product !== null);
};

const Cart = () => {
  const [error, setError] = React.useState(false);
  const [productsData, setProductsData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { count } = useContext(CartContext);

  React.useEffect(() => {
    const ids = count.products.map((product) => product.productId);
    fetchProductsByIds(ids)
      .then((res) => {
        setProductsData(res);
      })
      .catch((err) => setError(err))
      .then(() => setLoading(false));
  }, [count]);

  return loading ? (
    <DotSpinner/>
  ) : error ? (
    <div>Algo salio mal</div>
  ):(
    <div>
      <Headers HeadersH1="ShoppingCart"/>
      <div>
        {productsData.map((product) => (
          <CartDetailCard
            key={product.id}
            product={product}
            qty={count.products.find((item) => item.productId === product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;

