function verDetalle(ramo) {
  const detalles = {
    intro: "Este ramo introduce al estudiante en el campo profesional del Contador Auditor, sus ámbitos de acción y desafíos éticos."
    // Agrega más detalles según necesites
  };

  document.getElementById("detalle").innerText = detalles[ramo] || "Información no disponible.";
}

