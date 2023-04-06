function decryptingCommands(input) {
    let text = input.shift();
    for (let line of input) {
        let currentCommandAndInput = line.split(' ');
        let command = currentCommandAndInput.shift();
        if (command === 'Finish') {
            break;
        }

        if (command === 'Replace') {
            let charToBeReplaced = currentCommandAndInput[0];
            let newChar = currentCommandAndInput[1];
            while(text.includes(charToBeReplaced)) {
                text = text.replace(charToBeReplaced, newChar);
            }
            console.log(text);
        } else if (command === 'Cut') {
            let startIndex = Number(currentCommandAndInput[0]);
            let endIndex = Number(currentCommandAndInput[1]);
            if ((startIndex < 0 || startIndex >= text.length) || (endIndex < 0 || endIndex >= text.length)) {
                console.log('Invalid indices!');
            } else {
                let leftHalf = text.slice(0, startIndex);
                let rightHalf = text.slice(endIndex + 1);
                text = leftHalf + rightHalf;
                console.log(text);
            }
        } else if (command === 'Make') {
            let make = currentCommandAndInput[0];
                if (make === 'Upper') {
                    text = text.toUpperCase();
                } else if (make === 'Lower') {
                    text = text.toLowerCase();
                }
                console.log(text);
            } else if (command === 'Check') {
                let string = currentCommandAndInput[0];
                if (text.includes(string)) {
                    console.log(`Message contains ${string}`);
                } else {
                    console.log(`Message doesn't contain ${string}`);
                }
            } else if (command === 'Sum') {
                let startIndex = Number(currentCommandAndInput[0]);
                let endIndex = Number(currentCommandAndInput[1]);
                if ((startIndex < 0 || startIndex >= text.length) || (endIndex < 0 || endIndex >= text.length)) {
                    console.log('Invalid indices!');
                } else {
                    let substring = text.slice(startIndex, endIndex + 1);
                    let sum = 0;
                    for (let char of substring) {
                        sum += Number(char.charCodeAt(0));
                    }
                    console.log(sum);
                }
                
            }
        }
    }



decryptingCommands(["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"])

