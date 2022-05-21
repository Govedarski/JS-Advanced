function solve(matrix) {
    let result = 0
    for (let row = 0; row < matrix.length; row++) {
        for(let col = 0; col <matrix[row].length;col++){
            let current = matrix[row][col]
            let left = matrix[row][col+1]
            let down = matrix[row+1]?matrix[row+1][col]:matrix[row+1]
            if(current === left){
                result++
            }
            if (current===down){
                result++
            }
        }
    }
    return result
}

console.log(solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4'],
]));
console.log(solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5'],
]));

