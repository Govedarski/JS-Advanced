function solve(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let start = i - k >= 0 ? i - k : 0;
        let previousElements = result.slice(start, i);
        let currentElement = previousElements.reduce((a, b) => a + b, 0);
        result.push(currentElement);
    }
    return result;
}

solve(6, 3);
solve(8, 2);