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
    const correo = document.getElementById('correo').value.trim();
    const usuario = document.getElementById('usuario').value.trim();
    const clave = document.getElementById('clave').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    const expRegNombre = /^[A-Za-záéíóúüñÁÉÍÓÚÜ\s]{1,20}$/;
    const expRegApellido = /^[A-Za-záéíóúüñÁÉÍÓÚÜ\s]{1,40}$/;
    const expRegEmail = /^[A-Za-z\d._%+-]+@[A-Za-z\d.-]+\.(com|net|es|gal|org)/;
    const expRegUsuario = /^[A-Za-z0-9]{1,20}$/;
    const expRegContrasenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[@#$*?~/])[A-Za-z\d@#$*?~/]{8,}$/;
    const expRefTlf = /^[\d]{9}$/;

    const errorNombre = "Error nombre";
    const errorApellido = "Error apellido";
    const errorEmail = "Error email";
    const errorUsuario = "Error usuario";
    const errorContrasenha = "Error contrasenha";
    const errorTlf = "Error telefono";

    if(!comprobarExpReg(nombre, expRegNombre,errorNombre) ||!comprobarExpReg(apellidos, expRegApellido, errorApellido) || !comprobarExpReg(correo, expRegEmail, errorEmail) || !comprobarExpReg(usuario, expRegUsuario, errorUsuario) || !comprobarExpReg(clave, expRegContrasenha, errorContrasenha) || !comprobarExpReg(telefono, expRefTlf, errorTlf)){
        return false;
    }

    return true;
}

// Envío de datos con XMLHttpRequest
document.addEventListener('DOMContentLoaded', function(){
    const formulario = document.getElementById('formulario');
    const infoRespuesta = document.getElementById('info-respuesta');
    const respuestaServidor = document.getElementById('respuesta-servidor');

    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        if(!validarFormulario){
            return ;
        }
        const formData = new FormData(formulario);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'php/registrar.php');
        xhr.onload = function(){
            if(xhr.status === 200){
                respuestaServidor.innerHTML = xhr.responseText;
                infoRespuesta.style.display="block";
            }
            else{
                respuestaServidor.innerHTML =`Error ${xhr.statusText}`;
                infoRespuesta.style.display="block";
            }
        }
        xhr.send(formData);
    });
}); 