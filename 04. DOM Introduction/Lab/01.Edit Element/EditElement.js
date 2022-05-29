function editElement(htmlElement, match, replacer) {
    const regex = new RegExp(`${match}`, 'g');
    htmlElement.textContent = htmlElement.textContent.replace(regex, replacer);
}