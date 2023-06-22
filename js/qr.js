function generarQR() {
  var motivoProducto = document.getElementById("motivo").value;
  var cantidadDinero = parseFloat(document.getElementById("cantidad").value);

  // Verifica si se ha proporcionado un motivo y una cantidad de dinero válidos
  if (motivoProducto.trim() === "" || isNaN(cantidadDinero) || cantidadDinero <= 0) {
    alert("Por favor, ingresa un motivo válido y una cantidad mayor a cero.");
    return;
  }
  // Datos para pagar o cobrar un producto (puedes ajustarlos según tus necesidades)
  var datosPago = {
    producto: motivoProducto,
    precio: cantidadDinero,
  };

  // Serializa los datos en formato JSON
  var datosJson = JSON.stringify(datosPago);

  // Genera el código QR utilizando QRCode.js
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: datosJson,
    width: 500,
    height: 500
  });

  // Redirige al escanear el código QR
  qrcode.callback = function() {
    // Obtiene los datos del pago del código QR escaneado
    var datosEscaneados = JSON.parse(qrcode._oDrawing._el.lastChild.data);

    // Genera la URL con los datos del pago
    var url = "pacodiprueba2/datosPago.html?producto=" + encodeURIComponent(datosEscaneados.producto) + "&precio=" + encodeURIComponent(datosEscaneados.precio);

    // Redirige a la página datosPago.html con los parámetros en la URL
    window.location.href = url;
  };
}
