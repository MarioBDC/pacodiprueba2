// Obtiene los parámetros de la URL
var params = new URLSearchParams(window.location.search);
var producto = params.get("producto");
var precio = params.get("precio");
var nombre = params.get("nombre");

// Actualiza los elementos HTML con los datos del pago
document.getElementById("producto").textContent = producto;
document.getElementById("precio").textContent = precio;
document.getElementById("nombre").textContent = nombre;

// Función para seleccionar tarjeta
var datosPago = document.getElementById("datosPago");
// Agregar un evento de click al botón de registro
datosPago.addEventListener("click", function () {
  
  window.location.href = "SelectCard.html";
});

