function newHouse(input) {
    let flowerType = input[0];
    let numFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    if (flowerType == "Roses") {
        price = numFlowers * 5;
        if (numFlowers > 80) {
            price = (numFlowers * 5) * 0.90
        }
    } else if (flowerType == "Dahlias") {
        price = numFlowers * 3.80
        if (numFlowers > 90) {
            price = (numFlowers * 3.80) * 0.85
        }
    } else if (flowerType == "Tulips") {
        price = numFlowers * 2.80;
        if (numFlowers > 80) {
            price = (numFlowers * 2.80) * 0.85
        }
    }  else if (flowerType == "Narcissus") {
        price = numFlowers * 3;
        if (numFlowers < 120) {
            price = (numFlowers * 3) * 1.15;
        }
    } else if (flowerType == "Gladiolus") {
        price = numFlowers * 2.50;
        if (numFlowers < 80) {
            price = (numFlowers * 2.50) * 1.20
        }
    }
    let diffPrice = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${numFlowers} ${flowerType} and ${diffPrice.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${diffPrice.toFixed(2)} leva more.`)
    }
}