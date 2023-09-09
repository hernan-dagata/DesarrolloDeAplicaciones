document.getElementById("registrarLibro").addEventListener("submit", function(e) {
    var currentDate = new Date(document.getElementById("fechaPrestamo").value);
    var inputDate = new Date(document.getElementById("fechaDevolucion").value);

    if (inputDate < currentDate) {
        alert("La fecha de devolución no puede ser anterior a la fecha actual.");
        document.getElementById("fechaDevolucion").value = '';
        e.preventDefault(); 
    }
});