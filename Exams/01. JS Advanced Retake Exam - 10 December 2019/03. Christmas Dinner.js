class ChristmasDinner {
    dishes = [];
    products = [];
    guests = {};

    constructor(budget) {
        if (budget < 0) {
            throw Error('The budget cannot be a negative number');
        }
        this.budget = budget;

    }

    shopping(productInfo) {
        let [productName, productPrice] = productInfo;
        productPrice = Number(productPrice);
        if (productPrice > this.budget) {
            throw Error('Not enough money to buy this product');
        }
        this.products.push(productName);
        this.budget -= productPrice;
        return `You have successfully bought ${productName}!`;
    }

    recipes(recipe) {
        const {recipeName, productsList} = recipe;
        if (!productsList.every(x => this.products.includes(x))) {
            throw Error('We do not have this product');
        }
        this.dishes.push(recipe);
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if (!this.dishes.some( x=> x.recipeName = dish)) {
            throw Error('We do not have this dish');
        }
        if (name in this.guests) {
            throw Error("This guest has already been invited")
        }

        this.guests[name] = dish
        return `You have successfully invited ${name}!`
    }

    showAttendance(){
        return Object.entries(this.guests)
            .map(([guest, dish])=>{
                let products = this.dishes.find(x => x.recipeName = dish).productsList.join(', ')
                return `${guest} will eat ${dish}, which consists of ${products}`
            }).join('\n')
    }
}
