function solve(input) {
    let first = Number(input[0]);
    let last = Number(input[input.length - 1]);
    let result = first + last;
    return result;
}

console.log(solve(['20', '30', '40']));
solve(['5', '10']);