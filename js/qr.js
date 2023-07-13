//<!-----------BOTÓN PARA IR A VENTANA PRINCIPAL------------>
var btnNavBefore = document.getElementById("btnNavBefore");// Obtener el botón de registro
btnNavBefore.addEventListener("click", function () {// Agregar un evento de click al botón de registro
  window.location.href = "principal.html";// Redirigir al usuario a la página de registro
});

function generarQR() {
  var motivoProducto = document.getElementById("motivo").value;
  var cantidadDinero = parseFloat(document.getElementById("cantidad").value);
  var nomUsuario = document.getElementById("NomUsuario").value;

  // Verifica si se ha proporcionado un motivo y una cantidad de dinero válidos
  if (nomUsuario.trim() === "" || motivoProducto.trim() === "" || isNaN(cantidadDinero) || cantidadDinero <= 0) {
    alert("Por favor, ingresa un motivo válido y una cantidad mayor a cero.");
    return;
  }

  // Construye la URL con los datos del producto y el precio
   var url = "https://mariobdc.github.io/pacodiprueba2/datosPago.html?producto=" + 
  encodeURIComponent(motivoProducto) + "&precio=" + encodeURIComponent(cantidadDinero)+ "&nombre=" + encodeURIComponent(nomUsuario);

  // Genera el código QR utilizando QRCode.js
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 900,
    height: 900
  });
}



