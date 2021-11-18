import { useEffect, useState, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../context/CartContext";
import { useParams } from "react-router";
import LoadingBars from "../LoadingBars";
const ItemDetailContainer = () => {
    const { id } = useParams()
    const { products } = useContext(CartContext);
    const [itemDetail, setItemDetail] = useState(null)
    const [loading, setLoading] = useState(false);
    const [isExist, setIsExist] = useState(null);

    
    useEffect(() => {
        setLoading(true);
        if(!id) return;
        fetch(`http://localhost:3000/api/productos/getById/${id}`)
            .then(response => {
                if(response.status >= 400) throw new Error("No se encontro");
                return response.json()
            })
            .then(data => {
                setItemDetail(data)
            })
            .catch(error => {
                console.log(error.name, error.message)
            })
            .finally(()=> setLoading(false))
    }, [id])

    useEffect(() => {
        if(products.length > 0){
            const findProductCart = products.find((item)=> item.itemId === id);
            findProductCart ? setIsExist(true) : setIsExist(null);
        }
    }, [id, products])


    return (
        <div className="product-view">
            { itemDetail && <ItemDetail item={itemDetail} id={id} isExist={isExist}/>}
            { loading &&  <LoadingBars/>}
        </div>
    )
}

export default ItemDetailContainer
