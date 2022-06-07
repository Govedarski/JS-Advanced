function solve() {
    const CONST = {
        START_BUTTON_CLASS: 'green',
        START_BUTTON_TITLE: 'Start',
        DELETE_BUTTON_CLASS: 'red',
        DELETE_BUTTON_TITLE: 'Delete',
        FINISH_BUTTON_CLASS: 'orange',
        FINISH_BUTTON_TITLE: 'Finish',
        DIV_FOR_BUTTONS_CLASS: 'flex',
    };

    const [addTaskSectionDiv, openSectionDiv, inProgressSectionDiv, completeSectionDiv] = document.querySelectorAll('div.wrapper section div:last-child');
    const inputData = Array.from(addTaskSectionDiv.querySelectorAll('input, textarea'));

    addTaskSectionDiv.querySelector('button').addEventListener('click', add);
    openSectionDiv.addEventListener('click', start);
    openSectionDiv.addEventListener('click', deleting);
    inProgressSectionDiv.addEventListener('click', deleting);
    inProgressSectionDiv.addEventListener('click', finish);


    function add(e) {
        const inputDataValues = inputData.map(x => x.tagName = 'INPUT' ? x.value : x.textContent);

        e.preventDefault();
        if (inputDataValues.some(x => !x.length)) return;

        const [task, description, dueDate] = inputDataValues;
        const article = document.createElement('article');
        const div = helpers.createAndAppendElementWithAttrs.bind(article)
        ('h3', task)
        ('p', `Description: ${description}`)
        ('p', `Due Date: ${dueDate}`)
        ('div', '', CONST.DIV_FOR_BUTTONS_CLASS, true);
        helpers.createAndAppendElementWithAttrs.bind(div)
        ('button', CONST.START_BUTTON_TITLE, CONST.START_BUTTON_CLASS)
        ('button', CONST.DELETE_BUTTON_TITLE, CONST.DELETE_BUTTON_CLASS);
        openSectionDiv.appendChild(article);
    }


    function start(e) {
        e.preventDefault();
        if (e.target.className.trim().toLowerCase() !== CONST.START_BUTTON_CLASS) return;

        const divForButtons = e.target.parentElement;
        e.target.remove();
        helpers.createAndAppendElementWithAttrs.bind(divForButtons)
        ('button', CONST.FINISH_BUTTON_TITLE, CONST.FINISH_BUTTON_CLASS);
        inProgressSectionDiv.appendChild(divForButtons.parentElement);
    }


    function deleting(e) {
        e.preventDefault();
        if (e.target.className.trim().toLowerCase() !== CONST.DELETE_BUTTON_CLASS) return;

        e.target.parentElement.parentElement.remove();
    }


    function finish(e) {
        e.preventDefault();
        if (e.target.className.trim().toLowerCase() !== CONST.FINISH_BUTTON_CLASS) return;

        completeSectionDiv.appendChild(e.target.parentElement.parentElement);
        e.target.parentElement.remove();
    }


    const helpers = {
        createAndAppendElementWithAttrs(elementName, textContent = '', klass = '', returnElement = false,) {
            const el = document.createElement(elementName);
            el.textContent = textContent;
            if (klass) el.classList.add(klass);
            this.appendChild(el);
            return returnElement ? el : helpers.createAndAppendElementWithAttrs.bind(this);
        },
    };
}