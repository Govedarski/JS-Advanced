function addItem() {
    const itemTextInputElement = document.getElementById('newItemText');
    const itemValueInputElement = document.getElementById('newItemValue');

    const newOption = document.createElement('option');
    newOption.textContent = itemTextInputElement.value;
    newOption.value = itemValueInputElement.value;

    document.getElementById('menu').appendChild(newOption);
    itemTextInputElement.value = '';
    itemValueInputElement.value = '';
}