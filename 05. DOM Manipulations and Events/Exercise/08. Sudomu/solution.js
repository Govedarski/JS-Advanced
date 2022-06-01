function solve() {
    const DONE_BORDER_STYLE = '2px solid green';
    const UNDONE_BORDER_STYLE = '2px solid red';
    const DONE_TEXT_TO_DISPLAY = 'You solve it! Congratulations!';
    const UNDONE_TEXT_TO_DISPLAY = 'NOP! You are not done yet...';
    const DONE_TEXT_COLOR = 'green';
    const UNDONE_TEXT_COLOR = 'red';

    const gameField = document.querySelector('tbody');
    const FieldSize = gameField.children.length;
    const [buttonCheckElement, buttonResetElement] = document.querySelectorAll('button');
    const tableElement = document.querySelector('table');
    const resultOutputElement = document.querySelector('#check p');

    buttonResetElement.addEventListener('click', clear);

    function clear() {
        helpers.changeView();
        for (const row of gameField.children) {
            for (const col of row.children) {
                col.firstElementChild.value = '';
            }
        }
    }


    buttonCheckElement.addEventListener('click', check);

    function check() {
        const rowsInput = new Array(FieldSize).fill(undefined).map(x => []);
        const colsInput = new Array(FieldSize).fill(undefined).map(x => []);

        for (let rowIndex = 0; rowIndex < FieldSize; rowIndex++) {
            for (let colIndex = 0; colIndex < FieldSize; colIndex++) {
                const cellValue = gameField.children[rowIndex].children[colIndex].firstElementChild.value;
                rowsInput[rowIndex].push(cellValue);
                colsInput[colIndex].push(cellValue);
            }
        }

        const isDone = helpers.checkIsDone(rowsInput) ? helpers.checkIsDone(colsInput) : false;
        if (isDone) {
            helpers.changeView(DONE_BORDER_STYLE, DONE_TEXT_TO_DISPLAY, DONE_TEXT_COLOR);
        } else {
            helpers.changeView(UNDONE_BORDER_STYLE, UNDONE_TEXT_TO_DISPLAY, UNDONE_TEXT_COLOR);
        }
    }


    const helpers = {
        checkIsDone(checkedDirection) {
            for (const Numbers of checkedDirection) {
                if (!(
                    Numbers.every(x => x >= 1 && x <= checkedDirection.length) &&
                    new Set(Numbers).size === checkedDirection.length)) {
                    return false;
                }
            }
            return true;
        },

        changeView(borderStyle = '', textToDisplay = '', textColor = '') {
            tableElement.style.border = borderStyle;
            resultOutputElement.textContent = textToDisplay;
            resultOutputElement.style.color = textColor;
        }
    };
}