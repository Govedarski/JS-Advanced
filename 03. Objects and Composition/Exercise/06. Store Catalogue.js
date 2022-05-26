function solve(products) {
    const result = [];

    for (const productData of products) {
        const [name, price] = productData.split(' : ');
        result.push({name, price: Number(price)});
    }

    let letter = '';
    for (const prod of result.sort((a, b) => a.name.localeCompare(b.name))) {
        if (letter !== prod.name[0]) {
            letter = prod.name[0];
            console.log(letter);
        }
        console.log(`${prod.name}: ${prod.price}`)
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

solve(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);