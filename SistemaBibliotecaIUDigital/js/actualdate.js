document.addEventListener("DOMContentLoaded", function() {
    var fecha = new Date();
    
    var dia = ("0" + fecha.getDate()).slice(-2); 
    var mes = ("0" + (fecha.getMonth() + 1)).slice(-2); 
    var year = fecha.getFullYear();

    var fechaFormateada = year + '-' + mes + '-' + dia;

    document.getElementById("fechaPrestamo").value = fechaFormateada;
});
