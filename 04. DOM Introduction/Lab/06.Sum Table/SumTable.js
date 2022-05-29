function sumTable() {
    let numberFields = Array.from(document.querySelectorAll('tr td:nth-of-type(2)'));
    let result = numberFields.pop();
    result.textContent = numberFields.reduce((acc, num) => acc + Number(num.textContent), 0);
}