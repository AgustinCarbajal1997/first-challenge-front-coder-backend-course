import React, { useState, useEffect, useCallback, useContext } from "react";
import ItemList from "./ItemList";
import { useParams, useHistory } from "react-router";
import LoadingBars from "../LoadingBars";
import { CartContext } from "../../context/CartContext";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { permits } = useContext(CartContext)
  const { id } = useParams();
  const history = useHistory();
  
  const deleteProduct = useCallback(
    (id) => {
      fetch(`http://localhost:3000/api/productos/${id}/admin`,{
        method:"DELETE"
      })
      .then(response => response.json())
      .then(data => history.push("/deleteProduct"))
    },
    [history],
  )

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`http://localhost:3000/api/productos/category/${id}`)
        .then(response => response.json())
        .then(data => {
          setProducts(data)
          setLoading(false);
        })
        .catch(error => console.log(error))
    } else {
      setLoading(true);
      fetch(`http://localhost:3000/api/productos/all`)
        .then(response => response.json())
        .then(data => {
          setProducts(data)
          setLoading(false)
        })
        .catch(error => console.log(error))
    }
  }, [id, deleteProduct]);

  
  




  return (
    <div>
      <ItemList listProducts={products} permits={permits} deleteProduct={deleteProduct}/>
      { loading &&  <LoadingBars/>}
      
    </div>
  );
};
      

export default ItemListContainer;
