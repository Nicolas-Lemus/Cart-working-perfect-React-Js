import React, { useState, useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import  DotSpinner  from "../animations/DotSpinner ";
import Headers from "../components/Headers/Headers";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    const db = getFirestore();
    const tecnologiaCollection = collection(db, "tecnologia");
    getDocs(tecnologiaCollection)
    
      .then((snapshot) => {
        setProductsData(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch(() => setError(true))
      .then(() => setLoading(false));
  }, []);

  return (
    <div>
    {loading ? (
        <DotSpinner/>
    ):error ? (
        <div>Algo salio mal</div>
    ):(
        <div>
            <Headers HeadersH1="Productos"/>
            <ItemListContainer productsData={productsData}/>
        </div>
    )}
    </div> 
);
};

export default Products;
