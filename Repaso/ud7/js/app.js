// Código de validaciones del formulario
function comprobarExpReg(valor, regex, mensaje){
    if(!valor.match(regex)){
        alert(mensaje);
        return false;
    }
    return true;
}


function validarFormulario(){
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
}

// Envío de datos con XMLHttpRequest
