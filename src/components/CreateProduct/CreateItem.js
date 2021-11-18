const CreateItem = ({ inputs, onChangeInputHandler, onSubmitHandler }) => {

  return (
    <div className="create-product-form-container">
      <h2>CREAR UN NUEVO PRODUCTO</h2>
      <form onSubmit={onSubmitHandler} className="create-product-form">
        <label>Articulo<label>
          <select value={inputs.article} name="article" onChange={onChangeInputHandler}>
              <option value="cellphone">Celular</option>
              <option value="notebook">Notebook</option>
              <option value="tv">Tv</option>
              <option value="split">Aire acondicionado</option>
              <option value="fridge">Heladera</option>
              <option value="smartwatch">Reloj</option>
          </select>

        </label>Título</label>
        <input type="text" value={inputs.title} name="title" onChange={onChangeInputHandler}/>
        
        <label>URL imagen</label>
        <input type="text" value={inputs.images} name="images" onChange={onChangeInputHandler}/>
        
        <label>Precio</label>
        <input type="text" value={inputs.price} name="price" onChange={onChangeInputHandler}/>
        
        <label>Unidades</label>
        <input type="text" value={inputs.unites} name="unites" onChange={onChangeInputHandler}/>
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateItem;
