import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Item = ({ item, permits, deleteProduct }) => {
  return (
    <li className="product-item" key={item.id}>
      {permits === "admin" && (
        <div
          className="product-item-icons"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "10px",
            paddingRight: "20px",
          }}
        >
          <Link
            to={`/updateProduct/${item.id}`}
            style={{ paddingRight: "20px" }}
          >
            <AiFillEdit color="#172b4d" size="1.5rem" />
          </Link>
          <div>
            <AiFillDelete
              onClick={() => deleteProduct(item.id)}
              color="#870a29"
              size="1.5rem"
            />
          </div>
        </div>
      )}

      <Link to={`/item/${item.id}`}>
        <div className="product-item__image">
          <img src={item.images[0]} alt={item.title} />
        </div>
        <h2>{item.title}</h2>
        <h3>$ {item.price}</h3>
        <button>VER MAS</button>
      </Link>
    </li>
  );
};

export default Item;
