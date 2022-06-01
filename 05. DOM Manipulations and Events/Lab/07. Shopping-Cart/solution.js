function solve() {
    const boughtProducts = {};
    const addProductElements = document.querySelectorAll('div.product');
    const resultOutputElement = document.querySelector('textarea');

    function changeEventToMultipleElements(elements, event, func, remove = false) {
        for (const element of elements) {
            remove ? element.removeEventListener(event, func) : element.addEventListener(event, func);
        }
    }

    function addProducts(e) {
        if (!(e.target.tagName.toLowerCase() === 'button' && e.target.className.toLowerCase() === 'add-product')) {
            return;
        }

        const productInfo = e.currentTarget.textContent.trim().split('\n');
        const name = productInfo[0].trim();
        const price = Number(productInfo[productInfo.length - 1].trim());

        if (!(name in boughtProducts)) {
            boughtProducts[name] = 0;
        }
        boughtProducts[name] += price;

        resultOutputElement.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

    }

    changeEventToMultipleElements(addProductElements, 'click', addProducts);

    const checkOutElement = document.querySelector('button.checkout');
    checkOutElement.addEventListener('click', function Checkout() {
        const products = Object.keys(boughtProducts).join(', ');
        const totalPrice = Object.values(boughtProducts).reduce((acc, x) => acc + x, 0);
        resultOutputElement.value += `You bought ${products} for ${totalPrice.toFixed(2)}.`;
        checkOutElement.removeEventListener('click', Checkout);
        changeEventToMultipleElements(addProductElements, 'click', addProducts, true);
    });
}