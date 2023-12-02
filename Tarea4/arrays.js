var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var paises = ["Albania", "Alemania", "Andorra", "Armenia", "Austria", "Azerbaiyán", "Bélgica", "Bielorrusia", "Bosnia y Herzegovina", "Bulgaria", "Chipre", "Croacia", "Dinamarca", "Eslovaquia", "Eslovenia",
    "España", "Estonia", "Finlandia", "Francia", "Georgia", "Grecia", "Hungría", "Irlanda", "Islandia", "Italia", "Kazajistán", "Kosovo", "Letonia", "Liechtenstein", "Lituania", "Luxemburgo", "Moldavia",
    "Mónaco", "Montenegro", "Noruega", "Países Bajos", "Polonia", "Portugal", "Reino Unido", "República Checa", "Rumanía", "Rusia", "Suecia", "Suiza"];
function mirarNumeroElementos(arrayPaises) {
    console.log("El numero de paises en el array es ".concat(arrayPaises.length + 1));
}
function mostrarPaises(arrayPaises) {
    for (var i in arrayPaises) {
        console.log("".concat(arrayPaises[i]));
    }
}
function mostrarPaisesInversa(arrayPaises) {
    var paisesInversa = __spreadArray([], paises, true).reverse();
    paisesInversa.forEach(function (pais) {
        console.log(pais);
    });
}
function anhadirPaisComienzo(arrayPaises) {
    var paisNuevoInicio = document.getElementById("nuevoPaisInicio").value;
    arrayPaises.splice(0, 0, paisNuevoInicio);
    console.log(arrayPaises);
}
function anhadirPaisFinal(arrayPaises) {
    var paisNuevoFinal = document.getElementById("nuevoPaisFinal").value;
    arrayPaises.splice(arrayPaises.length, 0, paisNuevoFinal);
    console.log(arrayPaises);
}
function eliminarElementoComienzo(arrayPaises) {
    var paisBorradoComienzo = arrayPaises.shift();
    console.log("El pais borrado al principio es ".concat(paisBorradoComienzo));
}
function eliminarElementoFinal(arrayPaises) {
    var paisBorradoFinal = arrayPaises.pop();
    console.log("El pais borrado al final es ".concat(paisBorradoFinal));
}
function buscarElemento(arrayPaises) {
    var indice = parseInt(document.getElementById("indice").value, 10);
    for (var i = 0; i <= arrayPaises.length; i++) {
        if (indice === i) {
            console.log("El elemento en la posici\u00F3n ".concat(i, " es ").concat(arrayPaises[i]));
        }
    }
}
function buscarPosicion(arrayPaises) {
    var paisBuscar = document.getElementById("paisBuscar").value;
    console.log("El pais a buscar es ".concat(paisBuscar));
    for (var i in arrayPaises) {
        if (arrayPaises[i] === paisBuscar) {
            console.log("El pais ".concat(paisBuscar, " esta en la posicion ").concat(i));
        }
    }
}
function mostrarElementosMedio(arrayPaises) {
    var primeraPosicion = parseInt(document.getElementById("primeraPosicion").value, 10);
    var segundaPosicion = parseInt(document.getElementById("segundaPosicion").value, 10);
    var elementosMedio = arrayPaises.slice(primeraPosicion, segundaPosicion);
    console.log(elementosMedio);
}
