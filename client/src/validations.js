const validate = (form) => {
  const errors = {};

  // Validar el campo nombre (solo debe contener caracteres)
  if (/^[A-Za-z\s\-()']+$/.test(form.nombre)) {
    errors.nombre = ""; // Si es válido, se elimina el mensaje de error
  } else {
    errors.nombre = "El nombre de la receta solo debe contener caracteres.";
  }
  if (errors.nombre === "") {
    errors.nombre = "Este campo no puede estar vacio";
  }

  // Validar el campo Resumen (no debe estar vacio)
  if (form.resumen.trim() !== "") {
    errors.resumen = ""; // Si es válido, se elimina el mensaje de error
  } else {
    errors.resumen = "Este campo no puede estar vacío.";
  }

  // Validar el campo healtScore (debe ser un valor entre 1 y 10)
  const healtScoreValue = parseInt(form.healtScore);
  if (
    !isNaN(healtScoreValue) &&
    healtScoreValue >= 1 &&
    healtScoreValue <= 10
  ) {
    errors.healtScore = ""; // Si es válido, se elimina el mensaje de error
  } else {
    errors.healtScore =
      "El valor de Health Score debe ser un número entre 1 y 10.";
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
