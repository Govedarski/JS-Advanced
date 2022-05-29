function solve() {
    const text = document.getElementById('input').value;
    const sentences = text.split('.').filter(x => x);
    const output = document.getElementById('output');
    output.innerHTML = ''
    for (let i = 0; i < sentences.length; i += 3) {
        output.innerHTML += `<p>${sentences.slice(i, i + 3).join('.')}.</p>`;
    }
}