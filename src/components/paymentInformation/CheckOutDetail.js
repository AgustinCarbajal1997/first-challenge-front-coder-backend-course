import { useEffect, useState } from "react";
const CheckOutDetail = ({ products, onConfirmCartHandler }) => {
    const [total, setTotal] = useState(0)
    useEffect(() => {
        const total = products.map((item)=> item.quantity * item.price).reduce((a,b)=> a + b);
        setTotal(total);
    }, [products])
    return (
        <div>
            <h2>Detalles de la compra</h2>
            <ul>
                { 
                    products.map((item, index)=> (
                        <li key={index}>
                            <h4>{item.title.slice(0,20)}...</h4>
                            <h4>$ {item.price * item.quantity}</h4>
                        </li>
                    ))
                }

            </ul>
            <div>
                <h3>TOTAL</h3>
                <h3>$ {total}</h3>
            </div>
            <button onClick={onConfirmCartHandler}>Confirmar compra</button>
            
        </div>
    )
}

export default CheckOutDetail
