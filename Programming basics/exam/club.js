function club(input) {
    let wantedProfit = Number(input[0]);
    let index = 1;
    let profit = 0;
    let currentProfit = 0;
    while (true) {
        let command = input[index];
        if (command === 'Party!') {
            break;
        }
        index++;
        let coctailNumber = Number(input[index]);
        // profit += command.length * coctailNumber;
        currentProfit = command.length * coctailNumber;
        if (currentProfit % 2 != 0) {
            profit += (command.length * coctailNumber) * 0.75;
        } else {
            profit += command.length * coctailNumber;
        }
        // if (currentProfit)
        if (profit >= wantedProfit) {
            break;
        }
        index++;
    }
    if (wantedProfit > profit ) {
        let diff = Math.abs(wantedProfit - profit);
        console.log(`We need ${diff.toFixed(2)} leva more.`);
    } else if (wantedProfit <= profit) {
        console.log('Target acquired.');
    }
    console.log(`Club income - ${profit.toFixed(2)} leva.`);
}
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);