function fruitMarket(input) {
    let strawberryPrice = Number(input[0]);
    let bananaKg = Number(input[1]);
    let orangeKg = Number(input[2]);
    let maliniKg = Number(input[3]);
    let strawberryKg = Number(input[4]);
    let maliniPrice = strawberryPrice / 2 
    let orangePrice = maliniPrice * 0.60;
    let bananaPrice = maliniPrice * 0.20;
    let strawberryTotalPrice = strawberryKg * strawberryPrice;
    let totalPrice = (maliniPrice * maliniKg) + (orangePrice * orangeKg) + (bananaPrice * bananaKg) + strawberryTotalPrice;
    console.log(totalPrice.toFixed(2));
}

fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);