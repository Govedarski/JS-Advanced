function solve(number) {
    let digits = Array.from(String(number), Number)
    console.log(new Set(digits).size === 1)
    console.log(digits.reduce((a,b) => a+b,0))
}