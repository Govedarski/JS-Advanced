function solve() {
    document.querySelector('#selectMenuTo option').textContent = 'Hexadecimal';
    document.querySelector('#selectMenuTo option').value = 'hexadecimal';
    const selectTo = document.getElementById('selectMenuTo');
    selectTo.innerHTML += '<option selected value="binary">Binary</option>';

    document.querySelector('button').addEventListener('click', onClick);

    function onClick() {
        let number = Number(document.getElementById('input').value);
        let convertTo = document.getElementById('selectMenuTo').value;
        const converting = {
            binary(number) {
                return number.toString(2);
            },
            hexadecimal(number) {
                return number.toString(16).toUpperCase();
            },
        };
        document.getElementById('result').value = converting[convertTo](number);
    }
}