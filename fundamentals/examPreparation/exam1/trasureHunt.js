function trasureHunt(arr) {
    let initialLoot = arr.shift().split('|');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Yohoho!') {
            break;
        } else {
            let commandAndItem = arr[i].split(' ');
            let command = commandAndItem[0];
            let item = commandAndItem[1];
            
            if (command === 'Loot') {
                for (let j = 1; j < commandAndItem.length; j++) {
                    if (!initialLoot.includes(commandAndItem[j])) {
                        initialLoot.unshift(commandAndItem[j]);
                    }
                }
            } else if (command === 'Drop') {
                let index = Number(item);
                if (index >= 0 && index < initialLoot.length) {
                    let removedElement = initialLoot.splice(index, 1);
                    initialLoot.push(removedElement);
                }
            } else if (command === 'Steal') {
                let count = Number(item);
                let stolenItemsArr = [];
                for (let k = 1; k <= count; k++) {
                    let stolenItem = initialLoot.pop();
                    stolenItemsArr.unshift(stolenItem);
                    if (initialLoot.length === 0) {
                        break;
                    }
                }
                console.log(stolenItemsArr.join(', '));
            }
        }
    }
    if (initialLoot.length <= 0) {
        console.log('Failed treasure hunt.');
    } else {
        let average = 0;
        for (let o = 0; o < initialLoot.length; o++) {
            average += initialLoot[o].length;
        }
        average /= initialLoot.length;
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    }
}
trasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])

