import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const CartContext = createContext()
const { Provider } = CartContext;

const CustomProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [idUpdate, setIdUpdate] = useState(null);
    const [permits, setPermits] = useState("user");

    const addProduct = (dataProduct) => {
        const isInCart = products.find(item => item.id === dataProduct.id);
        if(!isInCart){
            setProducts([...products, dataProduct]);
        }

    }

    const updateCart = (cart, id) => {
        setProducts(cart);
        setIdUpdate(id)
    }
    const clearId = () => {
        setIdUpdate(null)
    }

    const addQuantity = (id) => {
        const findIndexProduct = products.findIndex((item)=> item.itemId === id);
        if(products[findIndexProduct].quantity === products[findIndexProduct].unites) return toast.info("¡Ha llegado al límite del stock!",{ style:{backgroundColor:"#383838", color:"#ffffff"}});
        const productsCopy = [...products];
        productsCopy[findIndexProduct].quantity += 1
        setProducts(productsCopy);
    }
    const subtractQuantity = (id) => {
        const findIndexProduct = products.findIndex((item)=> item.itemId === id);
        if(products[findIndexProduct].quantity === 1) return;
        const productsCopy = [...products];
        productsCopy[findIndexProduct].quantity -= 1
        setProducts(productsCopy);
    }

    const removeProduct = (id) => {
        const newArray = products.filter(item => item.id !== id);
        setProducts(newArray)
    }

    const clearProducts = () => {
        setProducts([])
    }

    const changePermit = (permit) => {
        setPermits(permit);
    }

    return (
        <Provider value={{ products, addProduct, addQuantity, subtractQuantity, removeProduct, clearProducts, permits, changePermit, updateCart, idUpdate, clearId }}>
            { children }
        </Provider>

    )

}

export default CustomProvider;