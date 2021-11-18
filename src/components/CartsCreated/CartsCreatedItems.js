import { RiDeleteBin6Line } from "react-icons/ri";
const CartsCreatedItems = ({
  cartsIds,
  onDeleteHandler,
  onUpdateCartHandler,
}) => {
  return (
    <div className="cartsCreated-container">
      <h2>Carritos creados</h2>
      {cartsIds.map((item, index) => (
        <div className="cartsCreated-items" key={index}>
          <div
            onClick={() => onUpdateCartHandler(item.products, item.id)}
            style={{ cursor: "pointer" }}
          >
            <h4>{item.id}</h4>
          </div>
          <div>
            <RiDeleteBin6Line
              color="red"
              size="1.5rem"
              onClick={() => onDeleteHandler(item.id)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartsCreatedItems;
