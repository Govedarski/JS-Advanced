function solve(input) {
    let odd = input.filter((x, i) => i % 2);
    let result = [];
    for (const x of odd.reverse()) {
        result.push(x * 2);
    }
    return (result.join(' '));
}

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));