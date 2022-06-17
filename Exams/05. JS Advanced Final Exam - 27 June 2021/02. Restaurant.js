class Restaurant {
    menu = {};
    stockProducts = {};
    history = [];

    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
    }

    loadProducts(products) {
        for (const productInfo of products) {
            let [name, quantity, price] = productInfo.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            if (price > this.budgetMoney) {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
                continue;
            }
            this.budgetMoney -= price;
            if (!this.stockProducts[name]) {
                this.stockProducts[name] = 0;
            }
            this.stockProducts[name] += quantity;
            this.history.push(`Successfully loaded ${quantity} ${name}`);
        }
        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (meal in this.menu) {
            return `The ${meal} is already in the our menu, try something different.`;
        }
        neededProducts = neededProducts.map(x => x.split(' '));
        this.menu[meal] = {neededProducts, price};
        const mealsNumber = Object.keys(this.menu).length;
        if (mealsNumber === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        }
        return `Great idea! Now with the ${meal} we have ${mealsNumber} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        return Object.entries(this.menu).map(([key, value]) => `${key} - $ ${value.price}`).join('\n') ||
            'Our menu is not ready yet, please come later...';
    }

    makeTheOrder(mealName) {
        if (!this.menu[mealName]) {
            return `There is not ${mealName} yet in our menu, do you want to order something else?`;
        }
        const meal = this.menu[mealName];
        for (const productInfo of meal.neededProducts) {
            let [productName, neededQuantity] = productInfo;
            neededQuantity = Number(neededQuantity);
            if (!this.stockProducts[productName] || this.stockProducts[productName] < neededQuantity) {
                return `For the time being, we cannot complete your order (${mealName}), we are very sorry...`;
            }
        }
        meal.neededProducts.forEach(([productName, neededQuantity]) =>
            this.stockProducts -= Number(neededQuantity));
        this.budgetMoney += meal.price
    return `Your order (${mealName}) will be completed in the next 30 minutes and will cost you ${meal.price}.`
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));