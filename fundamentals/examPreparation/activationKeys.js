function activationKeys(input) {
    let text = input.shift();
    for (let line of input) {
        let currentCommandAndValue = line.split('>>>');
        let command = currentCommandAndValue.shift();
        if (command === 'Generate') {
            break;
        }

        if (command === 'Contains') {
            let substring = currentCommandAndValue.shift();
            if (text.includes(substring)) {
                console.log(`${text} contains ${substring}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (command === 'Flip') {
            let upperOrLower = currentCommandAndValue.shift();
            let startIndex = Number(currentCommandAndValue.shift());
            let endIndex = Number(currentCommandAndValue.shift());
            let leftSide = text.slice(0, startIndex);
            let rightSide = text.slice(endIndex);
            let middleSide = text.slice(startIndex, endIndex);
            if (upperOrLower === 'Upper') {
                middleSide = middleSide.toUpperCase();
            } else if (upperOrLower === 'Lower') {
                middleSide = middleSide.toLowerCase();
            }
            text = leftSide + middleSide + rightSide;
            console.log(text);
        } else if (command === 'Slice') {
            let startIndex = Number(currentCommandAndValue.shift());
            let endIndex = Number(currentCommandAndValue.shift());
            let leftSide = text.slice(0, startIndex);
            let rightSide = text.slice(endIndex);
            text = leftSide + rightSide;
            console.log(text);
        }
    }

    console.log(`Your activation key is: ${text}`);
}

activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

;