function extract(content) {
    const element = document.getElementById(content);
    const matches = element.textContent.match(/\(([^)]+)\)/g);
    return matches.map(x => x.slice(1, -1)).join('; ');
}

function extractOneLineSolve(content) {
    return document.getElementById(content).textContent.match(/\(([^)]+)\)/g).map(x => x.slice(1, -1)).join('; ');
}