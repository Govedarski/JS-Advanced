function solve() {
    let budget = 0;
    const inputFields = Array.from(document.querySelectorAll('input'));
    const buttonHired = document.getElementById('add-worker');
    const tableBody = document.getElementById('tbody');
    const budgetOutputField = document.getElementById('sum');

    buttonHired.addEventListener('click', (e) => {
        e.preventDefault();
        if (inputFields.some(input => !input.value.length)) return;
        const inputValues = inputFields.map(input => input.value);
        const [firstName, lastName, email, birthDate, position, salary] = inputValues;
        inputFields.forEach(input => input.value = '');
        const currentTr = createAndAppendElementWithAttrs.bind(tableBody)('tr', {}, true);
        const buttonsTd = createAndAppendElementWithAttrs.bind(currentTr)
        ('td', {textContent: firstName})
        ('td', {textContent: lastName})
        ('td', {textContent: email})
        ('td', {textContent: birthDate})
        ('td', {textContent: position})
        ('td', {textContent: salary})
        ('td', {}, true);
        const buttonFired = createAndAppendElementWithAttrs.bind(buttonsTd)('button', {
            textContent: 'Fired',
            className: 'fired'
        }, true);
        const buttonEdit = createAndAppendElementWithAttrs.bind(buttonsTd)('button', {
            textContent: 'Edit',
            className: 'edit'
        }, true);
        budget += Number(salary);
        budgetOutputField.textContent = budget.toFixed(2);
        buttonEdit.addEventListener('click', () => {
            inputFields.forEach((input, index) => input.value = inputValues[index]);
            currentTr.remove();
            budget -= Number(salary);
            budgetOutputField.textContent = budget.toFixed(2);
        });
        buttonFired.addEventListener('click', () => {
            currentTr.remove();
            budget -= Number(salary);
            budgetOutputField.textContent = budget.toFixed(2);
        });

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

solve();