function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermanNum = Number(input[2]);
    let rentShipPrice = 0;
    if (season == "Spring") {
        rentShipPrice = 3000;
        if (fishermanNum <= 6) {
            price = 3000 * 0.9;
        } else if(fishermanNum <= 11) {
            price = 3000 * 0.85;
        } else if(fishermanNum >= 12) {
            price = 3000 * 0.75
        }
        if (fishermanNum % 2 == 0) {
            price = price * 0.95
        }
    } else if (season == "Summer") {
        rentShipPrice = 4200;
        if (fishermanNum <= 6) {
            price = 4200 * 0.9;
        } else if(fishermanNum <= 11) {
            price = 4200 * 0.85;
        } else if(fishermanNum >= 12) {
            price = 4200 * 0.75
        }
        if (fishermanNum % 2 == 0) {
            price = price * 0.95
        }
    } else if (season == "Autumn") {
        rentShipPrice = 4200;
        if (fishermanNum <= 6) {
            price = 4200 * 0.9;
        } else if(fishermanNum <= 11) {
            price = 4200 * 0.85;
        } else if(fishermanNum >= 12) {
            price = 4200 * 0.75
        }
    } else if (season == "Winter") {
        rentShipPrice = 2600;
        if (fishermanNum <= 6) {
            price = 2600 * 0.9;
        } else if(fishermanNum <= 11) {
            price = 2600 * 0.85;
        } else if(fishermanNum >= 12) {
            price = 2600 * 0.75
        }
        if (fishermanNum % 2 == 0) {
            price = price * 0.95
        }
    }
    let diff = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}
// fishingBoat(["3000",

// "Summer",

// "11"])