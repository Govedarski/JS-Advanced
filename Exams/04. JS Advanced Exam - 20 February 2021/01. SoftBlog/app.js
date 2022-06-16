function solve() {
    const [authorInput, titleInput, categoryInput, contentInput, createButton]
        = document.querySelectorAll('aside input, aside textarea, aside button');
    const articleSection = document.querySelector('main>section');
    const archiveList = document.querySelector('section ol');
    createButton.addEventListener('click', (e) => {
        e.preventDefault();
        const [author, title, category, content] = [authorInput, titleInput, categoryInput, contentInput]
            .map(x => x.value);
        if ([author, title, category, content].some(x => x.length === 0)) return;

        const article = document.createElement('article');
        const pCategory = createAndAppendElementWithAttrs.bind(article)('h1', {textContent: title})
        ('p', {textContent: 'Category:'}, true);
        createAndAppendElementWithAttrs.bind(pCategory)('strong', {textContent: category});
        const pCreator = createAndAppendElementWithAttrs.bind(article)('p', {textContent: 'Creator:'}, true);
        createAndAppendElementWithAttrs.bind(pCreator)('strong', {textContent: author});
        const divButton = createAndAppendElementWithAttrs.bind(article)
        ('p', {textContent: content})('div', {className: 'buttons'}, true);
        const buttonDelete = createAndAppendElementWithAttrs.bind(divButton)
        ('button', {className: 'btn delete', textContent: 'Delete'}, true);
        const buttonArchive = createAndAppendElementWithAttrs.bind(divButton)
        ('button', {className: 'btn archive', textContent: 'Archive'}, true);
        buttonDelete.addEventListener('click', () => {
            article.remove();
        });
        buttonArchive.addEventListener('click', () => {
            createAndAppendElementWithAttrs.bind(archiveList)('li', {textContent: title});
            Array.from(archiveList.children)
                .sort((a, b) => a.textContent.localeCompare(b.textContent))
                .forEach(x => archiveList.appendChild(x));
            article.remove();
        });

        articleSection.appendChild(article);
    });


    function createAndAppendElementWithAttrs(elementName, kwargs, returnElement = false,) {
        const el = document.createElement(elementName);
        for (const attr in kwargs) {
            kwargs[attr] === 'classList'
                ? el.classList.add(kwargs[attr])
                : el[attr] = kwargs[attr];
        }
        this.appendChild(el);
        return returnElement ? el : createAndAppendElementWithAttrs.bind(this);
    }
}