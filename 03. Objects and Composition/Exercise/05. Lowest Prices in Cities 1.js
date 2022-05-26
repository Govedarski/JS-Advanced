function solve(products) {
    function createProduct(town, name, price){
        return{name, town, price:Number(price)}
    }

    const result = []

    for (const productData of products) {
        const currentProduct = createProduct(...productData.split(' | '))
        const indexFound = result.findIndex((x => x.name === currentProduct.name))
        const productFound = result[indexFound]

        if(indexFound >= 0 && currentProduct.price < productFound.price){
            result.splice(indexFound,1,currentProduct)
        }else if(indexFound === -1){
            result.push(currentProduct)
        }
    }

    result.forEach(product => console.log(`${product.name} -> ${product.price} (${product.town})`) )
}

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
   ' Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'])