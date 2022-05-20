function solve(number1, number2) {
    for (let i = Math.min(number1, number2); i >=1; i--){
        if (number1 % i === 0 && number2 % i === 0){
            console.log(i)
            break
        }
    }
}