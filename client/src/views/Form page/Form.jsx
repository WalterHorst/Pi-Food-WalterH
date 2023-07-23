import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [form, setForm] = useState({
    nombre: "",
    resumen: "",
    healtScore: "",
    pasos: "",
    imagen: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  };

  return (
    <form>
      <div className="container">
        <input
          type="text"
          placeholder="Nombre"
          value={form.nombre}
          name="nombre"
          onChange={changeHandler}
        ></input>
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="Resumen del plato"
          value={form.resumen}
          name="resumen"
          onChange={changeHandler}
        ></input>
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="HealtScore"
          value={form.healtScore}
          name="healtScore"
          onChange={changeHandler}
        ></input>
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="Pasos"
          value={form.pasos}
          name="pasos"
          onChange={changeHandler}
        ></input>
      </div>
      <div className="container">
        <input
          type="file"
          value={form.imagen}
          name="imagen"
          onChange={changeHandler}
        ></input>
      </div>
      <button type="submit">Crear receta</button>
    </form>
  );
};
export default Form;
