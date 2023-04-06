function addRemove(arr) {
    let commandNumber = arr.length;
    let commands = 1;
    let newArr = [];
    for (let i = 0; i < commandNumber; i++) {
        if (arr[i] === 'add') {
            newArr.push(commands);
        } else if (newArr.length != 0) {
            newArr.pop();
        }
        commands += 1;
    }
    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
} 
// addRemove(['add', 'add', 'add', 'add']);

// console.log('------------');

// addRemove(['remove', 'remove', 'remove']);

// console.log('--------');

addRemove(['add', 'add', 'remove', 'add', 'add']);