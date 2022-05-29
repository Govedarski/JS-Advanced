function solve(text, to) {
    function transformFunc(text) {
        return text
            .split(' ')
            .map((value, index) =>
                index < this.startIndex
                    ? value.toLowerCase()
                    : value[0].toUpperCase() + value.slice(1).toLowerCase())
            .join('');
    }

    const transform = {
        'Camel Case': {
            startIndex: 1,
            transformFunc,
        },
        'Pascal Case': {
            startIndex: 0,
            transformFunc,
        },
    };

    const textElement = document.getElementById('text').value
    const convention = document.getElementById('naming-convention').value

    document.getElementById('result').textContent = transform[convention]
        ? transform[convention].transformFunc(textElement)
        : 'Error!';
}


