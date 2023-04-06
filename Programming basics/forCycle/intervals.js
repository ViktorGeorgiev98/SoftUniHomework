function intervals(input) {
    let numberOfPlayers = Number(input[0]);
    let totalPoints = 0;
    let invalidNumbers = 0;
    let numbers0to9 = 0;
    let numbers10to19 = 0;
    let numbers20to29 = 0;
    let numbers30to39 = 0;
    let numbers40to50 = 0;
    for (let interval = 1; interval <= numberOfPlayers; interval++) {
        let currentNumber = Number(input[interval]);
        if (currentNumber < 0 || currentNumber > 50) {
            invalidNumbers += 1;
            totalPoints /= 2;
        } else if (currentNumber >= 0 && currentNumber < 10) {
            numbers0to9 += 1;
            totalPoints += currentNumber * 0.20;
        } else if (currentNumber >= 10 && currentNumber < 20) {
            numbers10to19 += 1;
            totalPoints += currentNumber * 0.30;
        } else if (currentNumber >= 20 && currentNumber < 30) {
            numbers20to29 += 1;
            totalPoints += currentNumber * 0.40;
        } else if (currentNumber >= 30 && currentNumber < 40) {
            numbers30to39 += 1;
            totalPoints += 50;
        } else if (currentNumber >= 40 && currentNumber <= 50) {
            numbers40to50 += 1;
            totalPoints += 100;
        }
    }
    console.log(`${totalPoints.toFixed(2)}`);
    console.log(`From 0 to 9: ${(numbers0to9 / numberOfPlayers * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(numbers10to19 / numberOfPlayers * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(numbers20to29 / numberOfPlayers * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(numbers30to39 / numberOfPlayers * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(numbers40to50 / numberOfPlayers * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidNumbers / numberOfPlayers * 100).toFixed(2)}%`);
}
intervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40" , "30" , "20"])