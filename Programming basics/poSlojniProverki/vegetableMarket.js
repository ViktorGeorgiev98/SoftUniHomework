function vegetableMarket(input) {
    let priceKgVeg = Number(input[0]);
    let priceFruitKg = Number(input[1]);
    let vegKg = Number(input[2]);
    let fruitKg = Number(input[3]);
    let wholePrice = priceFruitKg * fruitKg + vegKg * priceKgVeg;
    let wholePriceEuro = wholePrice / 1.94;
    console.log(wholePriceEuro.toFixed(2));
}