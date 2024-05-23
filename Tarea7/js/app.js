// Código de validaciones del formulario

//Función para comprobar cada campo del formulario con su expresión regular
function comprobarCampoExpReg(valor, regex, mensaje){
    if(!regex.test(valor)){
        alert(mensaje);
        return false;
    }
    return true;
}

function validarFormulario(){
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const email = document.getElementById('correo').value.trim();
    const usuario = document.getElementById('usuario').value.trim();
    const contrasenha = document.getElementById('clave').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    
    const regExpNombre = /^[A-Za-záéíóúüñÁÉÍÓÚÜ\s]{1,20}$/;
    const regExpApellidos = /^[A-Za-záéíóúüñÁÉÍÓÚÜ\s]{1,40}$/;
    const regExpEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|es|gal|org)$/;
    const regExpUsuario = /^[A-Za-z0-9]{1,20}$/;
    const regExpContrasenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const regExpTelefono = /^[0-9]{9}$/;

    const errorNombre = "El nombre debe contener solo caracteres alfabéticos y tener una longitud máxima de 20 caracteres y no puede estar vacío";
    const errorApellido = "Los apellidos deben contener solo caracteres alfabéticos y tener una longitud máxima de 40 caracteres y no puede estar vacío";
    const errorEmail = "El correo electrónico no tiene un formato válido. Debe terminar en .com, .net, .es, .gal, o .org, y no puede estar vacío";
    const errorUsuario= "El usuario debe contener solo caracteres alfanuméricos y tener una longitud máxima de 20 caracteres";
    const errorContrasenha = "La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial.";
    const errorTelefono =  "El teléfono debe contener exactamente 9 números.";

    // Se llama a la función de comprobar expresiones regulares y si alguno no cumple mostramos una alerta
    if (!comprobarCampoExpReg(nombre, regExpNombre, errorNombre)) {
        return false;
    }
    if (!comprobarCampoExpReg(apellidos, regExpApellidos, errorApellido)) {
        return false;
    }
    if (!comprobarCampoExpReg(email, regExpEmail, errorEmail)) {
        return false;
    }
    if (!comprobarCampoExpReg(usuario, regExpUsuario, errorUsuario)) {
        return false;
    }
    if (!comprobarCampoExpReg(contrasenha, regExpContrasenha, errorContrasenha)) {
        return false;
    }
    if (!comprobarCampoExpReg(telefono, regExpTelefono, errorTelefono)) {
        return false;
    }
    //Devuelve true si todos los campos están bien
    return true; 
}

// Envío de datos con XMLHttpRequest

document.addEventListener('DOMContentLoaded', function(){
    const formulario = document.getElementById('formulario');
    const infoRespuesta = document.getElementById('info-respuesta');
    const respuestaServidor = document.getElementById('respuesta-servidor');

    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        if (!validarFormulario()) {
            //Termina la ejecución del submit en caso de que sea false, evitando que se envíe al servidor.
            return;
        }
        //Creo un objeto de formData, donde se recopilan los datos del formulario HTML
        const formData = new FormData(formulario);

        const xhr = new XMLHttpRequest();
        //Configuro la petición que se quiere hacer, a dónde se quiere hacer y si debe ser asíncrona o no
        xhr.open('POST', 'php/registrar.php', true);

        xhr.onload = function(){
            //Si el estado de la request es correcto, devuelve un estado 200
            if(xhr.status === 200){
                respuestaServidor.innerHTML = xhr.responseText;
                infoRespuesta.style.display = "block";
            }
            else{
                //Si hay algún error a la hora de enviarlo, muestra el error y su estado
                respuestaServidor.innerHTML = `Error en el envío: ${xhr.statusText}`;
                infoRespuesta.style.display = "block";
            }
        };
        //Se envía la solicitud al servidor.
        xhr.send(formData);
    });

});
