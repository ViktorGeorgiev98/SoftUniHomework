function shoot(arr) {
    let targets = arr.shift().split(' ');
    let shotTargets = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'End'){
            break;
        }
        let currentIndexForTargets = Number(arr[i]);
        if (currentIndexForTargets >= 0 && currentIndexForTargets < targets.length) {
            if (Number(targets[currentIndexForTargets]) != -1) {
                shotTargets++;
                let currentNumber = Number(targets[currentIndexForTargets]);
                targets[currentIndexForTargets] = -1;
                for (let j = 0; j < targets.length; j++) {
                    if (Number(targets[j]) != -1) {
                        if (Number(targets[j]) > currentNumber) {
                          targets[j] = Number(targets[j]) - currentNumber;
                     } else {
                          targets[j] = Number(targets[j]) + currentNumber;
                        }
                 }
             }
           } 
        }
    }
    console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);
}
shoot(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])



