import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ToastContainer } from "react-toastify";
const CartItem = ({ item }) => {
    const { removeProduct, addQuantity, subtractQuantity } = useContext(CartContext);
    
    return (
        <div className="cart-item">
            <div className="cart-item__img">
                <img src={item.images[0]} alt={item.title}/>
            </div>
            <div className="cart-item__data">
                <h2>{item.title}</h2>
                <div className="cart-item-buttons">
                    <div className="cart-item-addition-subtract">
                        <button  onClick={()=> subtractQuantity(item.itemId)}>
                            <BiMinusCircle/>
                        </button>
                        <h2>{item.quantity}</h2>
                        <button onClick={()=> addQuantity(item.itemId)}>
                            <BiPlusCircle/>
                        </button>
                    </div>
                    <div className="cart-item-delete-button">
                        <button onClick={()=> removeProduct(item.id)}>
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>

    )
}

export default CartItem
