function tournamen(input) {
    let clubName = input[0];
    let gamesPlayed = Number(input[1]);
    let winCounter = 0;
    let drawCounter = 0;
    let lossCounter = 0;
    let totalPoints = 0;
    for (let game = 2; game <= gamesPlayed + 2; game++) {
        let resultGame = input[game];
        if (resultGame === 'W') {
            winCounter += 1;
            totalPoints += 3;
        } else if (resultGame === 'D') {
            drawCounter += 1;
            totalPoints += 1;
        } else if (resultGame === 'L') {
            lossCounter += 1;
            totalPoints += 0;
        }
    }
    let winPercentage = winCounter / gamesPlayed * 100;
    if (gamesPlayed < 1) {
        console.log(`${clubName} hasn't played any games during this season.`);
    } else {
        console.log(`${clubName} has won ${totalPoints} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${winCounter}`);
        console.log(`## D: ${drawCounter}`);
        console.log(`## L: ${lossCounter}`);
        console.log(`Win rate: ${winPercentage.toFixed(2)}%`);
    }
}
tournamen(["Chelsea",
"0"])


