//Tabla de multiplicación.
//Pide un número por prompt y muestra por console su tabla de multiplicación.

let numero = prompt("Ingrese un numero");
let multi;
for (let i = 1; i <= 10; i++) {
    multi  = numero * i;
    console.log (numero + " x " + i + " = " + multi);
    }

