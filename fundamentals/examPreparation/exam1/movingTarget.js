function movingTarget(arr) {
    let sequenceOfTargets = arr.shift().split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'End') {
            break;
        } else {
            let command = arr[i].split(' ');
            let order = command[0];
            let index = Number(command[1]);
            let value = Number(command[2]);
            if (order === 'Shoot') {
                if (index >= 0 && index < sequenceOfTargets.length) {
                    sequenceOfTargets[index] = Number(sequenceOfTargets[index]) - value;
                    if (Number(sequenceOfTargets[index]) <= 0) {
                        sequenceOfTargets.splice(index, 1);
                    }
                }
            } else if (order === 'Add') {
                if (index >= 0 && index < sequenceOfTargets.length) {
                    sequenceOfTargets.splice(index, 0, value);
                } else {
                    console.log(`Invalid placement!`);
                }
            } else if (order === 'Strike') {
                if (index >= 0 && index < sequenceOfTargets.length) {
                    let startOfRemoving = index - value;
                    let numberOfTargetsToBeRemoved = 1 + value + value;
                    if (startOfRemoving >= 0 && numberOfTargetsToBeRemoved < sequenceOfTargets.length) {
                        sequenceOfTargets.splice(startOfRemoving, numberOfTargetsToBeRemoved);
                    } else {
                        console.log(`Strike missed!`);
                    }
                }
            }
        }
    }
    console.log(sequenceOfTargets.join('|'));
}
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])

