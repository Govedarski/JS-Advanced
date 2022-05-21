function solveSmarterWay(array) {
    let [matrixRows, matrixCols, startingRow, startingCol] = array;
    let matrix = new Array(matrixRows).fill(true).map(() => new Array(matrixCols).fill(true));

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col ++){
        matrix[row][col] = Math.max(Math.abs(row - startingRow), Math.abs(col - startingCol)) + 1
        }
    }

    matrix.forEach(line => console.log(line.join(' ')))
}

solveSmarterWay([4, 4, 0, 0]);
solveSmarterWay([5, 5, 2, 2]);
solveSmarterWay([3, 3, 2, 2]);

function solveOriginal(array) {
    const directions = [
        (r, c, i) => [r, c - i],
        (r, c, i) => [r, c + i],
        (r, c, i) => [r - i, c],
        (r, c, i) => [r + i, c],
        (r, c, i) => [r - i, c - i],
        (r, c, i) => [r + i, c + i],
        (r, c, i) => [r - i, c + i],
        (r, c, i) => [r + i, c - i],
    ];
    let [matrixRows, matrixCols, row, col] = array;
    let matrix = new Array(matrixRows).fill(true).map(() => new Array(matrixCols).fill(true));
    let currentNumber = 1;
    matrix[row][col] = currentNumber;

    for (let i = 1; i < Math.max(matrixRows, matrixCols); i++) {
        currentNumber++
        let r = row - i

        for (let c = col - i; c <= col + i; c++){
            if(matrix[r] && matrix[r][c]){
                matrix[r][c] = currentNumber
            }
        }

        r = row + i
        for (let c = col - i; c <= col + i; c++){
            if(matrix[r] && matrix[r][c]){
                matrix[r][c] = currentNumber
            }
        }

        let c = col - i
        for (let r = row - i; r <= row + i; r++){
            if(matrix[r] && matrix[r][c]){
                matrix[r][c] = currentNumber
            }
        }

        c = col + i
        for (let r = row - i; r <= row + i; r++){
            if(matrix[r] && matrix[r][c]){
                matrix[r][c] = currentNumber
            }
        }

    }

    matrix.forEach(line => console.log(line.join(' ')))
}

solveOriginal([4, 4, 0, 0]);
solveOriginal([5, 5, 2, 2]);
solveOriginal([3, 3, 2, 2]);