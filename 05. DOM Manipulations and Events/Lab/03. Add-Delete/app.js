function addItem() {

    function deleteItem(e) {
        if (e.target.tagName.toLowerCase() === 'a') {
            e.target.parentElement.remove();
        }
    }

    const valueToAdd = document.getElementById('newItemText').value;
    const newLI = document.createElement('li');
    newLI.textContent = valueToAdd;

    const deleteAref = document.createElement('a');
    deleteAref.textContent = '[Delete]';
    deleteAref.href = '#';
    document.getElementById('items').appendChild(newLI);
    newLI.appendChild(deleteAref);
    newLI.addEventListener('click', deleteItem);
}

