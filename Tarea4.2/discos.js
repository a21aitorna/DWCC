class Disco{
    nombre;
    grupo;
    anho;
    tipoMusica;
    prestado;

    constructor(nombre, grupo, anho, tipoMusica, prestado){
        this.nombre = nombre;
        this.grupo = grupo;
        this.anho = anho;
        this.tipoMusica = tipoMusica;
        this.prestado = prestado;
    }

    cargarDatos(nombre, grupo, anho, tipoMusica, prestado){
        this.nombre = nombre;
        this.grupo = grupo;
        this.anho = anho;
        this.tipoMusica = tipoMusica;
        this.prestado = prestado;
    }

    mostrarInformacionDisco(){
        return `Nombre del disco: ${this.nombre}\n Grupo: ${this.grupo}\n Año: ${this.anho}\n Categorías: ${this.tipoMusica}\n Prestado: ${this.prestado ? 'Sí': 'No'}\n`;
    }
    
}


const discos=[];

function mostrarFormularioNuevoDisco(){
    document.getElementById('nuevoDisco').style.display="block";
    document.getElementById('informacionDiscos').style.display="none";
}

function guardarDisco(){
    const nombre = document.getElementById('nombreDisco').value;
    const grupo = document.getElementById('grupoMusica').value;
    const anho = parseInt(document.getElementById('anhoPublicacion').value);
    const tipoMusica = document.getElementById('tipoMusica').value;
    const prestado = document.getElementById('discoPrestado').checked

    const nuevoDisco = new Disco("", "", 0, [], false);
    nuevoDisco.cargarDatos(nombre, grupo, anho, tipoMusica, prestado);
    discos.push(nuevoDisco);

    document.getElementById('formularioDisco').reset();

    document.getElementById('nuevoDisco').style.display = "none";
    document.getElementById('informacionDiscos').style.display = "none";

}

function mostrarInformacionDiscos() {
    const outputElement = document.getElementById("output");
    outputElement.textContent = "";

    discos.forEach(disco => {
      outputElement.textContent += disco.mostrarInformacionDisco() + "\n";
      console.log(disco.mostrarInformacionDisco());
    });

    document.getElementById("nuevoDisco").style.display = "none";
    document.getElementById("informacionDiscos").style.display = "block";
}