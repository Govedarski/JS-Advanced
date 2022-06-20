class VegetableStore {
    availableProducts = [];

    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
    }

    loadingVegetables(vegetables) {
        const addedVegetables = new Set();
        for (const vegetableInfo of vegetables) {
            let [type, quantity, price] = vegetableInfo.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            let stockedProduct = this.availableProducts.find(x => x.type === type);
            if (!stockedProduct) {
                stockedProduct = {type, quantity: 0, price: 0};
                this.availableProducts.push(stockedProduct);
            }
            stockedProduct.quantity += quantity;
            stockedProduct.price < price ? stockedProduct.price = price : stockedProduct.price = stockedProduct.price;
            addedVegetables.add(type);
        }
        return `Successfully added ${Array.from(addedVegetables).join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (const productInfo of selectedProducts) {
            let [type, neededQuantity] = productInfo.split(' ');
            neededQuantity = Number(neededQuantity);
            let currentProduct = this.availableProducts.find(x => x.type === type);
            if (!currentProduct) {
                throw Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            if (currentProduct.quantity < neededQuantity) {
                throw Error(`The quantity ${neededQuantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            totalPrice += currentProduct.price * neededQuantity;
            currentProduct.quantity -= neededQuantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable (type, rottedQuantity){
        let currentProduct = this.availableProducts.find(x => x.type === type);
        if (!currentProduct) {
            throw Error(`${type} is not available in the store.`);
        }
        if (currentProduct.quantity < rottedQuantity) {
            currentProduct.quantity = 0
            return `The entire quantity of the ${type} has been removed.`
        }
        currentProduct.quantity -= rottedQuantity
        return `Some quantity of the ${type} has been removed.`
    }

    revision (){
        const info = ['Available vegetables:']
        info.push(this.availableProducts
            .sort((p1,p2)=> p1.price - p2.price)
            .map(p=>`${p.type}-${p.quantity}-$${p.price}`)
            .join('\n'))

        info.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return info.join('\n')
    }

}


let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

