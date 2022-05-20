function solve(input) {
    input.sort((a, b) => a - b);
    console.log(input.slice(0, 2).join(' '));
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);