function Christmas(input) {
    let tournamentDays = Number(input[0]);
    let index = 1;
    let wins = 0;
    let losses = 0;
    let moneyPrize = 0;
    let totalMoney = 0;
    let daysWon = 0;
    let daysLost = 0;
    let sport = '';
    let winOrLose = '';
    for (let day = 1; day <= tournamentDays; day++) {
        sport = input[index];
        index++;
        while (true) {           
            if (sport === 'Finish') {
                // index++;
                break;
            }
            winOrLose = input[index];
            index++;
            if (winOrLose === 'win') {
                moneyPrize += 20;
                wins += 1;
            } else if (winOrLose === 'lose') {
                losses += 1;
            }
            sport = input[index];
            index++;
        }
        if (wins > losses) {
            moneyPrize *= 1.10;
            daysWon += 1;
        } else if (wins < losses) {
            daysLost += 1;
            moneyPrize = moneyPrize;
        }
        totalMoney += moneyPrize;
        wins = 0;
        losses = 0;
        moneyPrize = 0;
    }
    if (daysWon > daysLost) {
        totalMoney *= 1.20;
    }
    if (daysWon > daysLost) {
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else if (daysWon < daysLost) {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
        
}
Christmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])

