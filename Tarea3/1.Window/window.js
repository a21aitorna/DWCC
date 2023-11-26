// window js
let ventanaRemota;

function abrirVentana() {
    const permiso = confirm("¿Quieres abrir una nueva ventana?");

    if(permiso) {
        ventanaRemota = window.open("remoteWindow.html", "", "width=300, height=300, top=400, left=400, toolbar=no, menubar=no");

        if(!ventanaRemota || ventanaRemota.close) {
            alert("La ventana se cerro o esta bloqueada");
        }
        else{
            window.addEventListener("focus", mantenerVisible)
        }
    }
}

function cerrarVentana(){
    if(ventanaRemota && !ventanaRemota.closed)
        ventanaRemota.close();
    else
        alert("La ventana remota esta cerrada");
}

function moverVentanaUno(){
    ventanaRemota.moveBy(50,20);
    ventanaRemota.focus();
}

function moverVentanaDos(){
    ventanaRemota.moveTo(0,0);
    ventanaRemota.focus();
}

function aumentarTamaño(){
    ventanaRemota.resizeBy(50,50);
    ventanaRemota.focus();
}

function redimensionarVentana(){
    ventanaRemota.resizeTo(500,500);
    ventanaRemota.focus();
}

function mantenerVisible() {
    if (ventanaRemota && ventanaRemota.closed) {
        alert("La ventana fue cerrada.");
    } else {
        ventanaRemota.focus();
    }
}

document.getElementById("urlInfo").innerHTML = window.location.href;
document.getElementById("protocoloInfo").innerHTML = window.location.protocol;
document.getElementById("navegadorInfo").innerHTML = navigator.userAgent;
document.getElementById("javaInfo").innerHTML = "Java " + (navigator.javaEnabled() ? "esta activo":"no esta activo");

