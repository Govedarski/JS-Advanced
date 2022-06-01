function solve() {
    const [furnitureInputElement, textareaBuyOutputElement] = document.querySelectorAll('textarea');
    const [buttonGenerateElement, buttonBuyElement] = document.querySelectorAll('button');

    buttonGenerateElement.addEventListener('click', () => {
        const furnitureList = JSON.parse(furnitureInputElement.value);
        const tbodyElement = document.querySelector('tbody');

        for (const furniture of furnitureList) {
            const htmlCodeToInsert = `<tr>
                                        <td><img src="${furniture.img}"></td>
                                        <td><p>${furniture.name}</p></td>
                                        <td><p>${furniture.price}</p></td>
                                        <td><p>${furniture.decFactor}</p></td>
                                        <td><input type="checkbox"/></td>
                                       </tr>`;
            tbodyElement.innerHTML += htmlCodeToInsert;
        }
    });

    buttonBuyElement.addEventListener('click', () => {
        const KEYS = ['name', 'price', 'decFactor'];
        const checkedElements = document.querySelectorAll('input:checked');
        const result = [];

        for (const element of checkedElements) {
            const allElementSiblings = Array.from(element.parentElement.parentElement.children).slice(1,-1);
            const boughtFurniture = {};
            for (let i = 0; i < 3; i++) {
                boughtFurniture[KEYS[i]] = allElementSiblings[i].children[0].textContent;
            }
            result.push(boughtFurniture);
        }

        const names = result.map(furniture => furniture.name);
        const totalPrice = result.map(furniture => furniture.price).reduce((acc, price) => acc + Number(price), 0);
        const averageDecFactor = result.map(furniture => furniture.decFactor).reduce((acc, df) => acc + Number(df), 0) / result.length;

        textareaBuyOutputElement.textContent += `Bought furniture: ${names.join(', ')}\n`;
        textareaBuyOutputElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
        textareaBuyOutputElement.textContent += `Average decoration factor: ${averageDecFactor}`;
    });
}
