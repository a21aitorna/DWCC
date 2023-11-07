console.log('Comprobar si un numero es primo');
var entrada;
var numero;
do {
    entrada = prompt("Ingrese un número para comprobar si es primo:");
    numero = entrada ? parseInt(entrada) : null;
} while (isNaN(numero) || numero === null);
if (numero <= 1) {
    console.log("".concat(numero, " no es un n\u00FAmero primo."));
}
else {
    var esPrimo = true;
    var i = 2;
    do {
        if (numero % i === 0) {
            esPrimo = false;
        }
        i++;
    } while (i * i <= numero && esPrimo);
    if (esPrimo) {
        console.log("".concat(numero, " es un n\u00FAmero primo."));
    }
    else {
        console.log("".concat(numero, " no es un n\u00FAmero primo."));
    }
}
