function getFibonator() {
    const lastNumbers = [0, 0];

    function fib() {
        const result = lastNumbers.reduce((acc, num) => acc + num, 0) || 1;
        lastNumbers.shift()
        lastNumbers.push(result)
        return result
    }

    return fib;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13