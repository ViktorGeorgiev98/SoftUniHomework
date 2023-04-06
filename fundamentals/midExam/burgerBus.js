function burgerBus(arr) {
    let numberOfCitiesVisited = Number(arr.shift());
    let cityCounter = 0;
    let currentProfit = 0;
    let totalProfit = 0;
    let newArr = [];
    let rainyDay = false;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || i % 3 === 0) {
            let elementToBePushed = `${arr[i]} ${arr[i + 1]} ${arr[i +2 ]}`;
            newArr.push(elementToBePushed);
        }
    }
    for (let j = 0; j < newArr.length; j++) {
        let cityAndProfitAndExpense = newArr[j].split(' ');
        let city = cityAndProfitAndExpense[0];
        let profit = Number(cityAndProfitAndExpense[1]);
        let expense = Number(cityAndProfitAndExpense[2]);
        cityCounter++;
        if (cityCounter % 5 === 0) {
            profit *= 0.90;
            rainyDay = true;
        } else {
            rainyDay = false;
        }
        if (cityCounter % 3 === 0) {
            if (rainyDay != true) {
                expense *= 1.50;
            }
        }
        let dailyProfit = profit - expense;
        totalProfit += dailyProfit;
        console.log(`In ${city} Burger Bus earned ${dailyProfit.toFixed(2)} leva.`);

    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}
burgerBus(["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])

