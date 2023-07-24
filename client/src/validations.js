const validate = (form) => {
  const errors = {};

  // Validar el campo name (solo debe contener caracteres)
  if (/^[A-Za-z\s\-()']+$/.test(form.name)) {
    errors.name = ""; // Si es válido, se elimina el mensaje de error
  } else if (form.name === "") {
    errors.name = "El nombre la receta no puede estar vacío.";
  } else {
    errors.name = "El nombre de la receta solo debe contener caracteres.";
  }

  // Validar el campo Resumen (no debe estar vacio)
  if (form.resumen.trim() !== "") {
    errors.resumen = ""; // Si es válido, se elimina el mensaje de error
  } else {
    errors.resumen = "Este campo no puede estar vacío.";
  }

  // Validar el campo healtScore (debe ser un valor entre 1 y 10)
  const healthScoreValue = parseInt(form.healthScore);
  if (
    !isNaN(healthScoreValue) &&
    healthScoreValue >= 1 &&
    healthScoreValue <= 100
  ) {
    errors.healthScore = ""; // Si es válido, se elimina el mensaje de error
  } else {
    errors.healthScore =
      "El valor de Health Score debe ser un número entre 1 y 100.";
  }

  // Validar el campo pasos (no debe estar vacío)
  if (form.pasos.trim() !== "") {
    errors.pasos = ""; // Si es válido, se elimina el mensaje de error
  } else {
    errors.pasos = "Este campo no puede estar vacío.";
  }

  return errors;
};

export default validate;
