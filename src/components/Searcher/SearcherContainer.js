import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase";
import ItemList from "../ListingProducts/ItemList";
import LoadingBars from "../LoadingBars";

const SearcherContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search } = useLocation();

  useEffect(() => {
    setLoading(true);
    const queryPath = new URLSearchParams(search);
    let arrayContain = queryPath.get("q").split("-");
    const collection = firestore.collection("items");
    let query = collection.where("tags", "array-contains-any", arrayContain);
    query = query.get();
    query
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((item) => ({ ...item.data(), itemId: item.id }))
        );
        setLoading(false);
      })
      .catch((error)=>{
        console.log(error);
        setLoading(false);
      });
  }, [search]);
  return (
    <div>
      {
        !products.length && !loading
          ? (<div className="alert-cart-no-products">
                <h2>NO SE HA ENCONTRADO EL PRODUCTO BUSCADO</h2>
                <Link to="/"><button >HOME</button></Link>
            </div>)
          : <ItemList listProducts={products} />
      }
      { loading &&  <LoadingBars/>}
    </div>
  );
};

export default SearcherContainer;
