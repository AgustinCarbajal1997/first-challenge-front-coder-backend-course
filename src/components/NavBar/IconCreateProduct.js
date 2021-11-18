import { MdCreateNewFolder } from "react-icons/md";
import { Link } from "react-router-dom";
const IconCreateProduct = () => {
    return (
        <div className="icon-create-product">
            <Link to="/createProduct">
                Creat producto
                <MdCreateNewFolder color="#b99768" size="2rem"/>
            </Link>
        </div>
    )
}

export default IconCreateProduct
