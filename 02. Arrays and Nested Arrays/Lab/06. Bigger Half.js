function solve(input) {
    input.sort((a, b) => a - b);
    let half = Math.floor(input.length / 2);
    return input.slice(half);
}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);