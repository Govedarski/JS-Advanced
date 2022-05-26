function solve(input) {
    const cities = {};
    for (const line of input) {
        let [name, population] = line.split(' <-> ');
        if (!cities[name]) {
            cities[name] = 0;
        }
        cities[name] += Number(population);
    }
    for (const [key, value] of Object.entries(cities)) {
        console.log(`${key} : ${value}`);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);


function solveWithTernaryOperator(input) {
    const cities = {};
    for (const line of input) {
        let [name, population] = line.split(' <-> ');
        cities[name] = cities[name] ? cities[name] + Number(population) : Number(population);
    }
    for (const [key, value] of Object.entries(cities)) {
        console.log(`${key} : ${value}`);
    }
}

solveWithTernaryOperator(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
solveWithTernaryOperator(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);