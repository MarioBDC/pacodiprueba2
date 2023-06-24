// Obtiene los parámetros de la URL
var params = new URLSearchParams(window.location.search);
var producto = params.get("producto");
var precio = params.get("precio");

// Actualiza los elementos HTML con los datos del pago
document.getElementById("producto").textContent = producto;
document.getElementById("precio").textContent = precio;

// Función para mostrar el mensaje de pago exitoso
function pagoExitoso() {
  // Abre la ventana de pago exitoso
  window.location.href = "pagoExitoso.html";
}
