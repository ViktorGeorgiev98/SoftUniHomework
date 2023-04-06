function train(arr) {
    let wagonCapacity = Number(arr[1]);
    let currentStateTrain = arr[0].split(' ');
    for (let i = 2; i < arr.length; i++) {
        if (arr[i].includes('Add')) {
            let currentCommand = arr[i].split(' ');
            let capacityOfWagonToBeAdded = currentCommand[1];
            currentStateTrain.push(capacityOfWagonToBeAdded);
        } else {
            let currentCommand = arr[i].split(' ');
            let numberPassengers = Number(currentCommand[0]);
            for (let j = 0; j < currentStateTrain.length; j++) {
                if (numberPassengers + Number(currentStateTrain[j]) <= Number(wagonCapacity)) {
                    currentStateTrain[j] = Number(currentStateTrain[j]) + numberPassengers;
                    break;
                }
            }
        }
    }
    console.log(currentStateTrain.join(' '));
}
train(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6'])