function solve() {
    const inputFields = Array.from(document.querySelectorAll('input, textarea'));
    const buttonAdd = document.getElementById('add');
    const buttonReset = document.getElementById('reset');
    const listOfMailsUl = document.getElementById('list');
    const sentMailsUl = document.querySelector('div.sent-mails>ul.sent-list');
    const deletedMailsUl = document.querySelector('div.trash>ul.delete-list');

    buttonAdd.addEventListener('click', (e) => {
        e.preventDefault();
        if (inputFields.some(input => !input.value.length)) return;
        const [recipient, title, message] = inputFields.map(input => input.value);
        inputFields.forEach(input => input.value = '');
        let currentLi = createAndAppendElementWithAttrs.bind(listOfMailsUl)('li', {}, true);
        const divButtons = createAndAppendElementWithAttrs.bind(currentLi)
        ('h4', {textContent: `Title: ${title}`})
        ('h4', {textContent: `Recipient Name: ${recipient}`})
        ('span', {textContent: message})
        ('div', {id: 'list-action'}, true);
        const buttonSend = createAndAppendElementWithAttrs.bind(divButtons)('button', {
            type: 'submit',
            id: 'send',
            textContent: 'Send'
        }, true);
        const buttonDelete = createAndAppendElementWithAttrs.bind(divButtons)('button', {
            type: 'submit',
            id: 'delete',
            textContent: 'Delete'
        }, true);

        buttonSend.addEventListener('click', () => {
            currentLi.remove();
            currentLi = createAndAppendElementWithAttrs.bind(sentMailsUl)('li', {}, true);
            createAndAppendElementWithAttrs.bind(currentLi)
            ('span', {textContent: `To: ${recipient}`})
            ('span', {textContent: `Title: ${title}`});
            const deleteDiv = createAndAppendElementWithAttrs.bind(currentLi)('div', {className:'btn'}, true);
            buttonDelete.className =buttonDelete.id
            buttonDelete.id = ''
            deleteDiv.appendChild(buttonDelete)
        });

        buttonDelete.addEventListener('click', () => {
            currentLi.remove();
            currentLi = createAndAppendElementWithAttrs.bind(deletedMailsUl)('li', {}, true);
            createAndAppendElementWithAttrs.bind(currentLi)
            ('span', {textContent: `To: ${recipient}`})
            ('span', {textContent: `Title: ${title}`});
        });
    });

    buttonReset.addEventListener('click', (e)=>{
        e.preventDefault()
        inputFields.forEach(input => input.value = '');
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