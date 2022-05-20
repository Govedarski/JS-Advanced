function solve(array) {
    let total = array.reduce((a, b) => a + b, 0);
    console.log(total);
    let reverseTotal = array.reduce((a, b) => a + (1 / b), 0);
    console.log(reverseTotal);
    console.log(array.join(''))
}