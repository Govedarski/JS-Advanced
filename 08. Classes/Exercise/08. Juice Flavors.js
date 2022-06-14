function juiceMaker(input) {
    const juiceStock = {};
    const producedBottles = {};
    for (const juiceInfo of input) {
        let [name, quantity] = juiceInfo.split(' => ');
        quantity = Number(quantity);

        if (juiceStock[name] === undefined) {
            juiceStock[name] = 0;
        }
        juiceStock[name] += quantity;

        if (juiceStock[name] < 1000) continue;

        if (producedBottles[name] === undefined) {
            producedBottles[name] = 0;
        }

        producedBottles[name] += Math.floor(juiceStock[name] / 1000);
        juiceStock[name] %= 1000;
    }

    console.log(Object.entries(producedBottles)
        .map(([name, quantity]) => `${name} => ${quantity}`)
        .join('\n'));
}

juiceMaker(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);
juiceMaker(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);