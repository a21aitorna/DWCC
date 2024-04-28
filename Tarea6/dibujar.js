let colorActivo='';
let ratonPresionado=false;

document.addEventListener("DOMContentLoaded", function(){
    crearTablero(30,30);
    pasarSeleccionado(colorActivo);
    pintarCelda();
});



function crearTablero(filas, columnas){
    let zonaDibujo = document.getElementById('zonadibujo');
    let tabla = document.createElement('table');
    tabla.classList.add('tablerodibujo');
    for(let i=0;i<filas;i++){
        let fila = document.createElement('tr');
        fila.classList.add("fila");
        for(let j=0;j<columnas;j++){
            let celda = document.createElement('td');
            celda.classList.add('celda');
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    zonaDibujo.appendChild(tabla);
}

function pasarSeleccionado(colorActivo){
    document.getElementById('paleta');

    paleta.addEventListener('click', function(event){
        let colorSeleccionado = event.target.className;
        if(colorSeleccionado.startsWith('color')){
            colorActivo=colorSeleccionado;
            let colores = paleta.getElementsByClassName("seleccionado");
            for (var i = 0; i < colores.length; i++) {
                colores[i].classList.remove("seleccionado");
            }
            event.target.classList.add("seleccionado");
        }
    });
}

function pintarCelda(){
    let celdasTablero = document.getElementsByClassName('celda');
    let pintando = false;

    for (let i = 0; i < celdasTablero.length; i++) {
        celdasTablero[i].addEventListener('click', function() {
                pintando = !pintando;
                mostrarEstadoPincel(pintando);  
        });

        celdasTablero[i].addEventListener('mouseover', function() {
            seleccionaColor(pintando, this);
        });   
    }
}

function seleccionaColor(pintando, elemento){
    if (pintando) {
                console.log(pintando);
                let elementoSeleccionado = document.getElementsByClassName('seleccionado')[0];
                let estiloSeleccionado = window.getComputedStyle(elementoSeleccionado);
                let colorSeleccionado = estiloSeleccionado.backgroundColor;
                console.log(`El color selecionado es ${colorSeleccionado}`);
                elemento.style.backgroundColor =`${colorSeleccionado}`;
            }
}

function mostrarEstadoPincel(pintando){
    let mensajePincel = document.getElementById("pincel");
    if (pintando) {
        mensajePincel.textContent = "PINCEL ACTIVADO";
    } else {
        mensajePincel.textContent = "PINCEL DESACTIVADO";
    }
}