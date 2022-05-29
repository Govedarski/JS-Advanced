function extractText() {
    const liElements = document.querySelectorAll('ul li')
    const result = []
    for (const li of liElements) {
        result.push(li.textContent)
    }
    document.getElementById('result').textContent = result.join('\n')
}