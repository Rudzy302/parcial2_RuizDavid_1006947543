const tamaño: number = 5;
const triangulo: number[][] = [];

for (let fila = 0; fila < tamaño; fila++) {
  const linea: number[] = [];
  for (let col = 0; col < tamaño * 2 - 1; col++) {
    if (col >= tamaño - fila - 1 && col <= tamaño + fila - 1 && (col - (tamaño - fila - 1)) % 2 === 0) {
      linea.push(1);
    } else {
      linea.push(0);
    }
  }
  triangulo.push(linea);
}

for (let i = 0; i < triangulo.length; i++) {
  console.log(triangulo[i].join(' '));
}
