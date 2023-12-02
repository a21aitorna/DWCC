const paises: string[] = ["Albania","Alemania","Andorra","Armenia","Austria","Azerbaiyán","Bélgica","Bielorrusia","Bosnia y Herzegovina","Bulgaria","Chipre","Croacia","Dinamarca","Eslovaquia","Eslovenia",
    "España","Estonia","Finlandia","Francia","Georgia","Grecia","Hungría","Irlanda","Islandia","Italia","Kazajistán","Kosovo","Letonia","Liechtenstein","Lituania","Luxemburgo","Moldavia",
    "Mónaco","Montenegro","Noruega","Países Bajos","Polonia","Portugal","Reino Unido","República Checa","Rumanía","Rusia","Suecia","Suiza"];


function mirarNumeroElementos(arrayPaises:string[]){  
    console.log(`El numero de paises en el array es ${arrayPaises.length+1}`);
}

function mostrarPaises(arrayPaises:string[]){
    for(let i in arrayPaises){
        console.log(`${arrayPaises[i]}`);
    }
}

function mostrarPaisesInversa(arrayPaises:string[]){
    let paisesInversa: string[] =[...paises].reverse();
    paisesInversa.forEach(pais => {
        console.log(pais);
    });
}

function anhadirPaisComienzo(arrayPaises:string[]){
    let paisNuevoInicio: string | null = (<HTMLInputElement>document.getElementById("nuevoPaisInicio")).value;
    arrayPaises.splice(0,0, paisNuevoInicio);
    console.log(arrayPaises);
}

function anhadirPaisFinal(arrayPaises:string[]){
    let paisNuevoFinal: string|null = (<HTMLInputElement>document.getElementById("nuevoPaisFinal")).value;
    arrayPaises.splice(arrayPaises.length,0, paisNuevoFinal);
    console.log(arrayPaises);
}

function eliminarElementoComienzo(arrayPaises:string[]){
    let paisBorradoComienzo:string|undefined = arrayPaises.shift(); 
    console.log(`El pais borrado al principio es ${paisBorradoComienzo}`);

}

function eliminarElementoFinal(arrayPaises:string[]){
    let paisBorradoFinal: string|undefined= arrayPaises.pop();
    console.log(`El pais borrado al final es ${paisBorradoFinal}`);
}


function buscarElemento(arrayPaises: string[]) {
    let indice: number = parseInt((<HTMLInputElement>document.getElementById("indice")).value, 10);
    for (let i:number=0;i<=arrayPaises.length; i++) {
        if (indice === i) {
            console.log(`El elemento en la posición ${i} es ${arrayPaises[i]}`);
        }
    }
}

function buscarPosicion(arrayPaises:string[]){
    let paisBuscar: string = (<HTMLInputElement>document.getElementById("paisBuscar")).value;
    console.log(`El pais a buscar es ${paisBuscar}`);
    for(let i in arrayPaises){
        if(arrayPaises[i] === paisBuscar){
            console.log(`El pais ${paisBuscar} esta en la posicion ${i}`);
        }
    }

}

function mostrarElementosMedio(arrayPaises:string[]){
    let primeraPosicion:number = parseInt((<HTMLInputElement>document.getElementById("primeraPosicion")).value,10);
    let segundaPosicion:number = parseInt((<HTMLInputElement>document.getElementById("segundaPosicion")).value,10);

    let elementosMedio:string[] = arrayPaises.slice(primeraPosicion, segundaPosicion);
    console.log(elementosMedio);
}