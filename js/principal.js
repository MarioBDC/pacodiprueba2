function toggleMenu() {
  var menuList = document.querySelector('.menu-list');
  menuList.style.display = menuList.style.display === 'none' ? 'block' : 'none';
}

//-----------BOTÓN PARA IR A VENTANA REGISTRAR TARJETA------------
// Obtener el botón de registro
var addCard = document.getElementById("addCard");
// Agregar un evento de click al botón de registro
addCard.addEventListener("click", function () {
  // Redirigir al usuario a la página de registro
  window.location.href = "addCard.html";
});

//-----------BOTÓN PARA IR A VENTANA VISUALIZAR TARJETAS------------
// Obtener el botón de registro
var cardAdds = document.getElementById("cardAdds");
// Agregar un evento de click al botón de registro
cardAdds.addEventListener("click", function () {
  // Redirigir al usuario a la página de registro
  window.location.href = "php/obtener_tarjetas.php";
});

//-----------BOTÓN PARA IR A VENTANA OPCIONES------------


//-----------BOTÓN PARA IR A VENTANA LOGIN (CERRAR SESIÓN)------------
// Obtener el botón de registro
var btnCerrar = document.getElementById("btnCerrar");
// Agregar un evento de click al botón de registro
btnCerrar.addEventListener("click", function () {
  // Redirigir al usuario a la página de registro
  window.location.href = "index.html";
});

//-----------BOTÓN PARA IR A VENTANA COBRAR------------
// Obtener el botón de registro
var btnCobrar = document.getElementById("btnCobrar");
// Agregar un evento de click al botón de registro
btnCobrar.addEventListener("click", function () {
  // Redirigir al usuario a la página de registro
  window.location.href = "cobrar.html";
});

//-----------BOTÓN PARA IR A VENTANA PAGAR------------
var btnPagar = document.getElementById("btnPagar");
// Agregar un evento de click al botón de registro
btnPagar.addEventListener("click", function () {
  // Redirigir al usuario a la página de registro
  window.location.href = "escanearQR.html";
});