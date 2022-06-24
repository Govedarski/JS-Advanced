class CarDealership {
    availableCars = [];
    soldCars = [];
    totalIncome = 0;
    sortingFunction = {
        horsepower: (a, b) => b.horsepower - a.horsepower,
        model: (a, b) => a.model.localeCompare(b.model),
    };

    constructor(name) {
        this.name = name;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' || typeof model !== 'string'
            || !Number.isInteger(horsepower) || horsepower < 0
            || typeof price !== 'number' || price < 0
            || typeof mileage !== 'number' || mileage < 0) {
            throw Error('Invalid input!');
        }
        this.availableCars.push({model, horsepower, price, mileage});
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const currentCar = this.availableCars.find(car => car.model === model);
        if (!currentCar) {
            throw Error(`${model} was not found!`);
        }
        let mileageDifference = currentCar.mileage - desiredMileage;

        let discount = 0;
        if (mileageDifference > 0) {
            discount += 5;
        }
        if (mileageDifference > 40000) {
            discount += 5;
        }
        let soldPrice = currentCar.price * (1 - discount / 100);
        this.totalIncome += soldPrice;
        this.soldCars.push({model, horsepower: currentCar.horsepower, soldPrice});
        this.availableCars.splice(this.availableCars.indexOf(currentCar), 1);
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (!this.availableCars.length) {
            return 'There are no available cars';
        }

        const info = ['-Available cars:'];
        info.push(
            this.availableCars.map(car => `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`)
                .join('\n'));
        return info.join('\n');
    }

    salesReport(criteria) {
        if (!(criteria in this.sortingFunction)) {
            throw Error('Invalid criteria!');
        }
        const info = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`, `-${this.soldCars.length} cars sold:`];
        info.push(
            this.soldCars
                .sort(this.sortingFunction[criteria])
                .map(car => `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`)
                .join('\n')
        );
        return info.join('\n')
    }

}




let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('aercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('aercedes C63', 110000);
console.log(dealership.salesReport('model'));