let colorActivo='';
let pintando=false;

document.addEventListener('DOMContentLoaded', function(){
    crearTablero(30,30);
    cambiarSeleccionado(colorActivo);
    colorearCelda();
})

function crearTablero(filas, columnas){
    let zonaDibujo = document.getElementById('zonadibujo');
    let tableroDibujo = document.createElement('table');
    tableroDibujo.classList.add('tableroDibujo');

    for(let i=0;i<filas;i++){
        let fila = document.createElement('tr');
        fila.classList.add('fila');

        for(let j=0;j<columnas;j++){
            let celda = document.createElement('td');
            celda.classList.add('celda');
            fila.appendChild(celda);
        }

        tableroDibujo.appendChild(fila);
    }
    zonaDibujo.appendChild(tableroDibujo);
}

function cambiarSeleccionado(colorActivo){
    let paleta = document.getElementById('paleta');

    paleta.addEventListener('click', function(event){
        let colorSeleccionado = event.target.className;
        if(colorSeleccionado.startsWith('color')){
            colorActivo=colorSeleccionado;
            let colores = paleta.getElementsByClassName('seleccionado');
            for(let i=0;i<colores.length;i++){
                colores[i].classList.remove('seleccionado');
            }
            event.target.classList.add('seleccionado');
        }
    })
}

function colorearCelda(){
    let celdasTablero = document.getElementsByClassName('celda');
    let pintando=false;

    for(let i=0;i<celdasTablero.length;i++){
        celdasTablero[i].addEventListener('mousedown', function(){
            pintando=true;
            mostrarEstadoPincel(pintando);
            seleccionaColor(pintando,this);
        });
        celdasTablero[i].addEventListener('mouseover', function(){
            seleccionaColor(pintando, this);
        });
        celdasTablero[i].addEventListener('mouseup', function(){
            pintando=false;
            mostrarEstadoPincel(pintando);
        });
    };
}

function seleccionaColor(pintando, elemento){
    if(pintando){
        let elementoSeleccionado = document.getElementsByClassName('seleccionado')[0];
        let estiloSeleccionado = window.getComputedStyle(elementoSeleccionado);
        let colorSeleccionado = estiloSeleccionado.backgroundColor;
        elemento.style.backgroundColor=`${colorSeleccionado}`;
    }
}

function mostrarEstadoPincel(pintando){
    let mensajePincel = document.getElementById('pincel');
    mensajePincel.textContent = pintando ? "PINCEL ACTIVO":"PINCEL DESACTIVADO";

}