function solve(commands) {
    let result = [];
    let currentNumber = 0;
    for (const command of commands) {
        currentNumber++;
        if (command === 'add') {
            result.push(currentNumber);
        } else if (command === 'remove') {
            result.pop();
        }
    }
    console.log(result.length ? result.join('\n') : 'Empty');
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);