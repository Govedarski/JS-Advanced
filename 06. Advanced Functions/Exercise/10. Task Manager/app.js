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

    const helpers = {
        createElementWithAttrs(elementName, textContent = '', klass = '') {
            const el = document.createElement(elementName);
            el.textContent = textContent;
            if (klass) el.classList.add(klass);
            return el;
        },
    };

    function add(e) {
        e.preventDefault();
        // validate inputs
        const inputData = Array.from(addTaskSectionDiv.querySelectorAll('input, textarea'));
        if (inputData.some(x => x.tagName = 'INPUT' ? !x.value.length : !x.textContent.length)) return;
        // create task
        const [task, description, dueDate] = inputData.map(x => x.tagName = 'INPUT' ? x.value : x.textContent);
        const article = document.createElement('article');
        article.appendChild(helpers.createElementWithAttrs('h3', task));
        article.appendChild(helpers.createElementWithAttrs('p', `Description: ${description}`));
        article.appendChild(helpers.createElementWithAttrs('p', `Due Date: ${dueDate}`));
        const div = helpers.createElementWithAttrs('div', '', CONST.DIV_FOR_BUTTONS_CLASS);
        div.appendChild(helpers.createElementWithAttrs('button', CONST.START_BUTTON_TITLE, CONST.START_BUTTON_CLASS));
        div.appendChild(helpers.createElementWithAttrs('button', CONST.DELETE_BUTTON_TITLE, CONST.DELETE_BUTTON_CLASS));
        article.appendChild(div);
        // add task (article) in openSectionDiv
        openSectionDiv.appendChild(article);
    }

    addTaskSectionDiv.querySelector('button').addEventListener('click', add);

    function start(e) {
        e.preventDefault();
        // check event target for start button
        if (e.target.className.trim().toLowerCase() !== CONST.START_BUTTON_CLASS) return;
        // add finish button
        e.target.parentElement.appendChild(
            helpers.createElementWithAttrs('button', CONST.FINISH_BUTTON_TITLE, CONST.FINISH_BUTTON_CLASS));
        // get clicked article and move it to inProgressSectionDiv
        inProgressSectionDiv.appendChild(e.target.parentElement.parentElement);
        // delete start button as last step, e.target === null after
        e.target.remove();
    }

    openSectionDiv.addEventListener('click', start);

    function deleting(e) {
        e.preventDefault();
        if (e.target.className.trim().toLowerCase() !== CONST.DELETE_BUTTON_CLASS) return;
        e.target.parentElement.parentElement.remove();
    }

    openSectionDiv.addEventListener('click', deleting);
    inProgressSectionDiv.addEventListener('click', deleting);

    function finish(e) {
        e.preventDefault();
        if (e.target.className.trim().toLowerCase() !== CONST.FINISH_BUTTON_CLASS) return;
        // first move article
        completeSectionDiv.appendChild(e.target.parentElement.parentElement);
        // then delete button's div
        e.target.parentElement.remove();
    }

    inProgressSectionDiv.addEventListener('click', finish);
}