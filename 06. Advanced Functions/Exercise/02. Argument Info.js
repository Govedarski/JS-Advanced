function solve() {
    const result = {};
    for (const arg of arguments) {
        const type = typeof arg;
        console.log(`${type}: ${arg}`);
        result[type] = (result[type] || 0)+1;
    }
    Object.entries(result)
        .sort((a,b) => b[1] - a[1])
        .forEach(
            kvp => console.log(`${kvp[0]} = ${kvp[1]}`));
}

solve('cat', 42, 42, function () {
    console.log('Hello world!');
});