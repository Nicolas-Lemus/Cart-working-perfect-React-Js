import React, { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import DotSpinner from "../animations/DotSpinner ";

const Category = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const productCollection = collection(db, "products");
    getDocs(productCollection)
      .then((snapshot) => {
        
        const productsFilter = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductsData(
          productsFilter.filter((products) => products.category === categoryId)
        );
      })
      .catch((error) => setError(true))
      .then(() => setLoading(false));
  }, [categoryId]);

  return loading ? (
    <DotSpinner/> 
    ) : error ? (
      <div>Algo salio mal</div>
    ) : (
    <div>
      <ItemListContainer productsData={productsData} />;
    </div>
  )
};

export default Category;
