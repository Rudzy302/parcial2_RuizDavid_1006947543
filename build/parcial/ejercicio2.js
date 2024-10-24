const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'pera', 'uva'];
const booleanos = [true, false, true, false];
const tuplas = [
    [1, 'uno'],
    [2, 'dos'],
    [3, 'tres']
];
numeros.push(6);
numeros.pop();
numeros.splice(numeros.indexOf(3), 1);
const parteArray = numeros.slice(1, 4);
const cuadrados = numeros.map(num => Math.pow(num, 2));
const pares = numeros.filter(num => num % 2 === 0);
const suma = numeros.reduce((acc, num) => acc + num, 0);
const cadena = "Hola mundo";
const arrayPalabras = cadena.split(' ');
const cadenaComas = arrayPalabras.join(',');
const arrayBusqueda = [10, 20, 30, 40, 50];
const mayor25 = arrayBusqueda.find(num => num > 25);
const indiceMayor25 = arrayBusqueda.findIndex(num => num > 25);
const todosPositivos = arrayBusqueda.every(num => num > 0);
const algunMayor40 = arrayBusqueda.some(num => num > 40);
const combinado = [1, 2, 3].concat([4, 5, 6]);
const arrayOrdenado = [5, 1, 4, 2, 3];
arrayOrdenado.sort((a, b) => b - a);
arrayOrdenado.sort((a, b) => a - b);
const nombres = ['Ana', 'Luis', 'Carlos'];
nombres.sort();
const presente = arrayBusqueda.includes(4);
console.log({ numeros, frutas, booleanos, tuplas, parteArray, cuadrados, pares, suma, cadenaComas, mayor25, indiceMayor25, todosPositivos, algunMayor40, combinado, arrayOrdenado, nombres, presente });
//# sourceMappingURL=ejercicio2.js.map