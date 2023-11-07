let entrada: string | null;
let numero: number | null;

do {
    entrada = prompt("Ingrese un número para comprobar si es primo:");
    numero = entrada ? parseInt(entrada) : null;
} while (isNaN(numero as number) || numero === null);

if (numero as number <= 1) {
    console.log(`${numero} no es un número primo.`);
} else {
    let esPrimo = true;
    let i = 2;

  do {
    if (numero as number % i === 0) {
      esPrimo = false;
    }
    i++;
  } while (i * i <= numero as unknown as number && esPrimo);

  if (esPrimo) {
    console.log(`${numero} es un número primo.`);
  } else {
    console.log(`${numero} no es un número primo.`);
  }
}
