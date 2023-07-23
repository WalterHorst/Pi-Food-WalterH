import { useState } from "react";
import "./Form.css";
import validate from "../../validations";

const Form = () => {
  const [form, setForm] = useState({
    nombre: "",
    resumen: "",
    healtScore: "",
    pasos: "",
    imagen: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    resumen: "",
    healtScore: "",
    pasos: "",
    imagen: "",
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

  //funcion que previene el comportamiento default del submit (recargado de pagina)
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <input
          type="text"
          placeholder="Nombre"
          value={form.nombre}
          name="nombre"
          onChange={changeHandler}
        ></input>
        {errors.nombre && <p className="p">{errors.nombre}</p>}
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="Resumen del plato"
          value={form.resumen}
          name="resumen"
          onChange={changeHandler}
        ></input>
        {errors.resumen && <p className="p">{errors.resumen}</p>}
      </div>
      <div className="container">
        <input
          type="number"
          placeholder="HealtScore"
          value={form.healtScore}
          name="healtScore"
          onChange={changeHandler}
        ></input>
        {errors.healtScore && <p className="p">{errors.healtScore}</p>}
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="Pasos"
          value={form.pasos}
          name="pasos"
          onChange={changeHandler}
        ></input>
        {errors.pasos && <p className="p">{errors.pasos}</p>}
      </div>
      <div className="container">
        <input
          type="file"
          value={form.imagen}
          name="imagen"
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
