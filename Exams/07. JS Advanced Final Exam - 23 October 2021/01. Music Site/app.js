window.addEventListener('load', solve);

function solve() {
    const inputs = Array.from(document.querySelectorAll('input'));
    const buttonAdd = document.getElementById('add-btn');
    const collectionDiv = document.querySelector('#all-hits div.all-hits-container');
    const savedSongsDiv = document.querySelector('#saved-hits div.saved-container');
    const totalLikesP = document.querySelector('#total-likes div.likes p');
    let likes = 0

    buttonAdd.addEventListener('click', (e) => {
        e.preventDefault();
        if (inputs.some(x => x.value.length === 0)) return;

        const[genre, songName, authorName, date] = inputs.map(x=>x.value)
        const divInfo = createAndAppendElementWithAttrs.bind(collectionDiv)('div', {className:'hits-info'}, true)
        const buttonSave = createAndAppendElementWithAttrs.bind(divInfo)
        ('img', {src:'./static/img/img.png'})
        ('h2', {textContent:`Genre: ${genre}`})
        ('h2', {textContent:`Name: ${songName}`})
        ('h2', {textContent:`Author: ${authorName}`})
        ('h3', {textContent:`Date: ${date}`})
        ('button', {textContent:'Save song', className: 'save-btn'}, true)
        const buttonLike = createAndAppendElementWithAttrs.bind(divInfo)
        ('button', {textContent:'Like song', className: 'like-btn'}, true)
        const buttonDelete = createAndAppendElementWithAttrs.bind(divInfo)
        ('button', {textContent:'Delete', className: 'delete-btn'}, true)

        buttonLike.addEventListener('click', ()=>{
            buttonLike.setAttribute('disabled', true)
            totalLikesP.textContent = `Total Likes: ${++likes}`
        })

        buttonSave.addEventListener('click', () =>{
            savedSongsDiv.appendChild(divInfo)
            buttonSave.remove()
            buttonLike.remove()
        })

        buttonDelete.addEventListener('click', () =>{
            divInfo.remove()
        })

        inputs.forEach(x=> x.value = '')
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