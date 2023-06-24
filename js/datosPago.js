// Obtiene los parámetros de la URL
var params = new URLSearchParams(window.location.search);
var producto = params.get("producto");
var precio = params.get("precio");

// Actualiza los elementos HTML con los datos del pago
document.getElementById("producto").textContent = producto;
document.getElementById("precio").textContent = precio;

// Función para mostrar el mensaje de pago exitoso
var datosPago = document.getElementById("datosPago");
// Agregar un evento de click al botón de registro
datosPago.addEventListener("click", function () {
  // Redirigir al usuario a la página de registro
  window.location.href = "pagoExitoso.html";
});
