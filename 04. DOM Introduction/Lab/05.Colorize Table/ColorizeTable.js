function colorize() {
    for (const row of document.querySelectorAll('tr:nth-of-type(2n)')) {
        row.style.backgroundColor = 'Teal';
    }
}