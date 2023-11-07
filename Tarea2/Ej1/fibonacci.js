console.log('Estos son los 10 primeros numeros de la sucesion de fibonacci');
let a = 0;
let b = 1;
let cont = 0;
console.log(b);
while (cont < 9) {
    let resultado = a + b;
    console.log(resultado);
    a = b;
    b = resultado;
    cont++;
}
