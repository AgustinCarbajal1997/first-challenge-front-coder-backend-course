import Item from "./Item";

const ItemList = ({ listProducts, permits, deleteProduct }) => {
  return (
    <section className="section-products">
      {listProducts.map(item => (
        <Item item={item} key={item.id} permits={permits} deleteProduct={deleteProduct}/>
      ))}
    </section>
  );
};

export default ItemList;
