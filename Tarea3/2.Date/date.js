function diasRestantesCurso() {
    var diaActual = new Date();
    var finalCurso = new Date(diaActual.getFullYear(), 5, 25);
    var milisegundosDia = 24 * 60 * 60 * 1000;
    var diasRestantes = Math.floor((finalCurso.getTime() - diaActual.getTime()) / milisegundosDia);
    console.log("Quedan ".concat(diasRestantes, " para que acabe el curso"));
}
function cumpleFinde() {
    var cumpleanhos = new Date(prompt("Introduce tu cumpleaños"));
    var anoActual = new Date().getFullYear();
    for (var ano = anoActual; ano <= 2100; ano++) {
        var diaAniversario = new Date(ano, cumpleanhos.getMonth(), cumpleanhos.getDate());
        if (diaAniversario.getDay() === 6 || diaAniversario.getDay() === 0) {
            let mensaje = "Mi cumpleanos caera en fin de semana los anos ".concat(ano);
        }
    }
    console.log(mensaje);
}
function fechasFormatos(formato) {
    var fechaActual = new Date();
    switch (formato) {
        case 1:
            console.log("".concat(fechaActual.getMonth() + 1, "/").concat(fechaActual.getDate(), "/").concat(fechaActual.getFullYear()));
            break;
        case 2:
            console.log(fechaActual.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
            break;
        case 3:
            console.log(fechaActual.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
            break;
        default:
            console.log('Formato no valido.');
    }
}
function horaFormatos(formato) {
    var horaActual = new Date();
    switch (formato) {
        case 1:
            console.log("".concat(horaActual.getHours(), ":").concat(horaActual.getMinutes(), ":").concat(horaActual.getSeconds()));
            break;
        case 2:
            console.log(horaActual.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
            break;
        default:
            console.log("Formato no valido");
    }
}
