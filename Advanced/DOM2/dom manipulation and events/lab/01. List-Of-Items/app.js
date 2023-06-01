function addItem() {
    // get elements
    const text = document.getElementById('newItemText').value;
    const elementToAdd = document.createElement('li');
    elementToAdd.textContent = text;
    const list = document.getElementById('items');
    list.appendChild(elementToAdd);

    console.log('TODO:...');
}