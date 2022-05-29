function search() {
    const elements = document.querySelectorAll('#towns li');
    const criteria = document.getElementById('searchText').value;
    let counter = 0
    for (const element of elements) {
        if (element.textContent.includes(criteria)) {
            counter++
            element.style.textDecoration = 'underline';
            element.style.fontWeight = 'bold';
        } else {
            element.style.textDecoration = '';
            element.style.fontWeight = '';
        }
    }
    document.getElementById('result').textContent = `${counter} matches found`
}
