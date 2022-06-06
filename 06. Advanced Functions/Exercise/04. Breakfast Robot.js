function solution() {
    function ingredientCreate(protein =0, carbohydrate=0, fat=0, flavour=0) {
        return {protein, carbohydrate, fat, flavour};
    }

    const recipes = {
        apple: ingredientCreate(0, 1, 0, 2),
        lemonade: ingredientCreate(0, 10, 0, 20),
        burger: ingredientCreate(0, 5, 7, 3),
        eggs: ingredientCreate(5, 0, 1, 1),
        turkey: ingredientCreate(10, 10, 10, 10),
    };

    const stock = ingredientCreate();

    const functionMapping = {
        restock(ing, quant) {
            stock[ing] += quant;
            return 'Success';
        },

        prepare(recipe, quant) {
            function cook() {
                for (const [key, value] of arguments) {
                    stock[key] -= value;
                }
            };

            for (const [ingredient, ingQuantity] of Object.entries(recipes[recipe])) {
                if (ingQuantity * quant <= stock[ingredient]) {
                    cook = cook.bind(this, [ingredient, ingQuantity * quant]);
                } else {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }
            cook();
            return 'Success';
        },

        // prepareSecondWay(recipe, quant) {
        //     const recipeAsKVPArray = Object.entries(recipes[recipe]);
        //     const missingIngredient = recipeAsKVPArray
        //         .find(
        //             ([ingredient, ingQuantity]) => ingQuantity * quant > stock[ingredient]);
        //     if (missingIngredient) {
        //         return `Error: not enough ${missingIngredient[0]} in stock`;
        //     } else {
        //         recipeAsKVPArray.forEach(([ingredient, ingQuantity]) => stock[ingredient] -= ingQuantity * quant);
        //         return 'Success';
        //     }
        // },

        report() {
            return Object.entries(stock)
                .map(([stockIng, quantity]) => `${stockIng}=${quantity}`)
                .join(' ');
        },
    };

    function execute(input) {
        const [command, ingredientsOrRecipe, quantity] = input.split(' ');
        return functionMapping[command](ingredientsOrRecipe, Number(quantity));
    }

    return execute;
}


let manager = solution();
console.log(manager('restock flavour 50'));
console.log(manager('prepare lemonade 4'));

['restock carbohydrate 10',
    'restock flavour 10',
    'prepare apple 1',
    'restock fat 10',
    'prepare burger 1',
    'report',
].forEach(x => console.log(manager(x)));