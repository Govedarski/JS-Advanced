function solve(input) {
    let result = [];
    for (let x of input) {
        x < 0 ? result.unshift(x) : result.push(x);
    }
    console.log(result.join('\n'));
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);