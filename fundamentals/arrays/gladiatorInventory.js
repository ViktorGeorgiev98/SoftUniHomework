function gladiatorInventory(inventory) {
    let newInventory = inventory[0].split(' ');
    for (let i = 1; i < inventory.length; i++) {
        let currentElementAndCommand = inventory[i].split(' ');
        let command = currentElementAndCommand[0];
        let element = currentElementAndCommand[1];
        if (command === 'Buy') {
            if (!newInventory.includes(element)) {
                newInventory.push(element);
            }
        } else if (command === 'Trash') {
            if (newInventory.includes(element)) {
                let indexOfelement = newInventory.indexOf(element)
                newInventory.splice(indexOfelement, 1);
            }
        } else if (command === 'Repair') {
            if (newInventory.includes(element)) {
                let indexOfelement = newInventory.indexOf(element)
                let itemToBeRepaired = newInventory.splice(indexOfelement, 1);
                newInventory.push(itemToBeRepaired);
            }
        } else if (command === 'Upgrade') {
            let itemToBeUpgraded = element.split('-');
            if (newInventory.includes(itemToBeUpgraded[0])) {
                for (let j = 0; j < newInventory.length; j++) {
                    if (newInventory[j] === itemToBeUpgraded[0]) {
                        itemToBeUpgraded = itemToBeUpgraded.join(':');
                        newInventory.splice(j + 1, 0, itemToBeUpgraded);
                        break;
                    }
                }
            }
        }
    }
    console.log(newInventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);


console.log('-------------------------------------')


gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V'])