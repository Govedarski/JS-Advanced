function cars(input){
    const cars = {}
    input.map(x => x.split(' | ')).forEach(([brand, model, number]) =>{
        number = Number(number)
        if(cars[brand] === undefined){
            cars[brand] = {}
        }
        if(cars[brand][model] === undefined){
            cars[brand][model] = 0
        }
        cars[brand][model] += number
    })

    console.log(Object.entries(cars)
        .map(([brand, models]) => {
            return brand
                + '\n'
                + Object.entries(models)
                    .map(([model, number]) => `###${model} -> ${number}`)
                    .join('\n')})
        .join('\n'))
}

cars(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])