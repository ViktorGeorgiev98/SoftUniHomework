function imitationGame(input) {
    let encriptedMessage = input.shift();
    for (let line of input) {
        let currentLine = line.split('|');
        let command = currentLine[0];
        if (command === 'Decode') {
            break;
        }
        if (command === 'Move') {
            let lettersToBeMoved = Number(currentLine[1]);
            let leftHalf = encriptedMessage.slice(0,lettersToBeMoved);
            let rightHalf = encriptedMessage.slice(lettersToBeMoved);
            encriptedMessage = rightHalf + leftHalf;
        } else if (command === 'Insert') {
            let index = Number(currentLine[1]);
            let value = currentLine[2];
            let leftHalf = encriptedMessage.slice(0,index);
            let rightHalf = encriptedMessage.slice(index);
            encriptedMessage = leftHalf + value + rightHalf;
        } else if (command === 'ChangeAll') {
            let substr = currentLine[1];
            let change = currentLine[2];
            while (encriptedMessage.includes(substr)) {
                encriptedMessage = encriptedMessage.replace(substr, change);
            }
        }
    }

    console.log(`The decrypted message is: ${encriptedMessage}`);
}

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']
  );