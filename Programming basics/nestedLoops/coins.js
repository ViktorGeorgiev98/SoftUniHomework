function coins(input) {
    let numberOfCoins1lv = Number(input[0]);
    let numberOfCoins2lv = Number(input[1]);
    let numberOfcoins5lv = Number(input[2]);
    let sum = Number(input[3]);
    for (let coin1 = 0; coin1 <= numberOfCoins1lv; coin1++) {
        for (let coin2 = 0; coin2 <= numberOfCoins2lv; coin2++) {
            for (let coin5 = 0; coin5 <= numberOfcoins5lv; coin5++) {
                if (coin1 * 1 + coin2 * 2 + coin5 * 5 === sum) {
                    console.log(`${coin1} * 1 lv. + ${coin2} * 2 lv. + ${coin5} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}
coins(["5", "3", "1", "7"]);