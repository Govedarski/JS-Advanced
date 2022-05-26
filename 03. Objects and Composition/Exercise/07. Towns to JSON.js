function solve(array) {
    const keys = array[0].split('|').map(x => x.trim()).filter(x => x);
    const result = [];
    for (let i = 1; i < array.length; i++) {
        const row = {};
        const values = array[i].split('|').map(x => x.trim()).filter(x => x);
        for (let j = 0; j < keys.length; j++) {
            row[keys[j]] = isNaN(Number(values[j])) ? values[j] : Math.round(Number((values[j]) * 100)) / 100;
        }
        result.push(row);
    }
    return JSON.stringify(result);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));
console.log(solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
));