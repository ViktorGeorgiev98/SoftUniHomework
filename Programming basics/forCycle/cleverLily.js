function cleverLily(input) {
    let lilyAge = Number(input[0]);
    let washMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toyCount = 0;
    let moneyCount = 0
    let savedMoney = 0;
    let money = 10
    for (i = 1; i <= lilyAge; i++) {
        if (i % 2 != 0) {
            toyCount += 1;
        } else if ( i % 2 == 0) {
            moneyCount += money;
            moneyCount = moneyCount - 1;
            money += 10;
        }
    }
    let toyProfit = toyCount * toyPrice;
    let budget = moneyCount + toyProfit;
    if (budget >= washMachinePrice) {
        let moneyLeft = Math.abs(budget - washMachinePrice);
        console.log(`Yes! ${moneyLeft.toFixed(2)}`)
    } else {
        let moneyNeeded = Math.abs(budget - washMachinePrice);
        console.log(`No! ${moneyNeeded.toFixed(2)}`)
    }
}
cleverLily(["21",

"1570.98",

"3"])
