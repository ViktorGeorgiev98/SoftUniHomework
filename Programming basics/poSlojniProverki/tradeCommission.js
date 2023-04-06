function tradeComm(input) {
    let city = input[0];
    let numberSales = Number(input[1]);
    let commission = 0;
    if (city == "Sofia") {
        if (numberSales >= 0 && numberSales <= 500) {
            commission = 0.05
        } else if (numberSales > 500 && numberSales <= 1000) {
            commission = 0.07
        } else if (numberSales > 1000 && numberSales <= 10000) {
            commission = 0.08
        } else if (numberSales > 10000) {
            commission = 0.12
        } else {
            console.log("error")
        }
    } else if (city == "Varna") {
        if (numberSales >= 0 && numberSales <= 500) {
            commission = 0.045
        } else if (numberSales > 500 && numberSales <= 1000) {
            commission = 0.075
        } else if (numberSales > 1000 && numberSales <= 10000) {
            commission = 0.10
        } else if (numberSales > 10000) {
            commission = 0.13
        } else {
            console.log("error")
        }
    } else if (city == "Plovdiv") {
        if (numberSales >= 0 && numberSales <= 500) {
            commission = 0.055
        } else if (numberSales > 500 && numberSales <= 1000) {
            commission = 0.08
        } else if (numberSales > 1000 && numberSales <= 10000) {
            commission = 0.12
        } else if (numberSales > 10000) {
            commission = 0.145
        } else {
            console.log("error")
        }
    } else {
        console.log("error")
    }
    let finalProfit = numberSales * commission
    if (finalProfit > 0) {
        console.log(finalProfit.toFixed(2));
    // } else {
    //     console.log("error");
    }

}
// tradeComm(["Varna", "500"]);