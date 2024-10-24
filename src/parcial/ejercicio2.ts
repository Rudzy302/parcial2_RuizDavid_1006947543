const numeros: number[] = [1, 2, 3, 4, 5];
const frutas: string[] = ['manzana', 'banana', 'pera', 'uva'];
const booleanos: boolean[] = [true, false, true, false];
const tuplas: [number, string][] = [
  [1, 'uno'],
  [2, 'dos'],
  [3, 'tres']
];

numeros.push(6);
console.log(numeros);

numeros.pop();
console.log(numeros);

numeros.splice(numeros.indexOf(3), 1);
console.log(numeros);

const parteArray = numeros.slice(1, 4);
console.log(parteArray);

const cuadrados = numeros.map(num => num ** 2);
console.log(cuadrados);

const pares = numeros.filter(num => num % 2 === 0);
console.log(pares);

const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma);

const palabras = "Hola mundo".split(' ');
console.log(palabras);

const cadenaComas = palabras.join(',');
console.log(cadenaComas);

const arrayBusqueda = [10, 20, 30, 40, 50];
const mayor25 = arrayBusqueda.find(num => num > 25);
console.log(mayor25);

const indiceMayor25 = arrayBusqueda.findIndex(num => num > 25);
console.log(indiceMayor25);

const todosPositivos = arrayBusqueda.every(num => num > 0);
console.log(todosPositivos);

const algunMayor40 = arrayBusqueda.some(num => num > 40);
console.log(algunMayor40);

const combinado = [1, 2, 3].concat([4, 5, 6]);
console.log(combinado);

const arrayOrdenadoDesc = [5, 1, 4, 2, 3].sort((a, b) => b - a);
console.log(arrayOrdenadoDesc);

const arrayOrdenadoAsc = [5, 1, 4, 2, 3].sort((a, b) => a - b);
console.log(arrayOrdenadoAsc);

const nombres = ['Ana', 'Luis', 'Carlos'];
nombres.sort();
console.log(nombres);

const presente = arrayBusqueda.includes(4);
console.log(presente);
