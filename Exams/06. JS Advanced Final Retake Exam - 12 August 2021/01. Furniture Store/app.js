window.addEventListener('load', solve);

function solve() {
    const [modelInput, yearInput, priceInput] = document.querySelectorAll('input');
    const descriptionInput = document.getElementById('description');
    const tableBody = document.querySelector('tbody');
    const totalProfitField = document.querySelector('tfoot td.total-price');
    let profit = 0;
    const addButton = document.getElementById('add');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        const inputValues = [modelInput, yearInput, priceInput, descriptionInput].map(x => x.value);
        let [model, year, price, description] = inputValues;
        price = Number(price);
        if (inputValues.some(x => x.length === 0) || year < 0 || price < 0) return;

        //create and append elements
        const trInfo = createAndAppendElementWithAttrs.bind(tableBody)('tr', {className: 'info'}, true);
        const tdActions = createAndAppendElementWithAttrs.bind(trInfo)
        ('td', {textContent: model})('td', {textContent: `${price.toFixed(2)}`})
        ('td', {}, true);
        const buttonMoreInfo = createAndAppendElementWithAttrs.bind(tdActions)('button', {
            className: 'moreBtn',
            textContent: 'More Info'
        }, true);
        const buttonBuy = createAndAppendElementWithAttrs.bind(tdActions)('button', {
            className: 'buyBtn',
            textContent: 'Buy it'
        }, true);
        const trHide = createAndAppendElementWithAttrs.bind(tableBody)('tr', {className: 'hide'}, true);
        createAndAppendElementWithAttrs.bind(trHide)('td', {textContent: `Year: ${year}`})
        ('td', {textContent: `Description: ${description}`, colSpan: '3'});

        // addeventlisteners
        buttonMoreInfo.addEventListener('click', () => {

            trHide.style.display === 'contents'
                ? trHide.style.display = 'contents'
                : trHide.style.display = 'none';

            buttonMoreInfo.textContent === 'More Info'
                ? buttonMoreInfo.textContent = 'Less Info'
                : buttonMoreInfo.textContent = 'More Info';
        });

        buttonBuy.addEventListener('click', () => {
            profit += Number(price);
            totalProfitField.textContent = `${profit.toFixed(2)}`;
            trInfo.remove();
            trHide.remove();
        });

        // clear the inputs
        modelInput.value = '';
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';
    });

    function createAndAppendElementWithAttrs(elementName, kwargs, returnElement = false,) {
        const el = document.createElement(elementName);
        for (const attr in kwargs) {
            kwargs[attr] === 'classList'
                ? kwargs[attr].forEach(klass => el.className.add(klass))
                : el[attr] = kwargs[attr];
        }
        this.appendChild(el);
        return returnElement ? el : createAndAppendElementWithAttrs.bind(this);
    }
}
