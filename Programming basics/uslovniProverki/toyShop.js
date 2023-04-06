function toyShop(input) {
    let excursionPrice = Number(input[0]);
    let puzzleNum = Number(input[1]);
    let talkingDollsNum = Number(input[2]);
    let teddyBear = Number(input[3]);
    let minionsNumber = Number(input[4]);
    let trucksNumber = Number(input[5]);
    let pricePuzzleToys = puzzleNum * 2.60;
    let talkingDollPrice = talkingDollsNum * 3;
    let teddyBearPrice = teddyBear * 4.10;
    let minionsPrice = minionsNumber * 8.20;
    let truckPrice = trucksNumber * 2;
    let wholeNumberToys = puzzleNum + talkingDollsNum + teddyBear + minionsNumber + trucksNumber;
    let wholePrice = pricePuzzleToys + talkingDollPrice + teddyBearPrice + minionsPrice + truckPrice;
    if (wholeNumberToys >= 50) {
        wholePrice = wholePrice * 0.75;
    }
    finalProfit = wholePrice * 0.90;
    if (finalProfit >= excursionPrice) {
        let moneyLeft = Math.abs(excursionPrice - finalProfit);
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        let moneyNeeded = Math.abs(excursionPrice - finalProfit);
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }
}