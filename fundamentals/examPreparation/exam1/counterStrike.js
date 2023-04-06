function counterStrike(arr) {
    let wonTheGame = true;
    let battlesWon = 0;
    let energy = Number(arr.shift());
    for (let i = 0; i < arr.length; i++) {
        let currentBattleEnergyNeeded = Number(arr[i]);
        if (arr[i] === 'End of battle') {
            break;
        }
        // battlesWon += 1; 
        // if (battlesWon % 3 === 0) {
        //     energy += battlesWon;
        // }
        // energy -= currentBattleEnergyNeeded;
        if (energy >= currentBattleEnergyNeeded) {
            energy -= currentBattleEnergyNeeded;
            battlesWon += 1;
        } else {
            energy = 0;
            wonTheGame = false
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${0} energy`);
            break;
        }
        if (battlesWon % 3 === 0) {
            energy += battlesWon
        }
    }
    if (wonTheGame === true) {
        console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
    }
}
counterStrike(["200",
"10",
"End of battle",
"10",
"1",
"2",
"3",
"73",
"10"])


console.log('-------------------------------');


// counterStrike(["200",
// "54",
// "14",
// "28",
// "13",
// "End of battle"])
