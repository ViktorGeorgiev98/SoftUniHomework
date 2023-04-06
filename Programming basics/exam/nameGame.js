function nameGame(input) {
    let index = 0;
    let command = input[index];
    let playerName = '';
    while (true) {
        if (command === 'Stop') {
            break;
        } else {
            playerName = command;
        }
        index++;
        for (let i = 1; i <= playerName.length; i++) {
            let number = Number(input[i]);
        }
    }
}