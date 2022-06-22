class Garden {
    plants = [];
    storage = [];

    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw Error('Not enough space in the garden.');
        }

        this.spaceAvailable -= spaceRequired;
        this.plants.push({plantName, spaceRequired, ripe: false, quantity: 0});
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        const plant = this._findPlantOrThrowError(plantName);
        if (plant.ripe) {
            throw Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw Error('The quantity cannot be zero or negative.');
        }
        plant.ripe = true;
        plant.quantity = quantity;
        return plant.quantity === 1
            ? `${quantity} ${plantName} has successfully ripened.`
            : `${quantity} ${plantName}s have successfully ripened.`;
    }

    harvestPlant(plantName) {
        const plant = this._findPlantOrThrowError(plantName);
        if (!plant.ripe) {
            throw Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.plants.splice(this.plants.indexOf(plant), 1);
        this.spaceAvailable += plant.spaceRequired;
        this.storage.push({plantName, quantity: plant.quantity});
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        const info = [`The garden has ${this.spaceAvailable} free space left.`];
        info.push(`Plants in the garden: ${this.plants.map(p => p.plantName).join(', ')}`);
        this.storage.length
            ? info.push(`Plants in storage: ${this.storage.map(p => `${p.plantName} (${p.quantity})`).join(', ')}`)
            : info.push('Plants in storage: The storage is empty.');
        return info.join('\n')
    }

    _findPlantOrThrowError(plantName) {
        const plant = this.plants.find(p => p.plantName === plantName);
        if (!plant) {
            throw Error(`There is no ${plantName} in the garden.`);
        }
        return plant;
    }
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());