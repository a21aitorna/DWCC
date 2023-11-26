function informacionUsuario():void {
    const nombreCompleto: string|null = prompt("Introduce tu nombre y apellidos");

    if(nombreCompleto){
        //Tamaño nombre y apellidos
        const longitudNombreConEspacios = nombreCompleto.length;

        //Tamaño nombre y apellidos sin espacios
        const longitudNombreSinEspacios = nombreCompleto.replace(/\s/g, '').length;

        //Nombre y apellidos en minusculas
        const nombreCompletoMinusculas = nombreCompleto.toLowerCase();
        
        //Nombre y apellidos en mayusculas
        const nombreCompletoMayusculas = nombreCompleto.toUpperCase();

        //Mostrar separado nombre, apellido1 y apellido2
        const [nombre, apellido1, apellido2] = nombreCompleto.split(' ');

        //Nombre de usuario (nombre en minusculas, incial apellido1 en mayuscula e inicial apellido2 en mayuscula)
        const nombreUsuario: string|null =`${nombre.toLowerCase()}${apellido1.charAt(0).toUpperCase()}${apellido2.charAt(0).toUpperCase()}`;


        console.log(`La longitud del nombre con espacios es ${longitudNombreConEspacios}`);
        console.log(`La longitud del nombre sin espacios es ${longitudNombreSinEspacios}`);
        console.log(`El nombre en minusculas es ${nombreCompletoMinusculas}`);
        console.log(`El nombre completo en mayusculas es ${nombreCompletoMayusculas}`);
        console.log(`Nombre separado: Nombre - ${nombre}, Apellido1 - ${apellido1}, Apellido2 - ${apellido2}`);
        console.log(`Nombre usuario: ${nombreUsuario}`);

        //Introducir contraseña
        const password: string|null = prompt('Introduce una contrasenha: ')
        comprobarContrasena(password);
    }
}

function comprobarContrasena(password:string|null): void{
    if(password){
        const patron : RegExp =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,16}$/;
        if (patron.test(password)){
            console.log('La contrasenha es valida');
        }
        else{
            console.log('La contrasenha es invalida');
        }

    }
}

informacionUsuario();