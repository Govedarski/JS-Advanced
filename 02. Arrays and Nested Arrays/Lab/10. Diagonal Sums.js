function solve(matrix) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                primaryDiagonalSum += Number(matrix[row][col]);
            }
            if (row + col === matrix[row].length - 1) {
                secondaryDiagonalSum += Number(matrix[row][col]);
            }
        }
    }

    console.log(primaryDiagonalSum, secondaryDiagonalSum);
}

// solve([[20, 40],
//     [10, 60]]);
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);