import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartList from "./CartList";
import TotalItem from "./TotalItem";
const CartContainer = () => {
    const history = useHistory()
    const { products, idUpdate, clearProducts, clearId } = useContext(CartContext);
    const onCreateCartHandler = () => {
        fetch(`http://localhost:3000/api/carrito`,{
            headers: {
                'Content-Type': 'application/json'
            },
            method:"POST",
            body: JSON.stringify({ products })
        })
        .then(response => response.json())
        .then(data => {
            history.push('/carts-created');
            clearProducts()
            clearId()
        })
    } 
    
    const onUpdateCartHandler = () => {
        fetch(`http://localhost:3000/api/carrito/${idUpdate}`,{
            headers: {
                'Content-Type': 'application/json'
            },
            method:"PUT",
            body: JSON.stringify({ products })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            history.push('/carts-created');
            clearProducts()
            clearId()
        })
    }

    return (
        <>
            { products.length > 0 
            ? (<div className="cart-list-container">
                <CartList products={products} /> 
                <TotalItem 
                    products={products} 
                    onCreateCartHandler={onCreateCartHandler}
                    idUpdate={idUpdate}
                    onUpdateCartHandler={onUpdateCartHandler}
                /> 
                </div>)
            : (<div className="alert-cart-no-products">
                <h2>NO HAY PRODUCTOS EN EL CARRITO</h2>
                <Link to="/"><button >HOME</button></Link>
            </div>)
            }
                    
        </>
    )
}

export default CartContainer
