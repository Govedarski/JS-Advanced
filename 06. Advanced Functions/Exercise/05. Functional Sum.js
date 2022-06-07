function add(num){
    let sum = 0
    adding.toString = () => sum

    function adding(num){
        sum += num
        return adding
    }

    return adding(num)
}
console.log(add(1)())
console.log(add(1)(6)(-3))


let sum = a => b => b? sum(a+b) : a;

console.log(sum(3)(2)(1)())