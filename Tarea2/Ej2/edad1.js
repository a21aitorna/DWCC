let edad = parseInt(prompt("Introduce tu edad: "));
if (!isNaN(edad)) {
    switch (true) {
        case edad >= 0 && edad <= 12:
            alert("Niño");
            break;
        case edad >= 13 && edad <= 18:
            alert("Adolescente");
            break;
        case edad >= 19 && edad <= 30:
            alert("Joven");
            break;
        case edad >= 31 && edad <= 64:
            alert("Adulto");
            break;
        case edad >= 65 && edad <= 100:
            alert("Jubilado");
            break;
        default:
            alert("Has introducido un numero mayor que 100");
    }
}
