import { useState } from "react";
import "./Form.css";
import validate from "../../validations";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    resumen: "",
    healthScore: "",
    pasos: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    resumen: "",
    healthScore: "",
    pasos: "",
    image: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name; //propiedad del estado form = name del imput
    const value = event.target.value; // guardo el valuo (cuando tipeo en el imput)
    setForm({ ...form, [property]: value }); //seteo el etado del formulario con las values correspondientes
    setErrors(validate({ ...form, [property]: value })); //llamo a la funcion validate pasandole lo mismo que al setForm para que nop ocurra un desfasaje
  };

  // La función isFormValid verifica si no hay mensajes de error en el estado `errors`.
  const isFormValid = () => {
    return Object.values(errors).every((error) => error === "");
  };

  //funcion que previene el comportamiento default del submit (recargado de pagina) y hace la peticion post al backend
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/recipes", form)
      .then((res) => alert(res.data))
      .catch((error) => alert(error));

    setForm({ name: "", resumen: "", healthScore: "", pasos: "", image: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <input
          type="text"
          placeholder="name"
          value={form.name}
          name="name"
          onChange={changeHandler}
        ></input>
        {errors.name && <p className="parrafo3">{errors.name}</p>}
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="Resumen del plato"
          value={form.resumen}
          name="resumen"
          onChange={changeHandler}
        ></input>
        {errors.resumen && <p className="parrafo3">{errors.resumen}</p>}
      </div>
      <div className="container">
        <input
          type="number"
          placeholder="HealtScore"
          value={form.healthScore}
          name="healthScore"
          onChange={changeHandler}
        ></input>
        {errors.healthScore && <p className="parrafo3">{errors.healthScore}</p>}
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="Pasos"
          value={form.pasos}
          name="pasos"
          onChange={changeHandler}
        ></input>
        {errors.pasos && <p className="parrafo3">{errors.pasos}</p>}
      </div>
      <div className="container">
        <input
          type="file"
          value={form.image}
          name="image"
          onChange={changeHandler}
        ></input>
      </div>
      <button type="submit" disabled={!isFormValid()}>
        Crear receta
      </button>
    </form>
  );
};
export default Form;
