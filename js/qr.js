function generarQR() {
  var motivoProducto = document.getElementById("motivo").value;
  var cantidadDinero = parseFloat(document.getElementById("cantidad").value);

  // Verifica si se ha proporcionado un motivo y una cantidad de dinero válidos
  if (motivoProducto.trim() === "" || isNaN(cantidadDinero) || cantidadDinero <= 0) {
    alert("Por favor, ingresa un motivo válido y una cantidad mayor a cero.");
    return;
  }

  // Construye la URL con los datos del producto y el precio
  var url = "https://tudominio.com/pagar?producto=" + encodeURIComponent(motivoProducto) + "&precio=" + encodeURIComponent(cantidadDinero);

  // Redirecciona al usuario a la página correspondiente
  window.location.href = url;
}


