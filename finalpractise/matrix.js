const rows = 3;
const cols = 3;

const matrix = new Array(rows);

for (i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(cols).fill(1)
}
console.log(matrix)