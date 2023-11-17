function usuarios() {
    $.ajax({
        type: "GET", //selecciona el metodo pertinente
        url: "/mostrar", //pone la url de su APU
        dataType: 'json', //Define que los datos son de tipo Json
        success:function(datos) {
            $("#contenido").html('<table id="tablita"> <table>'); //con esto vacia el contenido del div y coloca una tabla
            for (var i = 0; i < datos.length; i++) {
                $("#tablita").append('<tr>' + '<td>' + datos[i].usuario + '</td>' +  ' <td> ' + datos[i].estado + '</td>' + '</tr>'); //con esto agrega cada linea de la consulta
            }
            
        }
      })
}