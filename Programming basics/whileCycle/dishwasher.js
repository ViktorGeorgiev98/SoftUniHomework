function dishwasher(input) {
    let numberOfBottles = Number(input[0]);
    let index = 1;
    let usedBottles = 0;
    let liquid = numberOfBottles * 750;
    let counterWashing = 0;
    let usedLiquid = 0;
    let tendjera = 0;
    let chinii = 0;
    while (true) {
        let dishesNumber = input[index];
        let numberDishes = Number(dishesNumber);
        index++;
        if (dishesNumber === 'End') {
            break;
        }
        counterWashing += 1;
        if (counterWashing % 3 === 0) {
            usedLiquid += numberDishes * 15;
            tendjera += numberDishes;
        } else {
            usedLiquid += numberDishes * 5;
            chinii += numberDishes;
        }

    }
    if (usedLiquid <= liquid) {
        let diff = Math.abs(liquid - usedLiquid);
        console.log('Detergent was enough!');
        console.log(`${chinii} dishes and ${tendjera} pots were washed.`);
        console.log(`Leftover detergent ${diff} ml.`);
    } else {
        let diff = Math.abs(usedLiquid - liquid);
        console.log(`Not enough detergent, ${diff} ml. more necessary!`);
    }
}
dishwasher(["2", "53", "65", "55", "End"])