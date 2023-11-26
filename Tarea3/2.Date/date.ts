function diasRestantesCurso(): void{
    const diaActual:Date = new Date();
    const finalCurso:Date = new Date(diaActual.getFullYear(),5,25);

    const milisegundosDia: number = 24*60*60*1000;
    const diasRestantes: number = Math.floor((finalCurso.getTime() - diaActual.getTime())/milisegundosDia);

    console.log(`Quedan ${diasRestantes} para que acabe el curso`);
}


function cumpleFinde(): void{
    const cumpleanhos:Date = new Date(prompt("Introduce tu cumpleaños"));
    const anoActual: number = new Date().getFullYear();


    for(let ano: number=anoActual;ano<=2100;ano++){
        const diaAniversario: Date = new Date(ano, cumpleanhos.getMonth(), cumpleanhos.getDate());
        if(diaAniversario.getDay()===6 || diaAniversario.getDay()===0){
            console.log(`Mi cumpleanos caera en fin de semana los anos ${ano}`);
        }
    }
}

function fechasFormatos(formato:number): void{
    const fechaActual:Date = new Date();

    switch(formato) {
        case 1:
            console.log(`${fechaActual.getMonth()+1}/${fechaActual.getDate()}/${fechaActual.getFullYear()}`);
            break;
        case 2:
            console.log(fechaActual.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}));
            break;
        case 3:
            console.log(fechaActual.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
            break;
        default:
            console.log('Formato no valido.')
    }
}
    function horaFormatos(formato:number):void {
        const horaActual: Date = new Date();

        switch (formato) {
            case 1:
                console.log(`${horaActual.getHours()}:${horaActual.getMinutes()}:${horaActual.getSeconds()}`);
                break;
            case 2:
                console.log(horaActual.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
                break;
            default:
                console.log("Formato no valido");
        }
    }