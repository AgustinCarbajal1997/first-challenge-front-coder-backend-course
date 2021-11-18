import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import UpdateItem from "./UpdateItem";
const INITIAL_STATE = {
  article: "cellphone",
  title: "",
  images: "",
  price: "",
  unites: "",
};
const UpdateContainer = () => {
  const [inputs, setInputs] = useState(INITIAL_STATE);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3000/api/productos/getById/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const productToUpdate = {
          article: data.article,
          title: data.title,
          images: data.images[0],
          price: data.price.toString(),
          unites: data.unites.toString(),
        };
        setInputs(productToUpdate);
      });
  }, [id]);

  const onChangeInputHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const allInputsCompleted = Object.values(inputs).map((item) =>
      item.length ? true : false
    );
    if (!allInputsCompleted.every((item) => item === true))
      return alert("Faltan datos");
    fetch(`http://localhost:3000/api/productos/${id}/admin`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(inputs),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Actualizado con exito");
        history.push("/");
      });
  };

  return (
    <div className="create-product-container">
      <UpdateItem
        inputs={inputs}
        onChangeInputHandler={onChangeInputHandler}
        onSubmitHandler={onSubmitHandler}
      />
    </div>
  );
};

export default UpdateContainer;
