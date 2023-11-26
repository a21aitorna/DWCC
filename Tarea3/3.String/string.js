function informacionUsuario() {
    var nombreCompleto = prompt("Introduce tu nombre y apellidos");
    if (nombreCompleto) {
        //Tamaño nombre y apellidos
        var longitudNombreConEspacios = nombreCompleto.length;
        //Tamaño nombre y apellidos sin espacios
        var longitudNombreSinEspacios = nombreCompleto.replace(/\s/g, '').length;
        //Nombre y apellidos en minusculas
        var nombreCompletoMinusculas = nombreCompleto.toLowerCase();
        //Nombre y apellidos en mayusculas
        var nombreCompletoMayusculas = nombreCompleto.toUpperCase();
        //Mostrar separado nombre, apellido1 y apellido2
        var _a = nombreCompleto.split(' '), nombre = _a[0], apellido1 = _a[1], apellido2 = _a[2];
        //Nombre de usuario (nombre en minusculas, incial apellido1 en mayuscula e inicial apellido2 en mayuscula)
        var nombreUsuario = "".concat(nombre.toLowerCase()).concat(apellido1.charAt(0).toUpperCase()).concat(apellido2.charAt(0).toUpperCase());
        console.log("La longitud del nombre con espacios es ".concat(longitudNombreConEspacios));
        console.log("La longitud del nombre sin espacios es ".concat(longitudNombreSinEspacios));
        console.log("El nombre en minusculas es ".concat(nombreCompletoMinusculas));
        console.log("El nombre completo en mayusculas es ".concat(nombreCompletoMayusculas));
        console.log("Nombre separado: Nombre - ".concat(nombre, ", Apellido1 - ").concat(apellido1, ", Apellido2 - ").concat(apellido2));
        console.log("Nombre usuario: ".concat(nombreUsuario));
        //Introducir contraseña
        var password = prompt('Introduce una contrasenha: ');
        comprobarContrasena(password);
    }
}
function comprobarContrasena(password) {
    if (password) {
        var patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,16}$/;
        if (patron.test(password)) {
            console.log('La contrasenha es valida');
        }
        else {
            console.log('La contrasenha es invalida');
        }
    }
}
informacionUsuario();
