let edad: number | null = parseInt(prompt("Introduce tu edad: "));

if (!isNaN(edad)) {
    if(edad>=0 && edad<=12){
        alert('Niño');
    }
    else if(edad>=13 && edad<=18){
        alert('Adolescente');
    }
    else if(edad>=19 && edad<=30){
        alert('Joven');
    }
    else if(edad>=31 && edad<=64){
        alert('Adulto');
    }
    else if(edad>=65 && edad<=100){
        alert('Jubilado');
    }
    else{
        alert('El numero introducido es mayor que 100');
    }
}