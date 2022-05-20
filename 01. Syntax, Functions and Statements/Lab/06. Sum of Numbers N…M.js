function solve(number1, number2) {
    let total = 0;
    for (let i = Number(number1); i <= Number(number2); i++) {
        total += i;
    }
    console.log(total)
}