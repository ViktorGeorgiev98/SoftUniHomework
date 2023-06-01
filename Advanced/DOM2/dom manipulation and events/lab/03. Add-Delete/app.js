function addItem() {
    const items = document.getElementById('items');
    const newItem = document.getElementById('newItemText').value;
    const createdItem = document.createElement('li');
    createdItem.textContent = newItem;
    // items.appendChild(createdItem);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '[Delete]';
    // deleteButton.setAttribute('href', '#');
    deleteButton.href = '#';
    createdItem.appendChild(deleteButton);
    items.appendChild(createdItem);
    deleteButton.addEventListener('click', deleteElement);

    function deleteElement(e) {
        e.target.parentElement.remove();
    } 

    //TODO...
}


// function addItem() {
//     const inputElement = document.getElementById('newItemText');
 
//     const aElement = document.createElement('a');
//     aElement.href = '#';
//     aElement.textContent = '[Delete]'
//     aElement.addEventListener('click', deleteItem,false);

//     const liElement = document.createElement('li');
//     liElement.textContent = inputElement.value;
//     liElement.appendChild(aElement);

//     document.getElementById('items').appendChild(liElement);
//     inputElement.value = '';

//     function deleteItem(ev){
//         ev.target.parentElement.remove();
//     }
// }