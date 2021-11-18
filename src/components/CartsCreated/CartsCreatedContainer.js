import { useEffect, useState, useContext } from "react"
import { useHistory } from "react-router"
import CartsCreatedItems from "./CartsCreatedItems"
import { CartContext } from "../../context/CartContext"

const CartsCreatedContainer = () => {
    const { updateCart } = useContext(CartContext)
    const [cartsIds, setCartsIds] = useState([])
    const history = useHistory()
    useEffect(() => {
        fetch("http://localhost:3000/api/carrito")
            .then(response => response.json())
            .then(data => {
                !data.length
                    ? setCartsIds([])
                    : setCartsIds(data)
            })
    }, [])
    const onDeleteHandler = (id) => {
        console.log(id)
        fetch(`http://localhost:3000/api/carrito/${id}`, {
            method:"DELETE"
        })
            .then(response => response.json())
            .then(data => {
                alert("Carrito eliminado");
                history.push("/");
            });
    }

    const onUpdateCartHandler = (cart, id) => {
        updateCart(cart, id);
        history.push("/cart");
    }

    return (
        <div className="carts-created-frame">
            {
                cartsIds.length === 0 
                    ? <h2>No hay carritos</h2>
                    : <CartsCreatedItems 
                    cartsIds={cartsIds}
                    onDeleteHandler={onDeleteHandler}
                    onUpdateCartHandler={onUpdateCartHandler}
                    />
            }
            
        </div>
    )
}

export default CartsCreatedContainer
