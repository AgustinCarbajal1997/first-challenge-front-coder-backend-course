import { Link } from "react-router-dom"
const DeleteProduct = () => {
    return (
        <div className="alert-cart-no-products">
            <h2>¡Se elimino el producto con exito!</h2>
            <Link to="/"><button >HOME</button></Link>
        </div>
    )
}

export default DeleteProduct
