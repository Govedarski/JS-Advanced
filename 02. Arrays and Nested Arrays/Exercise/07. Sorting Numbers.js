function solve(array) {
    array.sort((a, b) => a - b);
    let middle = Math.ceil(array.length / 2);
    let biggerHalf = array.splice(middle).reverse();
    let smallerHalf = array;
    let result = smallerHalf.reduce((acc, a, i) => acc.concat([a, biggerHalf[i]]), []);
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));