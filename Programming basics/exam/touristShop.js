function touristShop(input) {
    let budget = Number(input[0]);
    let index = 1;
    let price = 0;
    let productNumber = 0;
    let moneyLeft = budget;
    while (true) {
        let productName = input[index];
        index++;
        if (productName === 'Stop') {
            console.log(`You bought ${productNumber} products for ${price.toFixed(2)} leva.`);
            break;
        }
        let productPrice = Number(input[index]);
        index++;
        productNumber += 1;
        if (moneyLeft < productPrice) {
            let diff = Math.abs(moneyLeft - productPrice);
            console.log(`You don't have enough money!`);
            console.log(`You need ${diff.toFixed(2)} leva!`);
            break;
        }
        
        moneyLeft -= productPrice;
        if (productNumber % 3 === 0) {
            productPrice /= 2;
        }
        price += productPrice;
        // moneyLeft -= productPrice;
        // productName = input[index];

    }
    // if (productName === 'Stop') {
    //     // console.log(`You bought ${productNumber} products for ${price.toFixed(2)} leva.`);
    // }
    
}
touristShop(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"])
