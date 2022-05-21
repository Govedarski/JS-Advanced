function solve(array) {
    let result = [array.shift()];
    while(array.length){
        let currentNumber = array.shift()
        if (currentNumber >= result.slice(-1)){
            result.push(currentNumber)
        }
    }
    return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([20, 3, 2, 15, 6, 1]));