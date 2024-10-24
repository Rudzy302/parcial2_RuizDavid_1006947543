const tamaño = 5;
const triangulo = [];
for (let fila = 0; fila < tamaño; fila++) {
    const linea = [];
    for (let col = 0; col < tamaño * 2 - 1; col++) {
        if (col >= tamaño - fila - 1 && col <= tamaño + fila - 1 && (col - (tamaño - fila - 1)) % 2 === 0) {
            linea.push(1);
        }
        else {
            linea.push(0);
        }
    }
    triangulo.push(linea);
}
for (let i = 0; i < triangulo.length; i++) {
    console.log(triangulo[i].join(' '));
}
//# sourceMappingURL=ejersicio1.js.map