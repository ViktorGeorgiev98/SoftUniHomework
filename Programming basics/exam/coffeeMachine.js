function coffeeMachine(input) {
    let drink = input[0];
    let sugarYesOrNo = input[1];
    let numberOfDrinks = Number(input[2]);
    let price = 0;
    if (drink === 'Espresso') {
        if (sugarYesOrNo === 'Without') {
            price = (numberOfDrinks * 0.90) * 0.65;
        } else if (sugarYesOrNo === 'Normal') {
            price = numberOfDrinks * 1;
        } else if (sugarYesOrNo === 'Extra') {
            price = numberOfDrinks * 1.20;
        }
        if (numberOfDrinks >= 5) {
            price = price * 0.75;
        }   
    } else if (drink === 'Cappuccino') {
        if (sugarYesOrNo === 'Without') {
            price = (numberOfDrinks * 1) * 0.65;
        } else if (sugarYesOrNo === 'Normal') {
            price = numberOfDrinks * 1.20;
        } else if (sugarYesOrNo === 'Extra') {
            price = numberOfDrinks * 1.60;
        }
    } else if (drink === 'Tea') {
        if (sugarYesOrNo === 'Without') {
            price = (numberOfDrinks * 0.50) * 0.65;
        } else if (sugarYesOrNo === 'Normal') {
            price = numberOfDrinks * 0.60;
        } else if (sugarYesOrNo === 'Extra') {
            price = numberOfDrinks * 0.70;
        }
    }
    if (price > 15) {
        price *= 0.80;
    }
    console.log(`You bought ${numberOfDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`);
}
coffeeMachine(["Cappuccino", "Normal", "13"])