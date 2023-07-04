import React, { useEffect, useState } from "react";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import DotSpinner  from "../animations/DotSpinner ";

const Item = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const {itemId} = useParams();

  useEffect(() => {
    const db = getFirestore();

    const tecnologiaCollection = doc(db, "tecnologia", itemId);

    getDoc(tecnologiaCollection)
      .then((snapshot) => {
        setProductsData([{ id: snapshot.id, ...snapshot.data()}]);
      })
      .catch(() => setError(true))
      .then(() => setLoading(false));
  }, [itemId]);

  return loading ? (
      <DotSpinner/>
      ):error ? (
        <div>Algo salio mal</div>
      ):( 
      <div>
        <ItemDetailContainer productsData={productsData} />;
      </div>
  )
};

export default Item;
