function solve(names) {
    names.sort((a, b) => a.localeCompare(b));
    names.forEach((name, index) => console.log(`${index + 1}.${name}`));
}

solve(['John', 'Bob', 'Christina', 'Ema']);