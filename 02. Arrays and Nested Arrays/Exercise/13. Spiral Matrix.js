function solve(matrixRow, matrixCol) {
    let matrix = new Array(matrixRow).fill(undefined).map(() => new Array(matrixCol).fill(-1));
    let currentNumber = 0;
    let maxNumber = matrixRow * matrixCol;
    let [row, col] = [0, -1];
    const directions = [
        (r, c) => [r, c + 1],
        (r, c) => [r + 1, c],
        (r, c) => [r, c - 1],
        (r, c) => [r - 1, c],
    ];
    let direction = directions.shift();

    while (currentNumber < maxNumber) {
        let [nextRow, nextCol] = direction(row, col);

        if (!(matrix[nextRow] && matrix[nextRow][nextCol]) || matrix[nextRow][nextCol] !== -1) {
            directions.push(direction);
            direction = directions.shift();
            continue;
        }

        [row, col] = [nextRow, nextCol];
        matrix[row][col] = ++currentNumber;

    }

    matrix.forEach(line => console.log(line.join(' ')))
}

solve(5, 5);
solve(3, 3);


// [0, 0]
//     [0, 1]
//     [0, 2]
//     [1, 2]
//     [2, 2]
//     [2, 1]
//     [2, 0]
//     [1, 0]
//     [1, 1];