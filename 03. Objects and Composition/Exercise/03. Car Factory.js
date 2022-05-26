function solve(order) {
    const engines = {
        'Small engine': {power: 90, volume: 1800},
        'Normal engine': {power: 120, volume: 2400},
        'Monster engine': {power: 200, volume: 3500},
    };
    const car = {};
    car.model = order.model;
    if (order.power <= engines['Small engine'].power) {
        car.engine = engines['Small engine'];
    } else if (order.power <= engines['Normal engine'].power) {
        car.engine = engines['Normal engine'];
    } else {
        car.engine = engines['Monster engine'];
    }

    car.carriage = {'type': order.carriage, 'color': order.color};
    car.wheels = new Array(4).fill(order.wheelsize % 2 ? order.wheelsize : order.wheelsize - 1);
    return car;
}


console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));