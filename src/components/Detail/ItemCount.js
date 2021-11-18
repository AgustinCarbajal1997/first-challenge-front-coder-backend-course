import { useState } from "react";
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import { toast } from "react-toastify";
const ItemCount = ({ initial, stock, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const onAddHandler = () => {
    if (counter === stock) return toast.info("¡Ha llegado al límite del stock!",{ style:{backgroundColor:"#383838", color:"#ffffff"}});
    setCounter(counter + 1);
  };
  const onSubtractHandler = () => {
    if (counter === initial) return;
    setCounter(counter - 1);
  };
  

  return (
    <div className="div-buttons">
      <div className="div-counter">
        <button className="button-counter" onClick={onSubtractHandler}>
          <BiMinusCircle/>
        </button>
        <h2>{counter}</h2>
        <button className="button-counter" onClick={onAddHandler}>
          <BiPlusCircle/>
        </button>
      </div>
      <button className="add-to-cart-button" onClick={()=> onAdd(counter)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
