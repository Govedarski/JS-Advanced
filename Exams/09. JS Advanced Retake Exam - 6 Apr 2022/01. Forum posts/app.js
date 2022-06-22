window.addEventListener('load', solve);

function solve() {
    const inputFields = Array.from(document.querySelectorAll('input, textarea'));
    const [ulReviewList, ulPublishedList] = document.querySelectorAll('ul');
    const buttonPublish = document.getElementById('publish-btn');
    const buttonClear = document.getElementById('clear-btn');

    buttonPublish.addEventListener('click', () => {
        if (inputFields.some(input => !input.value.length)) return;
        const[title, category, description] = inputFields.map(input => input.value)
        const currentLi = createAndAppendElementWithAttrs.bind(ulReviewList)
        ('li',{className:'rpost'},true)
        const currentArticle = createAndAppendElementWithAttrs.bind(currentLi)('article',{},true)
        const buttonEdit = createAndAppendElementWithAttrs.bind(currentLi)('button',{className:'action-btn edit', textContent:'Edit'},true)
        const ButtonApprove= createAndAppendElementWithAttrs.bind(currentLi)('button',{className:'action-btn approve', textContent:'Approve'},true)
        createAndAppendElementWithAttrs.bind(currentArticle)
        ('h4',{textContent:title})
        ('p',{textContent:`Category: ${category}`})
        ('p',{textContent:`Content: ${description}`})

        //buttons
        buttonEdit.addEventListener('click', ()=>{
            inputFields[0].value=title
            inputFields[1].value=category
            inputFields[2].value=description
            currentLi.remove()
        })

        ButtonApprove.addEventListener('click', ()=>{
            buttonEdit.remove()
            ButtonApprove.remove()
            ulPublishedList.appendChild(currentLi)
        })

        inputFields.map(input => input.value = '')
    });

    buttonClear.addEventListener('click', ()=>{
        ulPublishedList.innerHTML = ''
    })

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
