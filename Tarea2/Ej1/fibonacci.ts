let a: number = 0;
let b: number = 1;
let cont: number = 0;

console.log(b);

while (cont < 9) {
    const resultado: number = a + b;
    console.log(resultado);
    a = b;
    b = resultado;
    cont++;
}