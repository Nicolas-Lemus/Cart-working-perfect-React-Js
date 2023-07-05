import React, { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import DotSpinner from "../animations/DotSpinner ";
import Headers from "../components/Headers/Headers";

const Category = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const tecnologiaCollection = collection(db, "tecnologia");
    getDocs(tecnologiaCollection)
      .then((snapshot) => {
        
        const productsFilter = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductsData(
          productsFilter.filter((products) => products.category === categoryId)
        );
      })
      .catch(() => setError(true))
      .then(() => setLoading(false));
  }, [categoryId]);

  return loading ? (
    <DotSpinner/> 
    ) : error ? (
      <div>Algo salio mal</div>
    ) : (
    <div>
      <Headers HeadersH1 ="Categorias"/>
      <ItemListContainer productsData={productsData} />;
    </div>
  )
};

export default Category;
