<?php
if (isset($_POST['variable'])) {
  $variable = $_POST['variable'];
  
  // Hacer algo con la variable en PHP
  // ...
  
  // Devolver una respuesta al cliente
  echo "Variable recibida: " . $variable;
} else {
  echo "No se ha enviado ninguna variable";
}
?>
