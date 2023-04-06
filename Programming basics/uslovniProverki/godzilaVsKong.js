function godzilaVsKong(input) {
    let filmBudget = Number(input[0]);
    let statistNumber = Number(input[1]);
    let priceClothesStatist = Number(input[2]);
    let decorPrice = filmBudget * 0.10;
    priceAllStatist = statistNumber * priceClothesStatist;
    if (statistNumber > 150) {
        priceAllStatist = priceAllStatist * 0.90;
    }
    let allExpenses = decorPrice + priceAllStatist;
    if (allExpenses > filmBudget) {
        let moneyNeeded = Math.abs(filmBudget - allExpenses);
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    } else {
        let moneyLeft = Math.abs(filmBudget - allExpenses);
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
        
    }
}