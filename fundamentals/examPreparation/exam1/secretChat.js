function secretChat(input) {
    let message = input.shift();

    for (let line of input) {
        let currentCommand = line.split(':|:');
        let command = currentCommand.shift();
        if (command === 'Reveal') {
            break;
        }

        if (command === 'InsertSpace') {
            let index = Number(currentCommand[0]);
            let leftSide = message.slice(0, index);
            let rightSide = message.slice(index);
            message = leftSide + ' ' + rightSide;
            console.log(message);
        } else if (command === 'Reverse') {
            let substring = currentCommand[0];
            if (message.includes(substring)) {
                let index = message.indexOf(substring);
                let leftSide = message.slice(0, index);
                let lastIndex = index + substring.length;
                let rightSide = message.slice(lastIndex);
                let reversed = substring.split('').reverse().join('');
                message = leftSide + rightSide + reversed;
                // message = leftSide + reversed;
                console.log(message);
            } else {
                console.log('error');
            }
        } else if (command === 'ChangeAll') {
            let substring = currentCommand[0];
            let replacement = currentCommand[1];
            while(message.includes(substring)) {
                message = message.replace(substring, replacement);
            }
            console.log(message);
        }

    }

    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  
)