import { useEffect, useState } from "react"

const TotalItem = ({ products, onCreateCartHandler, idUpdate, onUpdateCartHandler }) => {
    const [total, setTotal] = useState(0)
    useEffect(() => {
        const total = products.map((item)=> item.quantity * item.price).reduce((a,b)=> a + b);
        setTotal(total);
    }, [products])

    return (
        <div className="cart-total-products">
            <h2>TOTAL</h2>
            <h3>${total}</h3>
            { !idUpdate && <button onClick={onCreateCartHandler}>Guardar carrito</button>}
            { idUpdate && <button onClick={onUpdateCartHandler}>Actualizar carrito</button>}
        </div>
    )
}

export default TotalItem
