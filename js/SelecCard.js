// Supongamos que tienes una lista de tarjetas almacenada en una variable llamada "tarjetas"
var tarjetas = [
    { tipo: "Débito", numero: "1234 5678 9012 3456", titular: "Juan Pérez", banco: "BANORTE" },
    { tipo: "Crédito", numero: "9876 5432 1098 7654", titular: "Juan Pérez", banco: "STP" },
    { tipo: "Crédito", numero: "5678 9012 3456 7890", titular: "Juan Pérez", banco: "HSBC" }
];

// Función para mostrar las tarjetas en el contenedor
function mostrarTarjetas() {
    var container = document.getElementById("tarjetas-container");
    container.innerHTML = ""; // Limpiamos el contenedor antes de mostrar las tarjetas

    // Recorremos la lista de tarjetas y creamos los elementos HTML correspondientes
    tarjetas.forEach(function (tarjeta, index) {
        var cardDiv = document.createElement("div");
        cardDiv.className = "tarjeta";

        var titleH3 = document.createElement("h3");
        titleH3.textContent = tarjeta.tipo;

        var contentP1 = document.createElement("p");
        contentP1.textContent = "Número: " + tarjeta.numero;

        var contentP2 = document.createElement("p");
        contentP2.textContent = "Titular: " + tarjeta.titular;

        var contentP3 = document.createElement("p");
        contentP3.textContent = "Banco: " + tarjeta.banco;

        var actionsDiv = document.createElement("div");
        actionsDiv.className = "accion-tarjeta";

        var selectSpan = document.createElement("span");
        selectSpan.className = "seleccionar-tarjeta";
        selectSpan.textContent = "Seleccionar";

        selectSpan.addEventListener("click", function () {
            // Lógica para seleccionar la tarjeta
            var btnSiguiente = document.getElementById("btnSiguiente");
            btnSiguiente.disabled = false; // Habilitar el botón Siguiente
            window.location.href = "pantallaCarga.html";
        });

        actionsDiv.appendChild(selectSpan);

        cardDiv.appendChild(titleH3);
        cardDiv.appendChild(contentP1);
        cardDiv.appendChild(contentP2);
        cardDiv.appendChild(contentP3);
        cardDiv.appendChild(actionsDiv);

        container.appendChild(cardDiv);
    });
}
// Llamamos a la función para mostrar las tarjetas al cargar la página
mostrarTarjetas();