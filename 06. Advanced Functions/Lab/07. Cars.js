function solve(commands) {
    const cars = {};
    const functionsMapping = {
        create(name, inherits, parentName) {
            cars[name] = inherits ? {inherits: parentName} : {};
        },
        set(name, key, value) {
            cars[name][key] = value;
        },

        print(name) {
            let parentName = cars[name]['inherits'];
            let car = cars[name];
            while (parentName) {
                car = Object.assign(cars[name], cars[parentName]);
                parentName = cars[parentName]['inherits'];
            }
            console.log(
                Object.entries(car)
                    .filter(kvp => kvp[0] !== 'inherits')
                    .map(kvp => `${kvp[0]}:${kvp[1]}`)
                    .join(','));

        },
    };
    for (const command of commands) {
        let [func, ...args] = command.split(' ');
        functionsMapping[func](...args);
    }
}

// solve(['create c1',
//     'create c2 inherit c1',
//     'set c1 color red',
//     'set c2 model new',
//     'print c1',
//     'print c2']);

solve(['create pesho',
    'create gosho inherit pesho',
    'create stamat inherit gosho',
    'set pesho rank number1',
    'set gosho nick goshko',
    'print stamat']);


function solveSecondWay(commands) {
    const cars = {};
    const functionsMapping = {

        create(name, inherits, parentName) {
            cars[name] = inherits ? Object.create(cars[parentName]) : {};
        },

        set(name, key, value) {
            cars[name][key] = value;
        },


        print(name) {
            const car = cars[name];
            const result = []
            for (const prop in car) {
                result.push(`${prop}:${car[prop]}`)
            }
            console.log(result.join(','))
        },
    };

    for (const command of commands) {
        let [func, ...args] = command.split(' ');
        functionsMapping[func](...args);
    }
}

solveSecondWay(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);

solveSecondWay(['create pesho',
    'create gosho inherit pesho',
    'create stamat inherit gosho',
    'set pesho rank number1',
    'set gosho nick goshko',
    'print stamat']);