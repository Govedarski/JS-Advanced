window.addEventListener('load', solve);

function solve() {
    const POSSIBLE_PRODUCT_TYPES = ['Phone', 'Computer'];
    const inputs = Array.from(document.querySelectorAll('select, textarea, input'));
    const buttonSendForm = document.querySelector('#right button');
    const buttonClear = document.querySelector('#completed-orders button');
    const sectionReceivedOrders = document.getElementById('received-orders');
    const sectionCompletedOrders = document.getElementById('completed-orders');

    buttonSendForm.addEventListener('click', (e) => {
        e.preventDefault();
        const productType = inputs[0].value;
        if (!POSSIBLE_PRODUCT_TYPES.includes(productType) || inputs.some(x => x.value.length === 0)) return;
        const [description, clientName, clientPhone] = inputs.slice(1).map(x => x.value);
        const divContainer = createAndAppendElementWithAttrs.bind(sectionReceivedOrders)('div', {className: 'container'}, true);
        const buttonStart = createAndAppendElementWithAttrs.bind(divContainer)
        ('h2', {textContent: `Product type for repair: ${productType}`})
        ('h3', {textContent: `Client information: ${clientName}, ${clientPhone}`})
        ('h4', {textContent: `Description of the problem: ${description}`})
        ('button', {textContent: 'Start repair', className: 'start-btn'}, true);
        const buttonFinish = createAndAppendElementWithAttrs.bind(divContainer)
        ('button', {textContent: 'Finish repair', className: 'finish-btn', disabled: true}, true);
        buttonStart.addEventListener('click', () => {
            buttonStart.setAttribute('disabled', true);
            buttonFinish.removeAttribute('disabled');
        });
        buttonFinish.addEventListener('click', () => {
            buttonStart.remove();
            buttonFinish.remove();
            sectionCompletedOrders.appendChild(divContainer);
        });
        inputs.slice(1).forEach(x => x.value = '');
    });


    buttonClear.addEventListener('click', () => {
        Array.from(sectionCompletedOrders.children).slice(3).forEach(x => x.remove());
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