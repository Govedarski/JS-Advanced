window.addEventListener('load', solution);

function solution() {
    const inputs = Array.from(document.querySelectorAll('input')).slice(0, 5);
    const previewList = document.getElementById('infoPreview');
    const buttonSubmit = document.getElementById('submitBTN');
    const buttonEdit = document.getElementById('editBTN');
    const buttonContinue = document.getElementById('continueBTN');
    const divBlock = document.getElementById('block');
    buttonSubmit.addEventListener('click', () => {
        const [name, email, phone, address, postCode] = inputs.map(x => x.value);
        if (name.length === 0 || email.length === 0) return;
        createAndAppendElementWithAttrs.bind(previewList)
        ('li', {textContent: 'Full Name: ' + name})
        ('li', {textContent: 'Email: ' + email})
        ('li', {textContent: 'Phone Number: ' + phone})
        ('li', {textContent: 'Address: ' + address})
        ('li', {textContent: 'Postal Code: ' + postCode});
        buttonSubmit.setAttribute('disabled', true);
        buttonEdit.removeAttribute('disabled');
        buttonContinue.removeAttribute('disabled');
        inputs.map(x => x.value = '');
        buttonEdit.addEventListener('click', () => {
            const values = [name, email, phone, address, postCode];
            inputs.map((x, i) => x.value = values[i]);
            previewList.innerHTML = '';
            buttonSubmit.removeAttribute('disabled');
            buttonEdit.setAttribute('disabled', true);
            buttonContinue.setAttribute('disabled', true);
        });
        buttonContinue.addEventListener('click', () => {
            divBlock.innerHTML = '';
            createAndAppendElementWithAttrs.bind(divBlock)('h3', {textContent: 'Thank you for your reservation!'});
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

