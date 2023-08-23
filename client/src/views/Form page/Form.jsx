import { useState } from "react";
import "./Form.css";
import validate from "../../validations";
import axios from "axios";
import { useSelector } from "react-redux";

const Form = () => {
  const diets = useSelector((state) => state.diets);
  const [form, setForm] = useState({
    name: "",
    resumen: "",
    healthScore: "",
    pasos: "",
    image: null,
    diets: [],
  });

  console.log(form);

  const [errors, setErrors] = useState({
    name: "",
    resumen: "",
    healthScore: "",
    pasos: "",
    image: null,
  });

  const [selectedDiets, setSelectedDiets] = useState([]); // Estado local para mantener las dietas seleccionadas

  const checkboxChangeHandler = (event) => {
    const value = event.target.value;

    // Actualizar las dietas seleccionadas
    if (event.target.checked) {
      setSelectedDiets((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedDiets((prevSelected) =>
        prevSelected.filter((diet) => diet !== value)
      );
    }
    setForm({ ...form, diets: [...selectedDiets] });
  };

  const setFile = (event) => {
    const file = event.target.files[0];
    setForm({ ...form, image: URL.createObjectURL(file) });
  };

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

    setForm({ name: "", resumen: "", healthScore: "", pasos: "", image: null });
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
        {/* Renderizar checkboxes para cada dieta */}
        {diets.map((diet) => (
          <label key={diet.id}>
            <input
              type="checkbox"
              value={diet.name}
              checked={selectedDiets.includes(diet.name)} // Marcar como seleccionado si está en la lista de dietas seleccionadas
              name="diets"
              onChange={checkboxChangeHandler}
            />
            {diet.name}
          </label>
        ))}
      </div>
      <div className="checkBox">
        <input type="file" name="image" onChange={setFile}></input>
        {form.image && <img src={form.image} alt={form.name} />}
      </div>
      <button type="submit" disabled={!isFormValid()}>
        Crear receta
      </button>
    </form>
  );
};
export default Form;
