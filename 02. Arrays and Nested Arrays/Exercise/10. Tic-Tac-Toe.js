function solve(commands) {
    /* work for out kind of square matrix
    and for different win conditions */

    const matrixSize = 3;
    let field = new Array(matrixSize).fill([]).map(() => new Array(matrixSize).fill(false));
    let players = ['X', 'O'];
    let isWinner = false;
    let turn = 0
    const lineToWin = 3;
    const checks = [
        {
            left: (r, c) => [r, c - 1],
            right: (r, c) => [r, c + 1],
        },
        {
            up: (r, c) => [r - 1, c],
            down: (r, c) => [r + 1, c],
        },
        {
            primaryDiagonalUp: (r, c) => [r - 1, c - 1],
            primaryDiagonalDown: (r, c) => [r + 1, c + 1],
        },
        {
            secondaryDiagonalUp: (r, c) => [r - 1, c + 1],
            secondaryDiagonalDown: (r, c) => [r + 1, c - 1],
        }];

    function isWin(field, r, c, toWin,) {
        const [startingR, startingC] = [r, c];
        const defaultToWin = toWin;
        let player = field[startingR][startingC];
        for (const check of checks) {

            for (const direction in check) {
                [r, c] = check[direction](r, c);
                let position = field[r] ? field[r][c] : false;

                while (player === position) {
                    if (!--toWin) {
                        return true;
                    }
                    [r, c] = check[direction](r, c);
                    position = field[r] ? field[r][c] : false;
                }

                [r, c] = [startingR, startingC];
            }
            toWin = defaultToWin;
        }
    }

    for (const command of commands) {
        let [row, col] = command.split(' ').map(Number);
        let currentPosition = field[row][col];

        if (currentPosition) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }


        let player = players.shift();
        field[row][col] = player;
        players.push(player);

        if (isWin(field, row, col, lineToWin - 1)) {
            isWinner = true;
            break;
        }
        if(++turn === matrixSize**2){
            break
        }
    }

    console.log(isWinner
        ? `Player ${players[1]} wins!`
        : 'The game ended! Nobody wins :(');

    for(let line of field){
        console.log(line.join('\t'))
    }

}

solve([
    '0 1',
    '0 0',
    '0 2',
    '2 0',
    '1 0',
    '1 1',
    '1 2',
    '2 2',
    '2 1',
    '0 0',
]);
solve([
    '0 0',
    '0 0',
    '1 1',
    '0 1',
    '1 2',
    '0 2',
    '2 2',
    '1 2',
    '2 2',
    '2 1',
]);
solve([
    '0 1',
    '0 0',
    '0 2',
    '2 0',
    '1 0',
    '1 2',
    '1 1',
    '2 1',
    '2 2',
    '0 0',
]);