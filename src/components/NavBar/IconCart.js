import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const IconCart = ({ productsCart }) => {
  return (
    <div className="icon-cart">
      <Link to="/cart">
        <RiShoppingCartLine color="#b99768" size="2rem" />
        {productsCart ? <h3>{productsCart}</h3> : null}
      </Link>
    </div>
  );
};

export default IconCart;
