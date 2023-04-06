function bikeRace(input) {
    let juniorRiders = Number(input[0]);
    let seniorRiders = Number(input[1]);
    let pathType = input[2];
    let totalNumberOfPeople = juniorRiders + seniorRiders;
    let money = 0;
    let moneyForGiving = 0;
    let juniorMoney = 0;
    let seniorMoney = 0;
    if (pathType === 'trail') {
        seniorMoney = seniorRiders * 7;
        juniorMoney = juniorRiders * 5.50;
        money = seniorMoney + juniorMoney;
    } else if (pathType === 'downhill') {
        seniorMoney = seniorRiders * 13.75;
        juniorMoney = juniorRiders * 12.25;
        money = seniorMoney + juniorMoney;
    } else if (pathType === 'road') {
        seniorMoney = seniorRiders * 21.50;
        juniorMoney = juniorRiders * 20;
        money = seniorMoney + juniorMoney;
    } else if (pathType === 'cross-country') {
        seniorMoney = seniorRiders * 9.50;
        juniorMoney = juniorRiders * 8;
        money = seniorMoney + juniorMoney;
        if (totalNumberOfPeople >= 50) {
            seniorMoney = seniorRiders * (9.50 * 0.75);
            juniorMoney = juniorRiders * (8 * 0.75);
            money = seniorMoney + juniorMoney;
        }
    }
    moneyForGiving = money * 0.95 // 5 percent for debts connected to the competition
    console.log(moneyForGiving.toFixed(2));
}
bikeRace(["21", "26", "cross-country"]);