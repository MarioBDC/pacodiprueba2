$(document).ready(function () {
  // Objeto con la relación de estados y municipios
  var estadosYMunicipios = {
    "Veracruz": ["Acajete", "Acatlán", "Acayucan", "Actopan", "Acula", "Acultzingo", "Camarón de Tejeda", "Alpatláhuac", "Alto Lucero de Gutiérrez Barrios", "Altotonga", "Alvarado", "Amatitlán", "Naranjos Amatlán", "Amatlán de los Reyes", "Angel R. Cabada", "La Antigua", "Apazapan", "Aquila", "Astacinga", "Atlahuilco", "Atoyac", "Atzacan", "Atzalan", "Tlaltetela", "Ayahualulco", "Banderilla", "Benito Juárez", "Boca del Río", "Calcahualco", "Camerino Z. Mendoza", "Carrillo Puerto", "Catemaco", "Cazones de Herrera", "Cerro Azul", "Citlaltépetl", "Coacoatzintla", "Coahuitlán", "Coatepec", "Coatzacoalcos", "Coatzintla", "Coetzala", "Colipa", "Comapa", "Córdoba", "Cosamaloapan de Carpio", "Cosautlán de Carvajal", "Coscomatepec", "Cosoleacaque", "Cotaxtla", "Coxquihui", "Coyutla", "Cuichapa", "Cuitláhuac", "Chacaltianguis", "Chalma", "Chiconamel", "Chiconquiaco", "Chicontepec", "Chinameca", "Chinampa de Gorostiza", "Las Choapas", "Chocamán", "Chontla", "Chumatlán", "Emiliano Zapata", "Espinal", "Filomeno Mata", "Fortín", "Gutiérrez Zamora", "Hidalgotitlán", "Huatusco", "Huayacocotla", "Hueyapan de Ocampo", "Huiloapan de Cuauhtémoc", "Ignacio de la Llave", "Ilamatlán", "Isla", "Ixcatepec", "Ixhuacán de los Reyes", "Ixhuatlán de Madero", "Ixhuatlán del Café", "Ixhuatlán del Sureste", "Ixhuatlancillo", "Ixmatlahuacan", "Ixtaczoquitlán", "Jalacingo", "Xalapa", "Jalcomulco", "Jáltipan", "Jamapa", "Jesús Carranza", "Xico", "Jilotepec", "José Azueta", "Juan Rodríguez Clara", "Juchique de Ferrer", "Landero y Coss", "Lerdo de Tejada", "Magdalena", "Maltrata", "Manlio Fabio Altamirano", "Mariano Escobedo", "Martínez de la Torre", "Mecatlán", "Mecayapan", "Medellín", "Miahuatlán", "Las Minas", "Minatitlán", "Misantla", "Mixtla de Altamirano", "Moloacán", "Naolinco", "Naranjal", "Nautla", "Nogales", "Oluta", "Omealca", "Orizaba", "Otatitlán", "Oteapan", "Ozuluama de Mascareñas", "Pajapan", "Pánuco", "Papantla", "Paso del Macho", "Paso de Ovejas", "La Perla", "Perote", "Platón Sánchez", "Playa Vicente", "Poza Rica de Hidalgo", "Las Vigas de Ramírez", "Pueblo Viejo", "Puente Nacional", "Rafael Delgado", "Rafael Lucio", "Río Blanco", "Saltabarranca", "San Andrés Tenejapan", "San Andrés Tuxtla", "San Juan Evangelista", "Santacruz Acayucan", "San Rafael", "Santiago Sochiapan", "Santiago Tuxtla", "Sayula de Alemán", "Sochiapa", "Soconusco", "Soledad Atzompa", "Soledad de Doblado", "Soteapan", "Tamalín", "Tamiahua", "Tampico Alto", "Tancoco", "Tantima", "Tantoyuca", "Tatatila", "Castillo de Teayo", "Tecolutla", "Tehuipango", "Álamo Temapache", "Tempoal", "Tenampa", "Tenochtitlán", "Teocelo", "Tepatlaxco", "Tepetlán", "Tepetzintla", "Tetela de Ocampo", "Texcatepec", "Texhuacán", "Texistepec", "Tezonapa", "Tierra Blanca", "Tihuatlán", "Tlacojalpan", "Tlacolulan", "Tlacotalpan", "Tlacotepec de Mejía", "Tlachichilco", "Tlalixcoyan", "Tlalnelhuayocan", "Tlaltetela", "Tlapacoyan", "Tlaquilpa", "Tlilapan", "Tomatlán", "Tonayán", "Totutla", "Túxpam", "Tuxtilla", "Úrsulo Galván", "VEGA DE ALATORRE", "Veracruz", "Villa Aldama", "Xoxocotla", "Yanga", "Yecuatla", "Zacualpan", "Zaragoza", "Zentla", "Zongolica", "Zontecomatlán de López y Fuentes", "Zozocolco de Hidalgo", "Agua Dulce", "El Higo", "Nanchital de Lázaro Cárdenas del Río", "Tres Valles"],
    // Agrega más estados y municipios aquí
  };

  // Función para actualizar los municipios al seleccionar un estado
  $("#estado").change(function () {
    var estadoSeleccionado = $(this).val();
    var municipios = estadosYMunicipios[estadoSeleccionado];

    // Limpiar el listado de municipios
    $("#municipio").empty();

    // Agregar los municipios correspondientes al listado
    $.each(municipios, function (index, value) {
      $("#municipio").append('<option value="' + value + '">' + value + '</option>');
    });
  });
});

