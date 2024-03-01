function convertirMayusculas(elemento){
    elemento.value = elemento.value.toUpperCase();
}

function comprobarCampoExpReg(elemento, regex, mensaje){
    if(!elemento.value.match(regex)){
        mostrarError(mensaje);
        elemento.focus();
        //Ya adelanto que en todas las expresiones regulares estas comenzarán por /^(marca el inicio de la expReg) y acabarán en $/ (indica el final de la expReg)
    }
}

function comprobarEdad(elemento, mensaje){
    if(elemento.value<0 || elemento.value>105){
        mostrarError(mensaje);
        elemento.focus();
    }
}

function mostrarError(mensaje){
    let contenedorErrores = document.getElementById('errores');
    contenedorErrores.innerHTML=mensaje;
}

document.getElementById('nombre').addEventListener("blur", function(){
    convertirMayusculas(this);
    comprobarCampoExpReg(this, /^[A-ZÑÁÉÍÓÚÜ\s]+$/, "Error en el campo nombre");
    // /^[A-ZÑÁÉÍÓÚÜ\s]+$/->Se valida que contenga letras del alfabeto español mayúsculas, junto las vocales acentuadas, la Ñ y espacios en blanco.
});

document.getElementById('apellidos').addEventListener("blur", (event) => {
    const elemento = event.target;
    convertirMayusculas(elemento);
    comprobarCampoExpReg(elemento, /^[A-ZÑÁÉÍÓÚÜ\s]+$/, "Error en el campo apellidos");
    // /^[A-ZÑÁÉÍÓÚÜ\s]+$/->Es la misma expresión que en la del campo de nombre
});

document.getElementById('edad').addEventListener("blur", (event) => {
    const elemento = event.target;
    comprobarEdad(elemento, "Error en el campo edad");
});

document.getElementById('nif').addEventListener("blur", function(){
    comprobarCampoExpReg(this, /^\d{8}-[A-ZÑa-zñ]$/, "Error en el campo nif");
    /*
        /^\d{8}-[A-za-z]$/->
            \d{8}: indica que cualquier numero entre 0 y 9 aparecerá 8 veces.
            -: indica el guión
            [A-za-z]: indica que cualquiera letra entre A y Z incluyendo la Ñ (tanto en mayúscula y minúscula), aparecerá.
    */
});

document.getElementById('email').addEventListener("blur", function(){
    comprobarCampoExpReg(this, /^[^\s@]+@\S+\.\S+$/, "Error en el campo email");
    /*
        /^[^\s@]+@\S+\.\S+$/->
            [\s@]+: indica que cualquier carácter excepto los que están entre corchetes (espacios en blanco y el @) aparecerán una o más veces.
            @: indica que el siguiente carácter es un @.
            \S+: indica que cualquier carácter que no sea un espacio aparecerá una o más veces.
            .: indica que el siguiente carácter será un punto.
            \S+: indica que cualquier carácter que no sea un espacio aparecerá una o más veces.
    */
});

document.getElementById('provincia').addEventListener("blur", function(){
    if(this.value==="0"){
        mostrarError("Selecciona una provincia");
        this.focus();
    }
});

document.getElementById('fecha').addEventListener("blur", function (){
    comprobarCampoExpReg(this, /^((0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$)|((0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$)/, "Error en el campo fecha");
    /*
        /^((0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4})|((0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4})$/->Lo voy a dividir en varias partes cadenas:
            ((0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4})->
                (0[1-9]|[12][0-9]|3[01]): indica que puede ser un número de 01 a 09 o (el símbolo |) uno del 10 al 29 o del 30 al 31.
                \/:el siguiente carácter es /.
                (0[1-9]|1[0-2]): indica que puede ser un numero del 01 al 09 o del 10 al 12.
                \/:el siguiente carácter es /.
                \d{4}: indica que va a ser un numero de 4 cifras, las cuales cada una de ellas van del 0 al 9.
            |->actúa como la expresioón lógica OR (para indicar que siga el formato dd/mm/aaaa o dd-mm-aaaa y no se puedan hacer las combinaciones dd/mm-aaaa o dd-mm/aaaa).
            ((0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4})->
                (0[1-9]|[12][0-9]|3[01]): indica que puede ser un número de 01 a 09 o (el símbolo |) uno del 10 al 29 o del 30 al 31.
                -:el siguiente carácter es /.
                (0[1-9]|1[0-2]): indica que puede ser un numero del 01 al 09 o del 10 al 12.
                -:el siguiente carácter es -.
                \d{4}: indica que va a ser un numero de 4 cifras, las cuales cada una de ellas van del 0 al 9.
    */
});

const comprobarTelefono = (event) => {
    const elemento = event.target;
    comprobarCampoExpReg(elemento, /^\d{9}$/, "Error en el campo telefono");
    /*
        /^\d{9}$/->indica que aparecera un número de 9 cifras, cuyo valor de cada una puede ser del 0 al 9.
    Borré momentánemente el atributo maxLength para comprobar que funcionara bien con cifras de más.
    */
}
document.getElementById('telefono').onblur = comprobarTelefono;

document.getElementById('hora').addEventListener("blur", function(){
    comprobarCampoExpReg(this, /^([01]\d|2[0-3]):[0-5]\d$/, "Error en el campo hora");
    /*
        /^([01]\d|2[0-3]):([0-5]\d)$/->
            ([01]\d|2[0-3]): indica que el número puede ir de 00 a 19 o de 20 a 23.
            : :indica que el siguiente carácter van a ser los dos puntos.
            [0-5]\d: indica que el número puede ir de 00 a 59.
    */
});

//Para confirmar el envío del formulario probé de dos formas
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event){
    const confirmacion = window.confirm('¿Estás seguro de enviar el formulario?');
    if(!confirmacion){
        event.preventDefault();
    }
});

// const enviarFormulario = document.getElementById('enviar');
// enviarFormulario.addEventListener('click', function(event){
//     const confirmacion = window.confirm('¿Estás seguro de enviar el formulario?');
//         if(!confirmacion){
//             event.preventDefault();
//         }
// });