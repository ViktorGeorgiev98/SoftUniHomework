function gozila(input) {
    let budget = Number(input[0]);
    let statistNumber = Number(input[1]);
    let priceClothingStatist = Number(input[2]);
    let decorPrice = budget * 0.1;
    let clothingPrice = statistNumber * priceClothingStatist;
    if (statistNumber > 150) {
        clothingPrice *= 0.90;
    }
    let totalPrice = decorPrice + clothingPrice;
    if (totalPrice <= budget) {
        let diff = Math.abs(totalPrice - budget);
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    } else {
        let diff = Math.abs(totalPrice - budget);
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }
    
    
}
gozila(["20000", 
    "120",
    "55.5"])