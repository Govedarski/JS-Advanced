function addItem() {
    const valueToAdd = document.getElementById('newItemText').value;
    const newLI = document.createElement('li');
    newLI.textContent = valueToAdd;
    document.getElementById('items').appendChild(newLI)
}