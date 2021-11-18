

const PaymentOrder = ({ order }) => {
    
    
    return (
        <div className="payment-order">
            <h2>Orden de compra</h2>
            <div className="payment-order-buyer-data">
                <h3>Datos del comprador</h3>
                <h4><span>Nombre:</span> {order.buyer.name} {order.buyer.surname}</h4>
                <h4><span>Teléfono:</span> {order.buyer.phone}</h4>
                <h4><span>Domicilio:</span> {order.buyer.address}</h4>
                <h4><span>Código postal:</span> {order.buyer.zipCode}</h4>
                <h4><span>Ciudad:</span> {order.buyer.city}</h4>
                <h4><span>Provincia:</span> {order.buyer.province}</h4>
            </div>
            <div className="payment-order-purchase-detail">
                <h3>Datos de compra</h3>
                <h4><span>Fecha:</span> {order.date}</h4>
                <h4><span>Productos:</span></h4>
                <ul>
                    {order.items.map((item, index)=> (
                    <li key={index}>
                       <h5>{item.title.slice(0,20)}...</h5>
                       <h5>$ {item.quantity * item.price}</h5> 
                    </li>
                    ))}
                </ul>
                <div>
                    <h4>Total</h4>
                    <h4>$ {order.total}</h4>
                </div>
            </div>
            
        </div>
    )
}

export default PaymentOrder
