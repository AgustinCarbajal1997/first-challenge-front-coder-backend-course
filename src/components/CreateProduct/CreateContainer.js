import { useState } from "react";
import { useHistory } from "react-router";
import CreateItem from "./CreateItem";

const INITIAL_STATE = {
  article: "cellphone",
  title: "",
  images: "",
  price: "",
  unites: "",
};

const CreateContainer = () => {
  const [inputs, setInputs] = useState(INITIAL_STATE);
  const history = useHistory()


  const onChangeInputHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const allInputsCompleted = Object.values(inputs).map(item => item.length ? true : false);
    if(!allInputsCompleted.every(item => item===true)) return alert("Faltan datos");
    fetch("http://localhost:3000/api/productos/admin",{
        headers: {
            'Content-Type': 'application/json'
        },
        method:"POST",
        body: JSON.stringify(inputs)
    })
    .then((response)=> response.json())
    .then((data)=> {
      alert("Agregado con exito")
      history.push("/");
    })
        
  }

  return (
    <div className="create-product-container">
      <CreateItem
        inputs={inputs}
        onChangeInputHandler={onChangeInputHandler}
        onSubmitHandler={onSubmitHandler}
      />
    </div>
  );
};

export default CreateContainer;
