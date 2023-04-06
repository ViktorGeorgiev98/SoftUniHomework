function coins(input) {
    let index = 0;
    let change = Number(input[index]);
    let coinsCounter = 0;
    let changeInCoins = Math.round(change * 100);
    while (changeInCoins > 0) {
        if (changeInCoins >= 200) {
            changeInCoins -= 200;
            coinsCounter += 1;
        }
        if (changeInCoins >= 100 && changeInCoins < 200) {
            changeInCoins -= 100;
            coinsCounter += 1;
        }
        if (changeInCoins >= 50 && changeInCoins < 100) {
            changeInCoins -= 50;
            coinsCounter += 1;
        }
        if (changeInCoins >= 20 && changeInCoins < 50) {
            changeInCoins -= 20;
            coinsCounter += 1;
        }
        if (changeInCoins >= 10 && changeInCoins < 20) {
            changeInCoins -= 10;
            coinsCounter += 1;
        }
        if (changeInCoins >= 5 && changeInCoins < 10) {
            changeInCoins -= 5;
            coinsCounter += 1;
        }
        if (changeInCoins >= 2 && changeInCoins  < 5) {
            changeInCoins -= 2;
            coinsCounter += 1;
        }
        if (changeInCoins > 0 && changeInCoins < 2) {
            changeInCoins -= 1;
            coinsCounter += 1;
        }
    }
    console.log(coinsCounter);
}
coins(["10"])