function solve(array) {
    const operands = [];
    let notEnoughOperands = false;
    for (const element of array) {
        if ('+-*/'.includes(element)) {
            if (operands.length < 2) {
                notEnoughOperands = true;
                break;
            }
            const [number1, number2] = operands.splice(-2, 2);
            if (number2 === 0 && element === '/') {
                break;
            }
            operands.push(eval(number1 + element + number2));
        } else {
            operands.push(element);
        }
    }
    if (notEnoughOperands) {
        console.log('Error: not enough operands!');
    } else {
        console.log(operands.length === 1 ? operands[0] : 'Error: too many operands!');
    }
}


solve([3,
    4,
    '+']
);
solve([5,
    3,
    4,
    '*',
    '-']);
solve([7,
    33,
    8,
    '-']);
solve([15,
    '/']);