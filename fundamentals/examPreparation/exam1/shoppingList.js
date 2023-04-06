function shoppingList(shopList) {
    let initialGroceriesList = shopList[0].split('!');
    for (let i = 1; i < shopList.length; i++) {
        let commandAndItem = shopList[i].split(' ');
        let command = commandAndItem[0];
        let item = commandAndItem[1];
        if (command === 'Urgent') {
            if (!initialGroceriesList.includes(item)) {
                initialGroceriesList.unshift(item);
            }
        } else if (command === 'Unnecessary') {
            if (initialGroceriesList.includes(item)) {
                let indexOfItem = initialGroceriesList.indexOf(item);
                initialGroceriesList.splice(indexOfItem, 1);
            }
        } else if (command === 'Correct') {
            let itemToBeCorrected = item.split(' ');
            if (initialGroceriesList.includes(commandAndItem[1])) {
                let indexOfItem = initialGroceriesList.indexOf(commandAndItem[1]);
                initialGroceriesList.splice(indexOfItem, 1, commandAndItem[2]);
            }
        } else if (command === 'Rearrange') {
            if (initialGroceriesList.includes(item)) {
                let indexOfItem = initialGroceriesList.indexOf(item);
                let itemToBeMoved = initialGroceriesList.splice(indexOfItem, 1);
                initialGroceriesList.push(itemToBeMoved);
            }
        }
    }
    console.log(initialGroceriesList.join(', '));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

